function switchAnimation () {
  let oDiv = document.createElement('div')

  let animations = {
    "animation"      : "animationend",
    "oAnimation"     : "oAnimationEnd",
    "mozAnimation"   : "mozAnimationEnd",
    "webkitAnimation": "webkitAnimationEnd"
  }

  for (let key in animations) {
    if (oDiv.style[key] !== undefined) {
      return animations[key]
    }
  }
}

console.log( switchAnimation() )
