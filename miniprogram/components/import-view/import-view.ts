// components/import-view/import-view.ts
import { saveHistoryItem, saveUserWord } from '../../utils/db';
import { translateThaiToChinese } from '../../utils/translate';

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    inputText: '',
    chineseTranslation: '',
    loading: false,
    
    // 预览数据
    previewMode: false,
    parsedSentence: '',
    parsedWords: [] as Array<{ word: string; meaning: string; phonetic: string }>,
    
    // 样例
    placeholderText: `【在此处粘贴您的学习资料，格式如下：】\n\n“ลูกค้า” = 客人 (lûuk-kháa)\n“ให้” = 提供 (hâi)\n“ข้อกำหนด” = 要求 (khâaw-gam-nòt)\n\nลูกค้าให้ข้อกำหนด`
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onInputText(e: any) {
      this.setData({
        inputText: e.detail.value
      });
    },

    onInputChinese(e: any) {
      this.setData({
        chineseTranslation: e.detail.value
      });
    },

    onClear() {
      this.setData({
        inputText: '',
        chineseTranslation: '',
        previewMode: false,
        parsedSentence: '',
        parsedWords: []
      });
    },

    /**
     * 解析输入的文本
     */
    onParse() {
      const text = this.data.inputText.trim();
      if (!text) {
        wx.showToast({
          title: '请输入导入文本',
          icon: 'none'
        });
        return;
      }

      // 按行切分并清理
      const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      
      const parsedWords: Array<{ word: string; meaning: string; phonetic: string }> = [];
      const sentenceLines: string[] = [];
      
      // 正则表达式匹配: “单词” = 释义 (音标)
      // 支持中英文括号、等号周围任意空格
      const wordRegex = /“([^”]+)”\s*=\s*([^(（]+)\s*[((（]([^)）]+)[)）]/;

      for (const line of lines) {
        const match = wordRegex.exec(line);
        if (match) {
          parsedWords.push({
            word: match[1].trim(),
            meaning: match[2].trim(),
            phonetic: match[3].trim()
          });
        } else {
          // 如果不符合单词定义格式，且含有泰文字符，则作为整句候选
          // 泰语 Unicode 范围: \u0e00-\u0e7f
          if (/[\u0e00-\u0e7f]/.test(line)) {
            sentenceLines.push(line);
          }
        }
      }

      if (parsedWords.length === 0) {
        wx.showToast({
          title: '未解析到“单词” = 释义 (音标) 格式的内容',
          icon: 'none',
          duration: 2500
        });
        return;
      }

      // 将泰语整句行合并 (以空格或逗号连接)
      const parsedSentence = sentenceLines.join(' ').trim();
      if (!parsedSentence) {
        wx.showToast({
          title: '未解析到泰语整句内容',
          icon: 'none'
        });
        return;
      }

      this.setData({
        previewMode: true,
        parsedSentence: parsedSentence,
        parsedWords: parsedWords
      });
    },

    onBackToEdit() {
      this.setData({
        previewMode: false
      });
    },

    /**
     * 保存导入的数据
     */
    onSaveImport() {
      const { parsedSentence, parsedWords, chineseTranslation } = this.data;
      
      if (!parsedSentence || parsedWords.length === 0) return;

      this.setData({ loading: true });

      const saveAction = (chineseText: string) => {
        // 1. 将所有解析出的单词保存入用户本地自建词典，以备后续翻译和分词自动识别
        for (const w of parsedWords) {
          saveUserWord(w.word, w.phonetic, w.meaning);
        }

        // 2. 将整句翻译保存到笔记本历史中
        const historyId = Date.now().toString();
        const historyItem = {
          id: historyId,
          chinese: chineseText || '（自定义录入无翻译）',
          thai: parsedSentence,
          // 转换数据结构为 WordBreakdown
          words: parsedWords.map(w => ({
            word: w.word,
            meaning: w.meaning,
            phonetic: w.phonetic,
            isCustom: true,
            isUnknown: false
          })),
          createdAt: Date.now(),
          starred: false,
          mastered: false,
          wrongCount: 0,
          reviewCount: 0
        };

        saveHistoryItem(historyItem);
        this.setData({ loading: false });

        wx.showToast({
          title: '保存并录入成功',
          icon: 'success',
          duration: 1500
        });

        // 触发刷新事件，刷新笔记本页面数据
        this.triggerEvent('historychange');

        // 延迟切回编辑，并清空输入
        setTimeout(() => {
          this.onClear();
          // 发出事件让父级跳转至笔记本 Tab
          this.triggerEvent('switchtab', { tab: 'review' });
        }, 1500);
      };

      // 如果提供了中文翻译，直接保存
      if (chineseTranslation.trim()) {
        saveAction(chineseTranslation.trim());
      } else {
        // 如果没有提供中文翻译，尝试在后台自动调用翻译接口（泰翻中）
        translateThaiToChinese(parsedSentence)
          .then((translatedZh: string) => {
            saveAction(translatedZh);
          })
          .catch((err: any) => {
            console.error('自动翻译失败，使用空翻译保存:', err);
            // 翻译失败则留空保存，不阻碍用户自建数据
            saveAction('（暂无中文整句翻译，可在笔记本中查看单字）');
          });
      }
    }
  }
});
