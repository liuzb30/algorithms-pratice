// 缓存代理
// function fb(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return num * fb(num - 1)
// }

// var fbProxy = (function () {
//     var cache = {}
//     return function (num) {
//         if (cache[num]) {
//             console.log('this is cache');
//             return cache[num]
//         }
//         return cache[num] = fb(num)
//     }
// })()

// console.log(fbProxy(4));
// console.log(fbProxy(4));

// 虚拟代理
// 图片预加载 代理和本体接口要保持一致性
// var myImage = (function () {
//     var imgNode = document.createElement('img');
//     document.body.appendChild(imgNode);
//     return {
//         setSrc: function (src) {
//             imgNode.src = src
//         }
//     }
// })()
// var proxyImage = (function () {
//     var img = new Image()
//     img.onload = function () {
//         myImage.setSrc(img.src)
//     }
//     return {
//         setSrc: function (src) {
//             img.src = src
//             myImage.setSrc('https://content.igola.com/static/WEB/images/other/loading-searching.gif')
//         }
//     }
// })()

// 虚拟代理 合并请求
// var synchronousFile = function (id) {
//     console.log('开始同步文件，id 为: ' + id);
// };

// var proxySynchronousFile = (function () {
//     var cacheIds = [], timer
//     return function (id) {
//         if (!cacheIds.includes(id)) {
//             cacheIds.push(id)
//         }
//         timer && clearTimeout(timer);
//         timer = setTimeout(() => {
//             synchronousFile(cacheIds.join(','))
//             cacheIds = []
//         }, 1000)
//     }
// })()
// proxySynchronousFile(3)
// proxySynchronousFile(6)
// proxySynchronousFile(4)
// proxySynchronousFile(7)

// 保护代理 proxy
let star = {
    name: '张XX',
    age: 25,
    phone: '13910733521'
}
// 经纪人
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return '13111111111'
        }
        return target[key]
    },
    set: function (target, key, value) {
        if (key === 'price') {
            if (value < 100000) {
                throw new Error('价格太低')
            }
            target[key] = value
        }
    }
})

// 主办方
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

// 想自己提供报价（砍价，或者高价争抢）
agent.price = 150000
// agent.price = 90000  // 报错：价格太低
console.log('customPrice', agent.price)