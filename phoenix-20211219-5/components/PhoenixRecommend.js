Vue.component('PhoenixRecommend', {
  template: `

      <div class="phoenix-section-recommend">
        <img
          class="phoenix-section__title"
          src="images/title-5.png?v=20210226"
          alt=""
        >
        <div
          class="best-item-box"
          v-if="recommendList.length > 0"
        >
          <div class="best-item-flex">
            <div
              class="best-item two"
              :class="{'show':bestIdx == 1}"
              style="width: 828px"
              @click="productLink(recommendList[1].sjump_url)"
              @mouseenter="enter(1)"
              @mouseleave="leave()"
            >
              <img
                :src="recommendList[0].simg_url"
                alt=""
              />
              <b
                class="banner-none-item"
                :data-idx="i - 1"
                v-for="i in 12"
                :style="'left:' + ((i - 1)*75) + 'px;background-image:url(' + recommendList[0].simg_select_url + ');background-size: px 330px;background-position:' + ((i-1)*75*-1) +'px 0;transition-delay:' + (bestIdx == 1 ? ((150/12)*(12 - i)/1000) : 0) + 's'"
              ></b>
            </div>
            <div
              class="best-item one"
              :class="{'show':bestIdx == 2,'width':scale == 90 || scale == 110,'width2':scale == 80}"
              @click="productLink(recommendList[0].sjump_url)"
              @mouseenter="enter(2)"
              @mouseleave="leave()"
              style="width: 348px"
            >
              <img
                :src="recommendList[1].simg_url"
                alt=""
              />
              <b
                class="banner-none-item"
                :data-idx="i - 1"
                v-for="i in 18"
                :style="'width:' + width + 'px;left:' + ((i - 1)*width) + 'px;background-image:url(' + recommendList[1].simg_select_url + ');background-size: 348px 330px;background-position:' + ((i-1)*width*-1) +'px 0;transition-delay:' + (bestIdx == 2 ? ((150/12)*(12 - i)/1000) : 0) + 's'"
              ></b>
            </div>
          </div>
          <div
            class="best-item-flex"
            style="margin-top: 24px;"
          >
            <div
              class="best-item one"
              :class="{'show':bestIdx == 5,'width':scale == 90 || scale == 110,'width2':scale == 80}"
              @click="productLink(recommendList[2].sjump_url)"
              @mouseenter="enter(5)"
              @mouseleave="leave()"
            >
              <img
                :src="recommendList[2].simg_url"
                alt=""
              />
              <b
                class="banner-none-item"
                :data-idx="i - 1"
                v-for="i in 18"
                :style="'width:' + width + 'px;left:' + ((i - 1)*width) + 'px;background-image:url(' + recommendList[2].simg_select_url + ');background-size: 348px 330px;background-position:' + ((i-1)*width*-1) +'px 0;transition-delay:' + (bestIdx == 5 ? ((150/12)*(12 - i)/1000) : 0) + 's'"
              ></b>
            </div>
            <div
              class="best-item four"
              :class="{'show':bestIdx == 4}"
              style="width: 456px"
              @click="productLink(recommendList[3].sjump_url)"
              @mouseenter="enter(4)"
              @mouseleave="leave()"
            >
              <img
                :src="recommendList[3].simg_url"
                alt=""
              />
              <b
                class="banner-none-item"
                :data-idx="i - 1"
                v-for="i in 12"
                :style="'left:' + ((i - 1)*50) + 'px;background-image:url(' + recommendList[3].simg_select_url + ');background-size: 456px 330px;background-position:' + ((i-1)*50*-1) +'px 0;transition-delay:' + (bestIdx == 4 ? ((150/12)*(12 - i)/1000) : 0) + 's'"
              ></b>
            </div>
            <div
              class="best-item one"
              :class="{'show':bestIdx == 3,'width':scale == 90 || scale == 110,'width2':scale == 80}"
              @click="productLink(recommendList[4].sjump_url)"
              @mouseenter="enter(3)"
              @mouseleave="leave()"
            >
              <img
                :src="recommendList[4].simg_url"
                alt=""
              />
              <b
                class="banner-none-item"
                :data-idx="i - 1"
                v-for="i in 18"
                :style="'width:' + width + 'px;left:' + ((i - 1)*width) + 'px;background-image:url(' + recommendList[4].simg_select_url + ');background-size: 348px 330px;background-position:' + ((i-1)*width*-1) +'px 0;transition-delay:' + (bestIdx == 3 ? ((150/12)*(12 - i)/1000) : 0) + 's'"
              ></b>
            </div>
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
      //镇店之宝选中下标
      bestIdx: 1,
      scale: false,
      width: 23,
      // 菲凡之选列表
      recommendList: [],
    }
  },
  created() {

    this.fetchRecommendProduct()
    this.startTimer()
  },
  methods: {
    fetchRecommendProduct() {
      apiPhoenix.fetchRecommendProduct(this.brandId).then(response => {
        if (response) {
          ({ list: this.recommendList } = response)
        }
      })
    },
    startTimer() {
      timer = setInterval(() => {
        let val = this.bestIdx + 1
        if (val == 6) val = 1
        this.bestIdx = val
      }, 3000);
    },
    productLink(url) {
      window.open(url)
    },
    enter(idx) {
      clearInterval(timer)
      timer = null
      this.bestIdx = idx
    },
    leave() {
      this.startTimer()
    },

  }
})