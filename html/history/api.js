function getRandom () {
  return Math.random() * 10
}

// 数据 页面标题 路径地址
window.history.pushState(getRandom(), '', 'a')
window.history.replaceState(getRandom(), '', 'a')
window.history.go(1)

// 浏览器前进后退时触发
window.addEventListener('popstate', ev => {
  ev.state
}, false)
