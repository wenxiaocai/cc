Vue.component('PhoenixActivity', {
  template: `
<div class="phoenix-section--activity">
  <img
    class="phoenix-section__title"
    src="images/title-2.png"
    alt=""
  >
  <div
    class="active_list"
    v-show="active_list.length > 0"
  >
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in active_list"
        >
          <span class="active_status"><i :class="item.sactive_status"></i>{{item.sactive_status_desc}}</span>
          <a
            :href="item.url.ZYDMALL ? item.url.ZYDMALL : 'javascript:;'"
            class="active_img"
            :class="{'cursorDefault': !item.url.ZYDMALL}"
            :target="item.url.ZYDMALL ? '_blank' : ''"
          >
            <span class="active_mask"></span>
            <img
              :src="item.simageUrl"
              alt=""
            >
          </a>
        </div>
      </div>
      <div class="swiper-button-prev-xl iconfont iconjinrupinpaizhan"></div>
      <div class="swiper-button-next-xl iconfont iconjinrupinpaizhan"></div>
      <div class="swiper-pagination-xl"></div>
    </div>
  </div>
</div>`,
  props: {
    brandId: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      active_list: [],
    }
  },
  created() {
    this.getActiveList();

  },
  methods: {
    // 获取活动列表
    getActiveList() {
      let _this = this;
      apiPhoenix.fetchActivityList(this.brandId).then(response => {
        if (response) {
          timestamp = new Date().getTime();

          response.forEach(item => {
            let tcreate = new Date(item.createTime).getTime(),
              tend = new Date(item.endTime).getTime();

            if (item.actStatus == 1) {
              item.sactive_status = 'conduct';
              item.sactive_status_desc = '进行中';
            } else if (item.actStatus == 2) {
              item.sactive_status = 'end';
              item.sactive_status_desc = '已结束';
            } else if (item.actStatus == 3) {
              item.sactive_status = 'start';
              item.sactive_status_desc = '即将开始';
            }

            item.simageUrl = item.actImg;
            item.url = JSON.parse(item.actLinkDict)
          })
          this.active_list = response;
          this.$nextTick(() => this.activeSwiperInit());
        }
      })

    },
    // 初始化活动列表轮播
    activeSwiperInit() {
      this.activeSwiper = new Swiper('.active_list .swiper-container', {
        loop: true,
        // initialSlide: 1,
        // autoplay : {delay: 1500},
        speed: 1300,
        slidesPerView: 3,
        centeredSlides: true,
        watchSlidesProgress: true,
        on: {
          setTranslate: function() {
            slides = this.slides
            for (i = 0; i < slides.length; i++) {
              slide = slides.eq(i)
              progress = slides[i].progress
              slide.css({
                'opacity': '',
                'background': ''
              });
              slide.transform(''); //清除样式
              slide.transform('scale(' + (1 - Math.abs(progress) / 4.4) + ')');
            }
          },
          setTransition: function(transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition);
            }
          },
        },
        navigation: {
          nextEl: '.swiper-button-next-xl',
          prevEl: '.swiper-button-prev-xl',
        },
        pagination: {
          el: '.swiper-pagination-xl',
          clickable: true,
        },
      });
    },
  }
})