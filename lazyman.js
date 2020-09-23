// 实现一个 LazyMan，按照以下方式调用时，得到相关输出：
class LazyManGenerator {
  constructor(name) {
    this.taskList = [];

    const task = () => {
      console.log(`Hi! This is ${name}!`);
      this.next();
    };
    this.taskList.push(task);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    const task = this.taskList.shift();
    task && task();
  }

  sleep(time) {
    return this.sleepTask(time, false);
  }

  sleepFirst(time) {
    return this.sleepTask(time, true);
  }
  sleepTask(time, prior) {
    const task = () => {
      console.log(`等待${time} 秒..`);
      console.log(`Wake up after ${time}`);
      setTimeout(() => {
        this.next();
      }, time * 1000);
    };
    if (prior) {
      this.taskList.unshift(task);
    } else {
      this.taskList.push(task);
    }
    return this;
  }

  eat(thing) {
    const task = () => {
      console.log(`Eat ${thing}`);
      this.next();
    };
    this.taskList.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManGenerator(name);
}

// LazyMan("Hank");
// Hi! This is Hank!
// LazyMan("Hank").sleep(10).eat("dinner");
// Hi! This is Hank!
// 等待10 秒..
// Wake up after 10
// Eat dinner~
// LazyMan("Hank").eat("dinner").eat("supper");
// Hi This is Hank!
// Eat dinner~
// Eat supper~
LazyMan("Hank").sleepFirst(5).eat("supper");
// 等待 5 秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
