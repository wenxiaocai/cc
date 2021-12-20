Vue.component('PhoenixHot', {
  template: `

      <div
        ref="menu4"
        class="phoenix-section--hot"
      >
        <img
          class="phoenix-section__title"
          src="images/title-4.png?v=20210226"
          alt=""
        >
        <div class="hot-item-box">
          <div
            class="hot-item"
            v-for="item in hotProList"
          >
            <img
              class="hot-img"
              :src="item.simg || '/images/bg_default_162x162.png?v=20210226'"
              onerror="this.src='/images/bg_default_162x162.png'"
              alt=""
              :title="item.sproductName"
            >
            <p
              class="hot-txt"
              :title="(item.sbrandName ? item.sbrandName + ' ': '') + (item.spropName ? item.spropName + ' ': '') + (item.scataName ? item.scataName : '')"
            >
              {{item.sbrandName ? item.sbrandName + ' ': ''}}
              {{item.spropName ? item.spropName + ' ': ''}}
              {{item.scataName ? item.scataName : ''}}
            </p>
            <p
              class="hot-txt2"
              :title="item.sproType"
            >{{item.sproType}}</p>
            <p class="hot-txt3">
              <img
                src="images/icon-vip.png?v=20210226"
                alt=""
              >
              <template v-if="!loginStatus">
                <span
                  @click="showLogin"
                  style="cursor: pointer;"
                >
                  查看会员价
                </span>
              </template>
              <template v-if="loginStatus && item.sisAdjustPrice == 'Y'">
                调价中
              </template>
              <template v-if="loginStatus && item.sisAdjustPrice != 'Y'">
                ￥{{item.ndiscountPrice}}
              </template>
            </p>
            <del>￥{{item.nprice}}</del>
            <z-button
              type="primary"
              full
              class="hot-item-btn"
              @click="hotLink(item.nproductId)"
            >
              立即选购
            </z-button>
          </div>
        </div>
      </div>
  `,
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
      loginStatus: false,
      hotProList: [],
    }
  },
  created() {
    this.getHotProd()
    if (this.isLogin) {
      this.loginStatus = true;
    }
  },
  methods: {
    //获取热门产品
    getHotProd() {
      apiPhoenix.fetchProductHot(this.brandId).then(response => {
        if (response) {
          this.hotProList = response
        }
      })
    },
    hotLink(id) {
      window.open(`/product/detail/${id}.html`)
    },
    showLogin(){
      this.$emit('showLogin')
    }
  }
})