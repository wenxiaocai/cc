
window.onload = function() {

}
//获取滚动条宽度
function getScrollbarWidth() {
  var odiv = document.createElement('div'), //创建一个div
    styles = {
      width: '100px',
      height: '100px',
      overflowY: 'scroll' //让他有滚动条
    },
    i, scrollbarWidth;
  for (i in styles) odiv.style[i] = styles[i];
  document.body.appendChild(odiv); //把div添加到body中
  scrollbarWidth = odiv.offsetWidth - odiv.clientWidth; //相减
  odiv.remove(); //移除创建的div
  return scrollbarWidth; //返回滚动条宽度
}

//监听页面滚动显隐gif、侧边栏
function showGif() {
  let dom222 = document.querySelector('.product-box');
  let gifDom = document.getElementsByClassName('qt-img');
  let newDom = document.getElementsByClassName('new-box');
  let sldeDom = document.getElementsByClassName('side-bar');
  let top222 = dom222.offsetTop
  let newTop = newDom[0].offsetTop
  window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log('top:'+top222)
    // console.log('scrollTop:'+scrollTop)
    if (scrollTop > document.querySelector('.product-box').offsetTop - 111) {
      gifDom[0].classList.add('show')
    } else {
      gifDom[0].classList.remove('show')
    }
  }
}

function setManLeft() {
  let lf = window.innerWidth - 315;
  let siderLf = window.innerWidth - 18;
  let calLf = window.innerWidth - 38 - 46 - 364;
  let dom = document.getElementsByClassName('qt-img');
  let siderDom = document.getElementById('side-bar');
  let callDom = document.getElementById('udesk_panel');
  dom[0].style.left = lf + 'px'
  siderDom.style.right = 'auto'
  siderDom.style.left = siderLf + 'px'
  if (callDom) {
    callDom.style.right = 'auto'
    callDom.style.left = calLf + 'px'
  }
}

function detectZoom() {
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio) {
    ratio = Math.round(ratio * 100);
  }
  return ratio;
}