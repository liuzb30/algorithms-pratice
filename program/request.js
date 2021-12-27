// 10 个 Ajax 同时发起请求，全部返回展示结果，并且至多允许三次失败

class Request {
    constructor(requestArr, maxErrorCount = 3) {
        this.requestArr = requestArr
        this.result = []
        this.errorCount = 0
        this.successCount = 0
        this.maxErrorCount = maxErrorCount
    }
    start() {
        return new Promise((resolve) => {
            this.requestArr.forEach((request, i) => request.then(res => { success(res, i) }, err => { error(err, i) }))
            const success = (res, index) => {
                this.result[index] = res
                this.successCount++
                console.log(this.successCount, index);
                if (this.successCount === this.requestArr.length) {
                    resolve(this.result)
                }
            }
            const error = (err, index) => {
                this.errorCount++
                console.log('errorCount', this.errorCount, index);
                if (this.errorCount < this.maxErrorCount) {
                    this.requestArr[index].then(res => { success(res, index) }, err => { error(err, index) })
                }
            }
        })
    }
}

function fetch(resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve(1)
        } else {
            reject()
        }
    }, 500);
}

const promise1 = new Promise(fetch)
const promise2 = new Promise(fetch)
const promise3 = new Promise(fetch)
const promise4 = new Promise(fetch)
const promise5 = new Promise(fetch)
const promises = [promise1, promise2, promise3, promise4, promise5]

const request = new Request(promises)
request.start().then(res => {
    console.log(res);
})