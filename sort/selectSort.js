function selectSort(arr) {
    let len = arr.length
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        // 初始化 minIndex 为当前区间第一个元素
        minIndex = i
        for (let j = i; j < len; j++) {
            // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
        if (minIndex !== i) {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr
}

// console.log(selectSort([3, 4, 2, 5, 6, 1]))