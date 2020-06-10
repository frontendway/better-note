function showPosition(position) {
	var lat = position.coords.latitude
	var lag = position.coords.longitude
	alert('纬度' + lat + '经度' + lag)
}

function showError(error) {
	switch (error.code) {
		case 0:
			alert('定位系统失效')
			break
		case 1:
			alert('用户拒绝请求地理定位')
			break
		case 2:
			alert('尝试获取地理信息、但失败')
			break
		case 3:
			alert('请求获取用户地理位置超时')
	}
}

function getLocation() {
	if (navigator.geolocation) {
		// 单次定位
		window.navigator.geolocation.getCurrentPosition(showPosition, showError, {
			enableHighAccuracy: false, //更精准的查找
			timeout: Infinity,
			maximumAge: 0, //位置可缓存的最大时间 单位ms
			frequency: 1000 //更新频率 只在多次定位有效
		})
	} else {
		alert('您的浏览器不支持定位')
	}
}
getLocation()

// 单次定位
window.navigator.geolocation.getCurrentPosition
// 多次定位
window.navigator.geolocation.watchPosition
// 关闭定位 与定时器用法一样
window.navigator.geolocation.clearWatch
