// 实现一个 fn 函数
// const o = { a: 1, b: [1, 2, { c: true }], d: { e: 2, f: 3 }, g: null };
// fn(o) => 扁平化转换
// { "a": 1, "b[0]": 1, "b[1]": 2, "b[2].c": true, "d.e": 2, ... }  还真遇到过这题面试的，解出来了吗

function fn(obj) {
    const result = {}
    function flat(obj, prop) {
        Object.keys(obj).forEach(key => {
            const value = obj[key]
            let currentKey = key
            if (prop) {
                currentKey = obj instanceof Array ? `${prop}[${key}]` : `${prop}.${key}`
            }
            if (typeof value === 'object' && value !== null) {
                flat(value, currentKey)
            } else {
                result[currentKey] = value
            }
        })
    }

    flat(obj, '')
    return result
}


// const obj = { a: 1, b: [1, 2, { c: true }], d: { e: 2, f: 3 }, g: null };
const obj = {
    a: 1, b: [1, 2, { c: true }, [1, 2, 3, 4, [{
        name: 'abc',
        age: 18,
        hobby: ['足球', 'music']
    }], 5, 6, 7, 8, [9, 10, 11, 12, [13, 14, 15]]]], d: { e: 2, f: 3 }, g: null
};

console.log(fn(obj))