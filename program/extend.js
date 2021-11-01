
function Animal(name) {
    this.name = name
    this.colors = ["black", "white"]
    this.getName = function () {
        return this.name
    }
}
Animal.prototype.getColor = function () {
    return this.colors
}
// 原型继承
// 问题1：原型中的引用类型会被所有实例共享
// 问题2：子类在实例化不能给父类传参
// function Dog() { }
// Dog.prototype = new Animal()

// 构造函数继承
// 问题：子类无法继承父类的原型
// function Dog(name) {
//     Animal.call(this, name)
// }

// 组合继承
// 问题：调用了两次父类构造函数
// function Dog(name) {
//     Animal.call(this, name)
// }
// Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog

// 寄生组合继承
function Dog(name) {
    Animal.call(this, name)
}
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog1 = new Dog('dog1')
console.log(dog1.name);
dog1.colors.push('brown')
console.log(dog1.colors);
let dog2 = new Dog('dog2')
console.log(dog2.name);
console.log(dog2.getColor());