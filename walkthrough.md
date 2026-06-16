# 泰语学习小程序：情景页有道发音屏蔽与全量分词离线音频库补全报告 (2026-06-16)

我们已成功完成并验证了情景页屏蔽有道发音以及离线发音白名单库 100% 覆盖的终极修复。

---

## 做出修改的清单

### 1. 彻底屏蔽有道发音
- **问题分析**：在之前的版本中，如果本地缓存或远程 GitHub 托管音频因为文件缺失或哈希未录入而加载失败，`playThaiTTS` 会自动回退调用 `playViaYoudao`（有道接口发音）。由于有道的泰语发音质量较差，这导致了较差的用户体验。
- **解决方案**：
  1. 在 [tts.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/tts.ts) 中的 `playThaiTTS` 接口添加了 `disableYoudao?: boolean` 参数。
  2. 当 `disableYoudao` 为 `true` 时，若本地/远程 CDN 音频播放失败，直接触发结束回调并报错，绝对不调用 `playViaYoudao` 回退。
  3. 修改了 [scenarios-view.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/components/scenarios-view/scenarios-view.ts) 中所有的 `playThaiTTS` 调用（包括情景句播放、常用短语播放、以及点击单词拆解时的单字播放），全部强制传入 `disableYoudao = true`，从物理层屏蔽了有道在情景页的使用。

### 2. 补全 1519 个缺失的分词/单字离线音频
- **问题分析**：情景对话的整句和短语之前已经全部预载并生成了哈希，但用户在情景页点击**单字/词组拆解**（如“ข้าวเหนียวมะม่วง” 芒果糯米饭）时，这些单独的词条并不在 `static_hashes.ts` 白名单中，从而因量大缺失触发了有道发音。
- **解决方案**：
  1. 编写了自动化提取脚本 [download_all_scenario_assets.js](file:///c:/Users/m1774/Desktop/Thai/scratch/download_all_scenario_assets.js)，利用字典的最大匹配（Greedy Match）分词算法，将所有情景对话及短语的句子完全拆解成可能点击的单词。
  2. 提取出整句与分词后，总计有 **3064** 个唯一的 playable text。
  3. 比对已有的 1545 个音频，计算出缺失的分词音频为 **1519** 个（例如“ครับ”、“ได้ค่ะ”、“รสชาติ”、“ข้าวเหนียวมะม่วง”等词组）。
  4. 脚本以并发线程自动下载这 1519 个缺失音频 of Google TTS 文件，并通过本地 `ffmpeg` 压缩为低延迟高质量音频（16kbps、单声道、16000 采样率），分流保存至各 `audio_pkg_*` 目录下。
  5. 重新生成并更新了 [static_hashes.ts](file:///c:/Users/m1774/Desktop/Thai/miniprogram/utils/static_hashes.ts)，使哈希白名单记录扩充至完整的 **3064** 个，达成 100% 覆盖。

### 3. 多分支同步推送
- **远程音频分支 `audio-assets`**：切换到 `audio-assets` 分支，利用 `git add -f` 强制将新增的 1519 个压缩音频 `.mp3` 提交并推送到 GitHub 远程仓库，实现 CDN 瞬时分发。
- **核心代码分支 `master`**：提交并推送了更新后的 `tts.ts`、`scenarios-view.ts`、`static_hashes.ts` 以及清理后的未使用 import。

---

## 验证与校验结果

1. **白名单覆盖率检测**：
   - 运行校验脚本：`node scratch/extract_all_scenarios_segmented_words.js`
   - 结果：**情景句子、短语及全部拆解分词的哈希缺失数降为 0**！所有词汇均可在白名单内通过 CDN 直连秒开播放。
2. **TypeScript 全局编译**：
   - 运行：`npx.cmd -p typescript tsc --skipLibCheck --noEmit`
   - 结果：**编译完美通过，无任何类型或声明警告**。
