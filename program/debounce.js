// 简单版
// function debounce(fn, wait) {
//     let timer = null
//     return function () {
//         let context = this
//         let args = arguments
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.call(context, ...args)
//         }, wait);
//     }
// }

// 最终版
// 支持立即执行
function debounce(fn, wait, immediate) {
    let timeout, result
    const debounced = function () {
        clearTimeout(timeout)
        if (immediate) {
            let callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait);
            if (callNow) result = fn.apply(this, arguments)
        } else {
            timeout = setTimeout(() => {
                fn.apply(this, arguments)
            }, wait);
        }
        return result
    }
    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}

function test(a) {
    console.log(a);
    return a
}

var newTest = debounce(test, 10000, true);
console.log(newTest(123))
newTest.cancel()