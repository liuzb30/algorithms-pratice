function throttle(fn, interval = 2000) {
    let flag = false
    return function () {
        if (!flag) {
            flag = true
            setTimeout(() => {
                flag = false
                fn.apply(null, arguments)
            }, interval);
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