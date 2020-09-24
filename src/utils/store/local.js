import Base from './base'

class LocalStore extends Base {
    constructor() {
        super()
        this.init()
    }

    get(key) {
        return this.store[key]
    }

    has(key) {
        return key in this.store
    }

    set(key, val) {
        const stringifyVal = this.stringify(val)
        let result = false
        try {
            localStorage.setItem(key, stringifyVal)
            result = true
        } catch (e) {
            result = false
        }

        return result
    }

    remove(key) {
        delete this.store[key]
        return localStorage.removeItem(key)
    }

    clear() {
        this.restore()
        return localStorage.clear()
    }
}

export default LocalStore
