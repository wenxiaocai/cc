Vue.component('PhoenixNav', {
  template: `
      <!-- 模块导航 -->
      <div class="phoenix-nav">
        <img
          class="phoenix-nav__logo"
          :src="info.stop_logo_img_url"
          alt="菲尼克斯logo"
        />
        <!-- <ul class="phoenix-nav__menu">
          <li class="phoenix-nav__item">悦享世界</li>
          <li class="phoenix-nav__item">新品上市</li>
          <li class="phoenix-nav__item">热卖好货</li>
          <li class="phoenix-nav__item">馆长推荐</li>
          <li class="phoenix-nav__item">菲常好礼</li>
          <li class="phoenix-nav__item">产品星选官</li>
          <li class="phoenix-nav__item">产品支持及服务</li>
          <li class="phoenix-nav__item">全部品类</li>
        </ul> -->
        <div
          class="phoenix-search"
          :class="{active:true}"
        >
          <i class="iconfont iconsousuoicon phoenix-search__icon-search"></i>
          <input
            class="phoenix-search__input"
            v-model="keyword"
            placeholder="请输入产品名称/品牌/订货号/型号/规格参数"
            @keyup.enter="searchClick"
          />
          <z-button
            v-show="keyword.length"
            class="phoenix-search__button z-btn--phoenix"
            type="primary"
            class="search-btn"
            @click="searchClick"
          >搜索</z-button>
        </div>
      </div>
      <!-- 模块导航 end -->`,
  props: {},
  data() {
    return {

    }
  },
})