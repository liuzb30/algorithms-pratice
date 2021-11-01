

// function throttle(fn, delay) {
//     let preTime = Date.now()
//     return function () {
//         let args = [...arguments]
//         let now = Date.now()
//         if (now - preTime >= delay) {
//             fn.apply(this, args)
//             preTime = now
//         }
//     }
// }
// 定时器版
function throttle(fn, delay = 2000) {
    let timer = null
    return function () {
        const context = this
        const args = [...arguments]
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, delay);
        }
    }
}

function test(a) {
    console.log(a);
}

const newTest = throttle(test)
newTest(1)
newTest(2)
newTest(3)
newTest(4)
newTest(5)