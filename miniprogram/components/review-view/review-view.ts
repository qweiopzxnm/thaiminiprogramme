// components/review-view/review-view.ts
import { getHistory, deleteHistoryItem, saveHistoryItem, TranslationItem } from '../../utils/db';
import { playThaiTTS, stopThaiTTS } from '../../utils/tts';

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    activeMode: 'list' as 'list' | 'card',
    historyList: [] as TranslationItem[],
    filteredHistory: [] as TranslationItem[],
    searchQuery: '',
    expandedId: '',

    // 闪卡复习相关
    cardList: [] as TranslationItem[],
    currentIndex: 0,
    isFlipped: false,
    currentCard: null as TranslationItem | null,
    reviewFinished: false,
    scoreRemember: 0,
    scoreForgot: 0,
    cardLanguageMode: 'zh' as 'zh' | 'th', // zh: 中文在正面, th: 泰文在正面

    // 发音状态管理
    playingSentenceText: '',
    playingWordKey: '' // 单词发音唯一标识 "word-index"
  },

  lifetimes: {
    attached() {
      this.loadHistory();
    },
    detached() {
      stopThaiTTS();
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 外部调用的刷新数据方法 (例如从父组件调用)
     */
    onRefresh() {
      this.loadHistory();
      if (this.data.activeMode === 'card') {
        this.initReview();
      }
    },

    /**
     * 加载本地学习历史记录
     */
    loadHistory() {
      const list = getHistory();
      // 格式化时间显示
      const formattedList = list.map(item => {
        const date = new Date(item.createdAt);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        const hr = String(date.getHours()).padStart(2, '0');
        const min = String(date.getMinutes()).padStart(2, '0');
        return {
          ...item,
          formattedTime: `${y}-${m}-${d} ${hr}:${min}`
        };
      });

      this.setData({
        historyList: formattedList
      }, () => {
        this.applyFilter();
      });
    },

    /**
     * 应用关键字搜索过滤
     */
    applyFilter() {
      const query = this.data.searchQuery.trim().toLowerCase();
      if (!query) {
        this.setData({
          filteredHistory: this.data.historyList
        });
        return;
      }

      const filtered = this.data.historyList.filter(item => {
        return (
          item.chinese.toLowerCase().includes(query) ||
          item.thai.toLowerCase().includes(query) ||
          item.words.some(w => w.word.toLowerCase().includes(query) || w.meaning.toLowerCase().includes(query))
        );
      });

      this.setData({
        filteredHistory: filtered
      });
    },

    onSearch(e: any) {
      this.setData({
        searchQuery: e.detail.value
      }, () => {
        this.applyFilter();
      });
    },

    onClearSearch() {
      this.setData({
        searchQuery: ''
      }, () => {
        this.applyFilter();
      });
    },

    /**
     * 切换卡片展开折叠
     */
    onToggleExpand(e: any) {
      const id = e.currentTarget.dataset.id;
      this.setData({
        expandedId: this.data.expandedId === id ? '' : id
      });
      stopThaiTTS();
    },

    /**
     * 收藏/取消收藏
     */
    onToggleStar(e: any) {
      const id = e.currentTarget.dataset.id;
      const list = [...this.data.historyList];
      const index = list.findIndex(h => h.id === id);
      
      if (index > -1) {
        const item = list[index];
        item.starred = !item.starred;
        saveHistoryItem(item);
        
        this.setData({
          historyList: list
        }, () => {
          this.applyFilter();
        });
      }
    },

    /**
     * 删除历史记录
     */
    onDeleteHistory(e: any) {
      const id = e.currentTarget.dataset.id;
      
      wx.showModal({
        title: '删除记录',
        content: '确定要从笔记本中删除此条记录吗？',
        success: (res) => {
          if (res.confirm) {
            deleteHistoryItem(id);
            this.loadHistory();
            this.triggerEvent('historychange');
            
            wx.showToast({
              title: '已删除',
              icon: 'success'
            });
          }
        }
      });
    },

    /**
     * 切换“笔记本列表”与“闪卡记忆”模式
     */
    onChangeMode(e: any) {
      const mode = e.currentTarget.dataset.mode;
      if (mode === this.data.activeMode) return;

      this.setData({
        activeMode: mode
      });
      stopThaiTTS();

      if (mode === 'card') {
        this.initReview();
      } else {
        this.loadHistory();
      }
    },

    /**
     * 切换卡片语言模式 (中文正面 / 泰文正面)
     */
    onChangeCardLang(e: any) {
      const lang = e.currentTarget.dataset.lang as 'zh' | 'th';
      if (lang === this.data.cardLanguageMode) return;

      this.setData({
        cardLanguageMode: lang,
        isFlipped: false
      }, () => {
        stopThaiTTS();
        this.setData({
          playingSentenceText: '',
          playingWordKey: ''
        });
      });
    },

    /**
     * 初始化闪卡复习
     */
    initReview() {
      const list = getHistory();
      
      if (list.length === 0) {
        this.setData({
          cardList: [],
          currentCard: null,
          reviewFinished: false
        });
        return;
      }

      // 洗牌算法乱序卡片
      const shuffled = [...list].sort(() => Math.random() - 0.5);

      this.setData({
        cardList: shuffled,
        currentIndex: 0,
        isFlipped: false,
        currentCard: shuffled[0],
        reviewFinished: false,
        scoreRemember: 0,
        scoreForgot: 0
      });
    },

    /**
     * 翻转闪卡
     */
    onFlipCard() {
      this.setData({
        isFlipped: !this.data.isFlipped
      });
      stopThaiTTS();
      this.setData({
        playingSentenceText: '',
        playingWordKey: ''
      });
    },

    /**
     * 对卡片进行评分 (记得/模糊)
     */
    onGradeCard(e: any) {
      const grade = e.currentTarget.dataset.grade;
      const card = this.data.currentCard;
      
      if (card) {
        card.reviewCount += 1;
        if (grade === 'remember') {
          card.mastered = true;
          this.setData({ scoreRemember: this.data.scoreRemember + 1 });
        } else {
          card.wrongCount += 1;
          card.mastered = false; // 重新标记为未掌握
          this.setData({ scoreForgot: this.data.scoreForgot + 1 });
        }
        // 更新本地数据库中该卡的复习次数和状态
        saveHistoryItem(card);
      }

      // 先翻转回正面，增加过渡感
      this.setData({ isFlipped: false });

      // 延迟切卡，等待卡片回正动画完成
      setTimeout(() => {
        const nextIndex = this.data.currentIndex + 1;
        if (nextIndex < this.data.cardList.length) {
          this.setData({
            currentIndex: nextIndex,
            currentCard: this.data.cardList[nextIndex]
          });
        } else {
          this.setData({
            reviewFinished: true
          });
        }
      }, 250);
    },

    onRestartReview() {
      this.initReview();
    },

    // --- 音频发音播放逻辑 ---

    playHistorySentence(e: any) {
      const thai = e.currentTarget.dataset.thai;
      this.setData({
        playingSentenceText: thai,
        playingWordKey: ''
      });
      playThaiTTS(
        thai,
        () => {},
        () => {
          if (this.data.playingSentenceText === thai) {
            this.setData({ playingSentenceText: '' });
          }
        }
      );
    },

    playHistoryWord(e: any) {
      const { word, widx } = e.currentTarget.dataset;
      const key = `${word}-${widx}`;
      
      this.setData({
        playingWordKey: key,
        playingSentenceText: ''
      });

      playThaiTTS(
        word,
        () => {},
        () => {
          if (this.data.playingWordKey === key) {
            this.setData({ playingWordKey: '' });
          }
        }
      );
    },

    playCardSentence() {
      const card = this.data.currentCard;
      if (!card) return;
      
      this.setData({
        playingSentenceText: card.thai,
        playingWordKey: ''
      });

      playThaiTTS(
        card.thai,
        () => {},
        () => {
          if (this.data.playingSentenceText === card.thai) {
            this.setData({ playingSentenceText: '' });
          }
        }
      );
    },

    playCardWord(e: any) {
      const { word, widx } = e.currentTarget.dataset;
      const key = `${word}-${widx}`;
      
      this.setData({
        playingWordKey: key,
        playingSentenceText: ''
      });

      playThaiTTS(
        word,
        () => {},
        () => {
          if (this.data.playingWordKey === key) {
            this.setData({ playingWordKey: '' });
          }
        }
      );
    },

    preventBubble() {
      // 阻止冒泡
    }
  }
});
