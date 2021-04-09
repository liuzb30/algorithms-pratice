function sleep(time) {
    let now = Date.now()
    while (Date.now() - now < time) { }
    console.log(`沉睡${time}ms`);
}

function sleep(time) {
    return new Promise(resolve => setTimeout(() => resolve(time), time))
}

sleep(3000).then(time => console.log(`沉睡${time}ms`))