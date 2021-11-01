function bubbleSort(arr) {
    const len = arr.length
    // 外层循环用于控制从头到尾的比较+交换到底有多少轮
    for (let i = 0; i < len; i++) {
        // 内层循环用于完成每一轮遍历过程中的重复比较+交换
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// console.log(bubbleSort([3, 4, 2, 5, 6, 1]))