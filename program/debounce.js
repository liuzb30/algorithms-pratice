function debounce(fn, interval = 2000) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            timer = null
            fn(...args)
        }, interval);
    }
}

// 立即执行
function debounce(fn, wait = 2000) {
    let timer = null
    return (...args) => {
        // 如果不存在timer，则执行函数
        if (!timer) fn(...args)
        // 存在则清除定时器，设置新的定时器
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn(...args)
        }, wait);

    }
}

function test(a) {
    console.log(a);
}

const newTest = debounce(test)
newTest(1)
newTest(2)
newTest(3)
newTest(4)
newTest(5)