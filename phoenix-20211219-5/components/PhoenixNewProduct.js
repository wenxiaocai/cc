Vue.component('PhoenixNewProduct', {
  template: `
<div class="phoenix-section--product">
  <img
    class="phoenix-section__title"
    src="images/title-3.png?v=20210226"
    alt=""
  >
  <div class="product-section__hd">
  {{productList.length}}
    <div class="swiper-container--product-new">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              <div class="swiper-slide">Slide 4</div>
              <div class="swiper-slide">Slide 5</div>
              <div class="swiper-slide">Slide 6</div>
              <div class="swiper-slide">Slide 7</div>
              <div class="swiper-slide">Slide 8</div>
              <div class="swiper-slide">Slide 9</div>
              <div class="swiper-slide">Slide 10</div> -->
        <div
          v-for="(item,index) in productList"
          class="swiper-slide"
        ><img
            :src="item.sproduct_img_url"
            alt=""
          ></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination--product-new"></div>
    </div>

      <!-- Add Arrows -->
      <div class="swiper-button-next--product-new"><i class="iconfont iconzuoyouqiehuanicon"></i></div>
      <div class="swiper-button-prev--product-new"><i class="iconfont iconzuoyouqiehuanicon-copy"></i></div>
  </div>
  <div class="product-info">
    <div class="swiper-container-product">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item,index) in productList"
        >
          <div class="product-info-box">
            <div class="product-info-price">
              <img
                class="product-info-img"
                :src="item.sproduct_img_url"
                alt=""
              >
              {{index}}
              <img
                class="product-info-txt-img"
                :id="'imgxl'+index"
                :src="item.sabout_img_url"
                alt=""
              >
              <p class="product-txt4">￥{{item.nprice}}起</p>
              <z-button
                type="primary"
                full
                class="product-buy-btn"
                :data-url="item.sjump_url"
              >
                立即选购
              </z-button>
            </div>
          </div>
          <div class="product-video">
            <video
              :id="'productVideo' + index"
              class="productVideo"
              :src="item.svideo_url"
              controlslist="nodownload"
              disablePictureInPicture
              :poster="item.svideo_url + '?x-oss-process=video/snapshot,t_100,m_fast'"
            >
            </video>
            <div class="video-cover">
              <img
                class="play-icon"
                src="images/icon-play.png?v=20210226"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="swiper-button-prev swiper_btn new_style new_btn_prev"></div>
      <div
        class="swiper-button-next swiper_btn new_style new_btn_next"
        style="left: 39px;"
      >
      </div>
      <div class="page-num new_num_xl">{{swiperProductIdx}} / 2</div> -->
    </div>
  </div>
</div>
`,
  props: {
    brandId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      productList: [{
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/PSR-CE%E5%AE%89%E5%85%A8%E7%BB%A7%E7%94%B5%E5%99%A8/%E7%BB%A7%E7%94%B5%E5%99%A8%E6%96%87%E6%A1%88.png",
          "nprice": 1202.43,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/PSR-CE%E5%AE%89%E5%85%A8%E7%BB%A7%E7%94%B5%E5%99%A8/PSR-CE%20%E5%AE%89%E5%85%A8%E7%BB%A7%E7%94%B5%E5%99%A8.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/PSR-CE%E5%AE%89%E5%85%A8%E7%BB%A7%E7%94%B5%E5%99%A8/PSR-CE%20%E5%AE%89%E5%85%A8%E7%BB%A7%E7%94%B5%E5%99%A8.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=307&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=PSR-CE"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        },
        {
          "sabout_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/%E4%BB%A5%E5%A4%AA%E7%BD%91%E6%96%87%E6%A1%88.png",
          "nprice": 1401.77,
          "svideo_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/SFNB%20%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA.mp4",
          "sproduct_img_url": "https://zydmall-product-images.oss-cn-shenzhen.aliyuncs.com/product/brand_shops/85/new_products/SFNB%E5%B7%A5%E4%B8%9A%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2%E6%9C%BA/2891001.jpg",
          "sjump_url": "https://www.zydmall.com/product/select.html?cataid=118&brand=%E8%8F%B2%E5%B0%BC%E5%85%8B%E6%96%AF&series=SFNB"
        }
      ],
      swiperProductIdx: 1,
      hotProList: [],
    }
  },
  created() {
    this.productList = this.productList.reverse()
    this.fetchProductNew()
  },
  methods: {

    //获取新品
    fetchProductNew() {
      let _this = this;
      apiPhoenix.fetchProductNew(this.brandId).then(response => {
        if (response) {
          if (response.list == null) {
            return;
          }
          response.list.map(item => {
            item.play = false
          })

          // this.productList = response.list

          this.$nextTick(() => {
            this.setProductSwiper()
            this.setProductHdSwiper()
          })
        }
      })
    },
    //新品swiper实例化
    setProductSwiper() {
      //新品上市swiper
      let _this = this;
      this.mySwiperProduct = new Swiper('.swiper-container-product', {
        // autoplay: {
        //   delay: 4000,
        // },
        // loop: true,
        spaceBetween: 20,
        // navigation: {
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // },
        on: {
          slideChangeTransitionEnd: function() {
            if (_this.mySwiperProduct) _this.mySwiperProduct.autoplay.start();
            let slideDom = this.$el[0].querySelectorAll('.swiper-slide');
            //为没绑定点击事件的播放按钮添加事件
            for (let i = 0; i < slideDom.length; i++) {
              let iconDom = slideDom[i].querySelector('.play-icon')
              let videoDom = slideDom[i].querySelector('.productVideo')
              let coverDom = slideDom[i].querySelector('.video-cover')
              let btnDom = slideDom[i].querySelector('.product-buy-btn')
              if (videoDom) videoDom.pause()
              if (iconDom && !iconDom.onclick && videoDom) {
                iconDom.onclick = () => {
                  videoDom.setAttribute('controls', 'controls')
                  videoDom.play()
                  coverDom.style.display = 'none'
                  // _this.newVideoList[idx].play = true
                }
                //监听视频播放完毕
                if (videoDom) {
                  videoDom.addEventListener("playing", () => {
                    _this.stopPlayVideo('.new-content video')
                    _this.logProductPlayIdx = this.realIndex + 1
                    _this.mySwiperProduct.autoplay.stop();
                  })
                  videoDom.addEventListener("ended", () => {
                    // videoDom.setAttribute('controls','')
                    videoDom.removeAttribute('controls')
                    videoDom.load()
                    coverDom.style.display = 'block'
                    _this.mySwiperProduct.autoplay.start();
                  })
                  videoDom.addEventListener('pause', () => {
                    let allNowVideo = document.querySelectorAll('#productVideo' + (_this.logProductPlayIdx - 1))
                    let s = videoDom.currentTime;
                    for (let i = 0; i < allNowVideo.length; i++) {
                      let preNode = allNowVideo[i].nextSibling
                      preNode.nextElementSibling.style.display = 'none'
                      allNowVideo[i].currentTime = s;
                      allNowVideo[i].setAttribute('controls', 'controls')
                    }
                  })
                }
              }
              if (btnDom && !btnDom.onclick) {
                btnDom.onclick = () => {
                  let url = btnDom.dataset.url;
                  window.open(url)
                }
              }
            }
            _this.swiperProductIdx = this.realIndex + 1
          }
        }
      })

      this.mySwiperProduct.el.onmouseover = () => { //鼠标放上暂停轮播
        this.mySwiperProduct.autoplay.stop();
      }
      this.mySwiperProduct.el.onmouseleave = () => {
        let video = document.querySelector('.product-info .swiper-wrapper .swiper-slide-active .productVideo')
        if (video && video.currentTime == 0) {
          this.mySwiperProduct.autoplay.start();
        }
      }
    },

    setProductHdSwiper() {
      const _this = this
      const size = 6
      var swiper = new Swiper('.swiper-container--product-new', {
        slidesPerView: size,
        spaceBetween: 20,
        slidesPerGroup: 1,
        initialSlide:6,
        runCallbacksOnInit:false,
        loop: true,
        // centeredSlides: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        autoplay: {
          delay: 2000,
          reverseDirection: true,
        },
        pagination: {
          el: '.swiper-pagination--product-new',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next--product-new',
          prevEl: '.swiper-button-prev--product-new',
        },
        on: {
          slideChange: function() {
            console.log('slidechange', this.activeIndex)
            console.log('slidechange realIndex', this.realIndex)
            _this.slideTo(this.activeIndex - size)
          },
        },
      });
    },
    slideTo(index) {
      // console.log('slideTo', index)
      this.mySwiperProduct.slideTo(index, 1000, false)
    },
  }
})