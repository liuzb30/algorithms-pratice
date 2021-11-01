function curry(fn) {
    return function f(...args) {
        return args.length === fn.length ? fn(...args) : (...arg) => f(...args, ...arg)
    }
}

// 偏函数
function partial(fn, ...args) {
    return (...arg) => fn(...args, ...arg)
}


function add(a, b, c) {
    return a + b + c
}
add(1, 2, 3)
let addCurry = curry(add)
const result = addCurry(1)(2)(3)
console.log(result)

let partialAdd = partial(add, 1)
console.log(partialAdd(2, 3))