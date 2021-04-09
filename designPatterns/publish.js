class PubSub {
    constructor() {
        this.subs = {}
    }
    subscribe(type, fn) {
        if (!this.subs[type]) {
            this.subs[type] = []
        }
        this.subs[type].push(fn)
    }
    publish(type, val) {
        if (this.subs[type]) {
            this.subs[type].forEach(fn => fn(val))
        }
    }
}



let ob = new PubSub();
ob.subscribe('add', (val) => console.log(val));
ob.subscribe('add', (val) => console.log('222', val));
ob.publish('add', 1);