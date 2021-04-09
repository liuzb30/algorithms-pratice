
// 1. 利用全局变量
// var instance;
// function singleton(arg) {
//     if (!instance) {
//         instance = arg
//     }
//     return instance
// }

// var a = singleton('a')
// var b = singleton('b')
// console.log(a === b);

// 2.利用闭包
// var Singleton = function (name) {
//     this.name = name
// }

// Singleton.getInstance = (function () {
//     var instance;
//     return function (name) {
//         if (!instance) {
//             instance = new Singleton(name)
//         }
//         return instance
//     }
// })()

// var a = Singleton.getInstance('a')
// var b = Singleton.getInstance('b')
// console.log(a === b)

// 3.利用函数实现单例
// var Singleton = function (name) {
//     this.name = name
//     this.instance = null
// }
// Singleton.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new Singleton(name)
//     }
//     return this.instance
// }

// var a = Singleton.getInstance('a')
// var b = Singleton.getInstance('b')
// console.log(a === b)

// 4.透明的单例模式
// var Singleton = (function () {
//     var instance
//     Singleton = function (name) {
//         if (!instance) {
//             this.name = name
//             instance = this
//         }
//         return instance
//     }
//     return Singleton
// })()

// var a = new Singleton('a')
// var b = new Singleton('b')
// console.log(a === b)

// 5.提供通用的单例
// var People = function (name) {
//     this.name = name
// }

// var Singleton = function (Obj) {
//     var instance
//     Singleton = function () {
//         if (!instance) {
//             instance = new Obj(arguments)
//         }
//         return instance
//     }
//     return Singleton
// }
// var peopleSingleton = Singleton(People)
// var a = new peopleSingleton('a')
// var b = new peopleSingleton('b')
// console.log(a === b)

// 6. es6单例模式
class People {
    constructor(name) {
        if (!People.instance) {
            this.name = name
            People.instance = this
        }
        return People.instance
    }
}
var a = new People('a')
var b = new People('b')
console.log(a === b)