function partition(arr, start, end) {
  let pivotPos = start;
  let pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotPos++;
      if (pivotPos !== i) {
        let temp = arr[pivotPos];
        arr[pivotPos] = arr[i];
        arr[i] = temp;
      }
    }
  }
  arr[start] = arr[pivotPos];
  arr[pivotPos] = pivot;
  return pivotPos;
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      let tmp = arr[i];
      //   往后移，直到找到比当前元素小的
      while (j >= 0 && arr[j] >= tmp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = tmp;
    }
  }
}

function quickSort(arr) {
  function quickSortEx(arr, start, end) {
    if (start < end) {
      const pos = partition(arr, start, end);
      quickSortEx(arr, start, pos);
      quickSortEx(arr, pos + 1, end);
    }
    return [arr[end]];
  }

  return quickSortEx(arr, 0, arr.length - 1);
}

// var arr = [7, 2, 8, 1, 4, 6, 9, 3];
// insertSort(arr);
// console.log(arr);

module.exports = quickSort;
