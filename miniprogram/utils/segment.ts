// utils/segment.ts
import { lookupWord } from './dict';
import { getUserDict } from './db';
import { BUILTIN_DICT } from './dict';

export interface SegmentedWord {
  word: string;
  phonetic: string;
  meaning: string;
  isCustom: boolean; // 是否是自定义词汇或临时添加的词
  isUnknown: boolean; // 是否是未识别词
}

/**
 * 获取所有字典词汇列表（按长度降序排列）
 */
function getSortedDictWords(): string[] {
  const builtinKeys = Object.keys(BUILTIN_DICT);
  const userDict = getUserDict();
  const userKeys = Object.keys(userDict);
  
  // 合并并去重
  const allKeys = Array.from(new Set([...builtinKeys, ...userKeys]));
  
  // 长度降序排序
  return allKeys.sort((a, b) => b.length - a.length);
}

/**
 * 使用 Intl.Segmenter 对未知分段进行精细切分
 */
function segmentUnknownText(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  
  if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
    try {
      const segmenter = new (Intl as any).Segmenter('th', { granularity: 'word' });
      const segments = segmenter.segment(trimmed);
      const result: string[] = [];
      for (const { segment } of segments) {
        const word = segment.trim();
        if (word && !/[\s\p{P}]/u.test(word)) { // 过滤空格和标点
          result.push(word);
        }
      }
      return result;
    } catch (e) {
      console.error('Intl.Segmenter failed:', e);
    }
  }
  
  // 兜底：如果不支持 Intl.Segmenter，或者出错，按泰文字符或空格简单拆分
  // 泰语没有空格，因此拆为单字或按常见声母简单切，这里按常见字符拆分
  return trimmed.split('').filter(char => char.trim() !== '');
}

/**
 * 泰语分词主函数 (系统分词器 Intl.Segmenter + 字典相邻合并还原 + 传统最大匹配兜底)
 */
export function segmentThai(text: string): SegmentedWord[] {
  if (!text) return [];

  // 1. 判断是否支持底层的 Intl.Segmenter
  const hasIntlSegmenter = typeof Intl !== 'undefined' && (Intl as any).Segmenter;

  if (hasIntlSegmenter) {
    try {
      // 1.1 使用系统的 Intl.Segmenter 进行初步粗分词 (保证“แตงโม”、“น้ำตา”等名词不被切分)
      const segmenter = new (Intl as any).Segmenter('th', { granularity: 'word' });
      const segmentsObj = segmenter.segment(text);
      const rawSegments: string[] = [];
      for (const { segment } of segmentsObj) {
        const word = segment.trim();
        if (word && !/[\s\p{P}]/u.test(word)) { // 过滤空白和标点
          rawSegments.push(word);
        }
      }

      // 1.2 结合字典进行贪婪合并，还原过度拆分的词（如“ข้อกำหนด”、“ต่ำที่สุด”、“จะทำ”、“จะรับผิดชอบ”）
      const mergedSegments: string[] = [];
      let idx = 0;
      const numSegs = rawSegments.length;

      while (idx < numSegs) {
        let matched = false;
        
        // 尝试向前合并最多 4 个相邻的分词，检查合并后的整词是否在词典里
        for (let mergeLen = Math.min(4, numSegs - idx); mergeLen >= 2; mergeLen--) {
          const combinedWord = rawSegments.slice(idx, idx + mergeLen).join('');
          const info = lookupWord(combinedWord);
          if (info) {
            mergedSegments.push(combinedWord);
            idx += mergeLen;
            matched = true;
            break;
          }
        }

        if (!matched) {
          mergedSegments.push(rawSegments[idx]);
          idx++;
        }
      }

      // 1.3 转换为最终的 SegmentedWord 结构
      return mergedSegments.map(w => {
        const info = lookupWord(w);
        if (info) {
          return {
            word: w,
            phonetic: info.phonetic,
            meaning: info.meaning,
            isCustom: !BUILTIN_DICT[w], // 如果不在内置词典，则是自定义词汇
            isUnknown: false
          };
        } else {
          return {
            word: w,
            phonetic: '',
            meaning: '点击添加注释',
            isCustom: false,
            isUnknown: true
          };
        }
      });

    } catch (e) {
      console.error('Intl.Segmenter failed, falling back to Max Match:', e);
    }
  }

  // --- 2. 传统最大匹配法 (Max Match) 兜底，保障极端兼容性 ---
  const dictWords = getSortedDictWords();
  const result: SegmentedWord[] = [];
  let i = 0;
  const len = text.length;

  let unknownBuffer = '';

  const flushUnknownBuffer = () => {
    if (unknownBuffer.length > 0) {
      const subWords = segmentUnknownText(unknownBuffer);
      for (const w of subWords) {
        const info = lookupWord(w);
        if (info) {
          result.push({
            word: w,
            phonetic: info.phonetic,
            meaning: info.meaning,
            isCustom: false,
            isUnknown: false,
          });
        } else {
          result.push({
            word: w,
            phonetic: '',
            meaning: '点击添加注释',
            isCustom: false,
            isUnknown: true,
          });
        }
      }
      unknownBuffer = '';
    }
  };

  while (i < len) {
    let matched = false;

    for (const dictWord of dictWords) {
      const wordLen = dictWord.length;
      if (i + wordLen <= len && text.substring(i, i + wordLen) === dictWord) {
        flushUnknownBuffer();

        const info = lookupWord(dictWord);
        result.push({
          word: dictWord,
          phonetic: info ? info.phonetic : '',
          meaning: info ? info.meaning : '未知',
          isCustom: !BUILTIN_DICT[dictWord],
          isUnknown: false,
        });

        i += wordLen;
        matched = true;
        break;
      }
    }

    if (!matched) {
      unknownBuffer += text[i];
      i++;
    }
  }

  flushUnknownBuffer();
  return result;
}
