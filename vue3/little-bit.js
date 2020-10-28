/* 获取数据类型 */
const objectToString = Object.prototype.toString
const toRawType = value => objectToString.call(value).slice(8, -1)

/* map 方式判断是否是无效数据类型 */
const TargetType = {
  'INVALID': 0,
  'COMMON': 1,
  'COLLECTION': 1
}
function targetTypeMap (rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return TargetType.COMMON
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return TargetType.COLLECTION
    default:
      return TargetType.INVALID
  }
}

/* 对象转字符串 */
const toDisplayString = val => {
  return val == null
    ? ''
    : isObject(val)
      ? JSON.stringify(val, replacer, 2)
      : String(val)
}

const replacer = (_key, val) => {
  if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
        ;(entries)[`${key} =>`] = val
        return entries
      }, {})
    }
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    }
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val)
  }
  return val
}

/* 对象数组集合去重 */
function removeDuplicate (list) {
  const result = new Map()

  list.forEach(item => {
    const key = `name${item.name}output${item.output}`
    !result.has(key) ? result.set(key, item) : null
  })

  return [...result.values()]
}
