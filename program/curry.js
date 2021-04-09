function curry(fn,) {
    let args = []
    return function f(...args2) {
        args = [...args, ...args2]
        return args.length === fn.length ? fn(...args) : f
    }
}

function curry(fn, ...args) {
    return [...args].length === fn.length ? fn(...args) : (...args2) => curry(fn, ...args, ...args2)
}

function test(a, b) {
    console.log(a + b);
}

const transformTest = curry(test, 3)


transformTest(4)
transformTest(6)
transformTest(10)