// 合并两个有序数组
function merge(left, right) {
  let i = 0, j = 0
  let len1 = left.length, len2 = right.length
  let result = []
  while (i < len1 && j < len2) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }
  if (i < len1) {
    result.push(...left.slice(i))
  } else {
    result.push(...right.slice(j))
  }

  return result
}

function mergeSort(arr) {
  let len = arr.length
  if (len < 2) return arr
  const mid = len >> 1
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

// var arr = [7, 2, 8, 1, 4, 6, 9, 3];
// console.log(mergeSort(arr));
