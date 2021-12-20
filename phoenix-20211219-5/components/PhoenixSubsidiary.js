Vue.component('PhoenixSubsidiary', {
  template: `
<div class="subsidiary">

    <img
      class="phoenix-section__title"
      src="images/title-subsidiary.png"
      alt=""
    >
  <div class="subsidiary__main">
    <div
      id="main"
      class="subsidiary__map"
    ></div>
    <div class="subsidiary-section">
      <div class="search-form">
        <el-input
          class="search-form__input"
          placeholder="请输入您所在的城市"
          v-model="city"
        >
          <i
            slot="prefix"
            class="iconfont iconsousuoicon"
          ></i>
        </el-input>
        <input
          class="search-form__button"
          type="button"
          value="搜索"
        >
      </div>
      <div class="subsidiary-section__main">
        <div class="list-province">
          <div class="list__title"><span class="list__title-inner">辽宁省</span></div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="list-province">
          <div class="list__title"><span class="list__title-inner">辽宁省</span></div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="list-province">
          <div class="list__title"><span class="list__title-inner">辽宁省</span></div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="list-province">
          <div class="list__title"><span class="list__title-inner">辽宁省</span></div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="list-province">
          <div class="list__title"><span class="list__title-inner">辽宁省</span></div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
          <div class="list__item">
            <p class="list__company-name">沈阳众业达</p>
            <p class="list__item-info">经营地区：广州、佛山、惠州、汕头、揭阳、湛江</p>
            <p class="list__item-info">电话：<span class="list__item-important">800-820-8820</span></p>
            <p class="list__item-info">邮箱：<span class="list__item-important">800-820-8820</span></p>
            <div class="list__item-qrcode">
              <img class="list__item-icon" 
                src="/phoenix/images/icon-qrcode.png"
                alt="二维码图标"
              >
              <div class="qrcode__mask">
                <img class="qrcode__pic"
                  src="/phoenix/images/qrcode-subsidiary.png"
                  alt="分公司二维码"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  props: {},
  data() {
    return {
      city: ''
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.createMap()
    })
  },
  methods: {
    createMap() {
      this.$nextTick(function() {
        var myChart = echarts.init(document.getElementById('main'));
        axios.get('/phoenix/js/china.json').then(geoJson => {
          console.log('geoJson', geoJson)
          echarts.registerMap('china', geoJson.data);
          myChart.setOption(
            (option = {
              // 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色
              color: '#7ce1cb',
              tooltip: {
                trigger: 'item',
                formatter: '{b}<br />{c} (p / km2)'
              },
              toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                  dataView: { readOnly: false },
                  restore: {},
                  saveAsImage: {}
                }
              },
              // visualMap: {
              //   min: 800,
              //   max: 50000,
              //   text: ['High', 'Low'],
              //   realtime: false,
              //   calculable: true,
              //   inRange: {
              //     // color: ['lightskyblue', 'yellow', 'orangered']
              //   }
              // },
              // 状态切换的动画配置
              stateAnimation: {
                // 状态切换的动画时长，设为 0 则关闭状态动画
                duration: 200,
                // 状态切换的动画缓动
                easing: 'cubicOut'
              },
              series: [{
                name: '香港18区人口密度',
                type: 'map',
                map: 'china',
                zoom: 1.05,
                left: 20,
                top: 30,
                // right: 0,
                // bottom: 0,
                label: {
                  show: true,
                  // 字体样式
                  textStyle: {
                    color: '#fff',
                    fontSize: '16px'
                  },
                },
                itemStyle: {
                  areaColor: '#45d4d4',
                  borderColor: '#fff',
                  borderWidth: 1,
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowBlur: 10,
                  shadowOffsetX: 1,
                  shadowOffsetY: 2
                },
                emphasis: {
                  label: {
                    // 字体样式
                    textStyle: {
                      color: '#fff',
                      // fontSize: '16px'
                    }
                  },
                  itemStyle: {

                    areaColor: '#00b9b9',
                  }
                },
                select: {
                  label: {
                    color: '#fff',
                  },
                  itemStyle: {
                    areaColor: '#00b9b9',
                    shadowColor: 'rgba(0, 0, 0, 0.19)',
                    shadowBlur: 8,
                    shadowOffsetY: 7
                  }
                },
                colorBy: 'series',
                data: [
                  { name: '内蒙古自治区', value: 2222222222222, id: 22333 },
                  { name: '北京市', value: 2222222222222 },
                  { name: '中西区', value: 20057.34 },
                  { name: '湾仔', value: 15477.48 },
                  { name: '东区', value: 31686.1 },
                  { name: '南区', value: 6992.6 },
                  { name: '油尖旺', value: 44045.49 },
                  { name: '深水埗', value: 40689.64 },
                  { name: '九龙城', value: 37659.78 },
                  { name: '黄大仙', value: 45180.97 },
                  { name: '观塘', value: 55204.26 },
                  { name: '葵青', value: 21900.9 },
                  { name: '荃湾', value: 4918.26 },
                  { name: '屯门', value: 5881.84 },
                  { name: '元朗', value: 4178.01 },
                  { name: '北区', value: 2227.92 },
                  { name: '大埔', value: 2180.98 },
                  { name: '沙田', value: 9172.94 },
                  { name: '西贡', value: 3368 },
                  { name: '离岛', value: 806.98 }
                ],
                // 自定义名称映射
                nameMap: {
                  'Central and Western': '中西区',
                  Eastern: '东区',
                  Islands: '离岛',
                  'Kowloon City': '九龙城',
                  'Kwai Tsing': '葵青',
                  'Kwun Tong': '观塘',
                  North: '北区',
                  'Sai Kung': '西贡',
                  'Sha Tin': '沙田',
                  'Sham Shui Po': '深水埗',
                  Southern: '南区',
                  'Tai Po': '大埔',
                  'Tsuen Wan': '荃湾',
                  'Tuen Mun': '屯门',
                  'Wan Chai': '湾仔',
                  'Wong Tai Sin': '黄大仙',
                  'Yau Tsim Mong': '油尖旺',
                  'Yuen Long': '元朗'
                }
              }]
            })
          );
          myChart.on('click', param => {
            console.log('click', param)
          })
          console.log('created')
          // 基于准备好的dom，初始化echarts实例
          // 指定图表的配置项和数据
          // var option = {
          // title: {
          // text: 'ECharts 入门示例'
          // },
          // tooltip: {},
          // legend: {
          // data: ['销量']
          // },
          // xAxis: {
          // data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          // },
          // yAxis: {},
          // series: [{
          // name: '销量',
          // type: 'bar',
          // data: [5, 20, 36, 10, 10, 20]
          // }]
          // };
          // // 使用刚指定的配置项和数据显示图表。
          // myChart.setOption(option);
        })
      })
    }
  }
})