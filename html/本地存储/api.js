window.localStorage.setItem
window.localStorage.getItem
window.localStorage.clear

// 有数据改变则会触发此事件、不能触发当前窗口的此事件
window.addEventListener('storage', ev => {
  ev.key // 数据改变的key
  ev.oldValue
  ev.newValue
  ev.storageArea // 当前改变的 storage 对象
  ev.url
}, false)
