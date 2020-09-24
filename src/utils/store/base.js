import { valueToString, stringToValue } from '../serialize'

// 全局只保存一个Store
let store = {}

class Store {
    constructor() {
        // todo 初始化同步本地存储
    }

    get store() {
        return store
    }

    init(val) {
        store = val
    }

    stringify(val) {
        return valueToString(val)
    }

    parse(val) {
        return stringToValue(val)
    }

    restore() {
        store = {}
    }
}

export default Store
