class Subject {
    constructor() {
        this.subs = []
    }
    addSub(ob) {
        this.subs.push(ob)
    }
    notify() {
        this.subs.forEach(ob => {
            ob.update()
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    update() {
        console.log('update--' + this.name);
    }
}

let subject = new Subject();
let ob = new Observer('a');
let ob1 = new Observer('b');
let ob2 = new Observer('c');
//目标添加观察者了
subject.addSub(ob);
subject.addSub(ob1);
subject.addSub(ob2);
//目标发布消息调用观察者的更新方法了
subject.notify();   //update