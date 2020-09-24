import { isFunction, isSymbol, isUndefined } from 'lodash'

const Symbol_Template = 'symbol: ',
    Symbol_REG = /Symbol\(([^()]*)\)/,
    // Function_REG = /function( [a-zA-Z1-9$_])?\([a-zA-Z1-9$_, ]\) *\{[^}]\}/

function valueToString(value) {
    return JSON.stringify(value, (key, val) => {
        if (isFunction(val)) return val.toString()
        if (isUndefined(val)) return 'undefined'
        if (isSymbol(val))
            return Symbol_Template + val.toString.match(Symbol_REG)[1]
    })
}

function stringToValue(string) {
    JSON.parse(string, (key, val) => {})
}

export { valueToString }
