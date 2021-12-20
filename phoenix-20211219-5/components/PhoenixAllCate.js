Vue.component('PhoenixAllCate', {
  template: `
<div class="phoenix-section--allCate all-box">
  <!-- <div
    class="all-float-nav"
    :class="{'float':floatNav}"
  > -->
    <img
      class="phoenix-section__title"
      src="images/title-6.png?v=20210226"
      alt=""
      v-show="!floatNav"
    >
    <div class="all-nav">
      <div class="all-nav-item">
        <div
          class="nav-item"
          v-for="(item,index) in allList"
          @click="tabAllNav(index)"
        >
          <div
            class="nav-select"
            :class="{'active':allPidx == index}"
          >
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
  <div class="probg">
    <div class="all-tab-swiper">
      <div class="swiper-container-all swiper-no-swiping">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item,index) in allList"
          >
            <template v-for="(item2,index2) in item.childs">
              <div class="all-tab-txt">
                <!-- <span v-if="allList.length > 0">{{allList[allPidx].name}}</span>
                                                > -->
                <span>{{item2.name}}</span>
              </div>
              <div class="all-swiper-item">
                <div
                  class="all-item"
                  v-for="(item3,index3) in item2.childs"
                  @click="linkto(item3)"
                >
                  <div class="all-item-img">
                    <img
                      :src="item3.imageUrl || '/images/bg_default_162x162.png?v=20210226'"
                      :alt="item3.name"
                      :title="item3.name"
                      onerror="this.src='/images/bg_default_162x162.png'"
                    >
                  </div>
                  <div class="all-item-info">
                    <p class="all-item-txt">
                      <span
                        class="txt"
                        :title="item3.name"
                        :class="{'new':item3.nattachCataId == 0}"
                      >
                        {{item3.name}}
                      </span>
                      <span
                        class="txt2"
                        v-if="item3.nattachCataId != 0"
                        @click.stop="linkto(item3,1)"
                      >
                        附件
                      </span>
                    </p>
                    <p
                      class="all-item-txt2"
                      :title="item3.titleTxt + '系列'"
                    >{{item3.sName}}</p>
                    <p class="all-item-txt3">查看详情>></p>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  props: {
    brandId: {
      type: String,
      default: ''
    },
    bannerInfo: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      floatNav: false,
      allList: [],
      allLenList: [], //记录全部品类三级长度方便计算
      allPidx: 0, //全部品类一级下标



    }
  },
  created() {
    this.getAllProduct()

  },
  methods: {
    //获取全部品类数据
    getAllProduct() {
      apiPhoenix.fetchAllCate(this.brandId).then(response => {
        if (response) {
          let arr = [];
          let cLen = 0;
          let maxLen = 0;
          response.map((item, index) => {
            cLen += item.childs.length
            this.allLenList[index] = cLen
            item.twoNum = Math.ceil(item.childs.length / 6)
            item.childs.map((item2, index2) => {
              if (item2.childs.length > maxLen) maxLen = item2.childs.length
              item2.childs.map((item3, index3) => {
                let stxt = item3.seriesNames.join(',')
                let stxtObj = stxt.byteLength()
                if (stxtObj.len >= 43) {
                  let ctxt = stxtObj.txt //stxt.substring(0,37)
                  item3.sName = ctxt + '...系列'
                } else {
                  item3.sName = stxt ? stxt + '系列' : ''
                }
                item3.titleTxt = stxt
              })
            })
            arr = arr.concat(item.childs)
          })
          let row = Math.ceil(maxLen / 3)
          this.allSwiperHeight = row * 172 + ((row - 1) * 19)
          this.allList = response
          this.allChildList = arr

          this.$nextTick(() => {
            this.setAllSwiper()
          })
        }
      })
    },
    //全部品类swiper实例化
    setAllSwiper() {
      // 全部品类swiper
      let _this = this;
      this.mySwiperAll = new Swiper('.swiper-container-all', {
        autoplay: false,
        loop: true,
        // height: this.allSwiperHeight,
        autoHeight: true,
        observer: true,
        on: {
          slideChangeTransitionEnd: function() {
            _this.allPidx = this.realIndex
            // for (let i = 0; i < _this.allLenList.length; i++) {
            //     if (this.realIndex < _this.allLenList[i]) {
            //         _this.allPidx = i;
            //         if (i == 0) {
            //             _this.allCidx = this.realIndex
            //         } else {
            //             _this.allCidx = this.realIndex - _this.allLenList[i - 1]
            //         }
            //         break;
            //     }
            // }
          }
        }
      })

      // this.mySwiperAll.el.onmouseover = () => { //鼠标放上暂停轮播
      //     this.mySwiperAll.autoplay.stop();
      // }
      // this.mySwiperAll.el.onmouseleave = () => {
      //     this.mySwiperAll.autoplay.start();
      // }
    },
    tabAllNav(index) {
      this.allPidx = index
      this.mySwiperAll.slideToLoop(index)
    },
    linkto(item, type = 0) {
      let url = '/product/select.html?from=search&brand=' + this.bannerInfo.sbrand_name
      if (type == 1) {
        url = url + '&cataid=' + item.nattachCataId + '&ncataid=' + item.cataId
      } else {
        url = url + '&cataid=' + item.cataId
      }
      window.open(url)
    },
  }
})