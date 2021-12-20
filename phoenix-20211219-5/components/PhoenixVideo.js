Vue.component('PhoenixVideo', {
  template: `
<div class="video-section">
  <img
    class="phoenix-section__title"
    src="/phoenix/images/title-1.png?v=20210226"
    alt="悦享视界"
  />
  <div class="video-section__main">
    <div class="video-section__video">
      <div class="swiper-video" 
      @mouseover="videoMouseOver"
      @mouseleave="videoMouseLeave">
        <div class="swiper-wrapper">
          <div
            v-for="(video,videoIndex) in videoList"
            :key="video.pkid"
            class="swiper-slide"
          >

            <div 
              v-if="!clickedVideo.includes(videoIndex)" 
              class="swiper-video__poster-wrap" 
              @click="playVideo(video,videoIndex)">
              <img
                :src="video.scoverImgUrl"
                class="swiper-video__poster"
                :alt="video.title"
              >
            </div>
             <video
              :ref="'video'+videoIndex"
              class="swiper-video__video"
              :src="video.svideoUrl"
              :poster="video.scoverImgUrl"
              controls
            ></video>
          </div>
        </div>
        <!-- 视频侧边菜单 -->
        <div class="swiper-pagination-video" :class="{hide:isHideVideoSidebar}"></div>
        <!-- 视频侧边菜单 end -->
      </div>
    </div>
    <div class="video-section__article">
      <img
        class="video-section__article-hd"
        src="/phoenix/images/title-article.png"
        alt="最新动态"
      />
      <div class="video-section__article-list">
        <ul class=" article-list">
          <li
            v-for="article in articleList"
            :key="article.pkid"
            class="article-list__item"
            @click="showArticleDetail(article)"
          >
            <p class="article-list__title">{{article.spaperTitle}}</p>
            <p class="article-list__date">{{article.dupdateTime}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

    <dialog-article-detail
      v-if="visibleDialogArtical"
      :visible.sync="visibleDialogArtical"
      :article-html="articleHtml"
    ></dialog-article-detail>
</div>`,
  props: {
    brandId: {
      type: String,
      default: ''
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      videoList: [],
      articleList: [],
      // 否显示最新动态详情
      visibleDialogArtical: false,
      articleHtml: '',
      // 当前播放的视频索引
      activevideoIndex: null,
      // 已经点击过的视频集合
      clickedVideo: [],
      isHideVideoSidebar: false,
      swiperInstance: null,
      isClicked: false
    }
  },
  created() {},
  mounted() {
    // this.$nextTick(() => {
    if (this.isLogin) {
      this.fetchArticleList()
      console.log('video', this.isLogin)
      this.fetchVideoList().then(response => {
        this.createdVideoSwiper()
      })
    }

    // })
  },
  methods: {
    createdVideoSwiper() {
      const _this = this
      this.swiperInstance = new Swiper('.swiper-video', {
        direction: 'vertical',
        effect: 'fade',
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: '.swiper-pagination-video',
          clickable: true,
          renderBullet: function(index, className) {
            return '<div class="' + className + '"> <p class = "swiper-pagination-video__title" > ' + _this.videoList[index].svideoName + ' </p> <p class = "swiper-pagination-video__content" > ' + _this.videoList[index].svideoDescribe + ' </p> </div>';
          },
        },
        on: {
          click: function(swiper, event) {
            _this.isClicked = true

            _this.swiperInstance.autoplay.stop()
          },
          slideChange: function() {
            console.log('slideChange', this.activeIndex)
            // 因为点击时间无法准确获取点击后的索引，所以在当前时间处理播放
            if (_this.isClicked) {
              _this.playVideo(_this.videoList[this.activeIndex], this.activeIndex)
              _this.isClicked = false
            }
            // _this.stopLastVideo()
            // _this.startVideo(this.activeIndex)
          },
          autoplayStart: function() {
            console.log('开启自动切换');
          },
          autoplayStop: function() {
            console.log('关闭自动切换');
          }
        },
      });
    },
    fetchVideoList() {
      return new Promise((resolve, reject) => {
        let params = {
          brandId: this.brandId,
          pageNum: 1,
          pageSize: 10
        }
        apiPhoenix.fetchVideoList(params).then(response => {
          if (response) {
            ({ datas: this.videoList } = response)
            resolve(response)
          }
        })
      })
    },
    fetchArticleList() {
      let params = {
        brandId: this.brandId,
        pageNum: 1,
        pageSize: 10
      }
      apiPhoenix.fetchArticleList(params).then(response => {
        if (response) {
          ({ datas: this.articleList } = response)
        }
      })
    },
    // stopLastVideo() {
    //   if (this.activevideoIndex !== null) {
    //     this.$refs[`video${this.activevideoIndex}`][0].pause()
    //   }
    // },
    // startVideo(index) {
    //   this.activevideoIndex = index
    //   this.$refs[`video${index}`][0].play()
    // },
    // 点击播放当前视频
    playVideo(video, videoIndex) {
      console.log(video, videoIndex)
      // this.stopLastVideo(videoIndex)
      // this.startVideo(videoIndex)
      if (this.activevideoIndex !== null) {
        this.$refs[`video${this.activevideoIndex}`][0].pause()
      }
      this.activevideoIndex = videoIndex
      this.$refs[`video${videoIndex}`][0].play()
      if (!this.clickedVideo.includes(videoIndex)) {
        this.clickedVideo.push(videoIndex)
      }
      apiPhoenix.recodeVideoClick(video.pkid).then(response => {})
      // this.isHideVideoSidebar = true
    },
    showArticleDetail(article) {
      this.articleHtml = article.spaperDescribe
      this.visibleDialogArtical = true
      apiPhoenix.recodeArticleClick(article.pkid).then(response => {})
    },
    videoMouseOver() {
      this.swiperInstance.autoplay.stop()

    },
    videoMouseLeave() {
      // this.swiperInstance.autoplay.start()

    }
  }
})