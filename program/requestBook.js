// 假设现在后端有一个服务，支持批量返回书籍信息，它接受一个数组作为请求数据，数组储存了需要获取书目信息的书目 id，这个服务 fetchBooksInfo 大概是这个样子：


// const fetchBooksInfo = bookIdList => {
// // ...
// return ([{

// id: 123,
// // ...

// },
// {
// id: 456
// // ...
// },
// // ...
// ])
// }

// 储存将要请求的 id 数组
let bookIdListToFetch = []

// 储存每个 id 请求 promise 实例的 resolve 和 reject
// key 为 bookId，value 为 resolve 和 reject 方法，如：
// { 123: [{resolve, reject}]}
// 这里之所以使用数组存储 {resolve, reject}，是因为可能存在重复请求同一个 bookId 的情况。其实这里我们进行了滤重，没有必要用数组。在需要支持重复的场景下，记得要用数组存储
let promiseMap = {}

// 用于数组去重
const getUniqueArray = array => Array.from(new Set(array))

// 定时器 id
let timer

const getBooksInfo = bookId => new promise((resolve, reject) => {
    promiseMap[bookId] = promiseMap[bookId] || []
    promiseMap[bookId].push({ resolve, reject })

    const clearTask = () => {
        // 清空任务和存储
        bookIdListToFetch = []
        promiseMap = {}
    }

    if (bookIdListToFetch.length === 0) {
        bookIdListToFetch.push(bookId)

        timer = setTimeout(() => {
            handleFetch(bookIdListToFetch, promiseMap)

            clearTask()
        }, 100)
    }
    else {
        bookIdListToFetch.push(bookId)

        bookIdListToFetch = getUniqueArray(bookIdListToFetch)

        if (bookIdListToFetch.length >= 100) {
            clearTimeout(timer)

            handleFetch(bookIdListToFetch, promiseMap)

            clearTask()
        }
    }
})

const handleFetch = (list, map) => {
    fetchBooksInfo(list).then(resultArray => {
        const resultIdArray = resultArray.map(item => item.id)

        // 处理存在的 bookId
        resultArray.forEach(data => promiseMap[data.id].forEach(item => {
            item.resolve(data)
        }))

        // 处理失败没拿到的 bookId
        let rejectIdArray ＝[]
        bookIdListToFetch.forEach(id => {
            // 返回的数组中，不含有某项 bookId，表示请求失败
            if (!resultIdArray.includes(id)) {
                rejectIdArray.push(id)
            }
        })

        // 对请求失败的数组进行 reject
        rejectIdArray.forEach(id => promiseMap[id].forEach(item => {
            item.reject()
        }))
    }, error => {
        console.log(error)
    })
}
