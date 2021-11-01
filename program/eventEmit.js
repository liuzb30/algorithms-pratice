class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(type, callback) {
        this.events[type] = this.events[type] || []
        this.events[type].push(callback)
    }
    off(type, callback) {
        if (!this.events[type]) return
        this.events[type] = this.events[type].filter(fn => fn !== callback)
    }
    once(type, callback) {
        function fn() {
            callback()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    emit(type, ...args) {
        this.events[type] && this.events[type].forEach(fn => fn.apply(this, args))
    }
}




// 测试
// 使用如下
// const event = new EventEmitter();

// const handle = (...rest) => {
//     console.log(rest);
// };

// event.on("click", handle);

// event.emit("click", 1, 2, 3, 4);

// event.off("click", handle);

// event.emit("click", 1, 2);

// event.once("dbClick", () => {
//     console.log(123456);
// });
// event.emit("dbClick");
// event.emit("dbClick");
