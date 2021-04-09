// [1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]

// toString & split
function flatten(arr) {
    console.log(arr.toString());
    return arr.toString().split(',').map(item => Number(item))
}
// join & split
function flatten(arr) {
    console.log(arr.join(','));
    return arr.join(',').split(',').map(function (item) {
        return parseInt(item);
    })
}

// 递归
function flatten(arr) {
    let res = []
    arr.forEach(item => {
        res = res.concat(Array.isArray(item) ? flatten(item) : item)
    })
    return res
}
// reduce
function flatten(arr) {
    return arr.reduce((result, item) => result.concat(Array.isArray(item) ? flatten(item) : item), [])
}

// 扩展运算符
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

const arr = [1, [2, 3, [4, 5]]]

console.log(flatten(arr));