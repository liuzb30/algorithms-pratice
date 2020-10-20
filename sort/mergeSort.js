// 合并两个有序数组
function merge(arr1, arr2) {
  let mergeArr = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      mergeArr.push(arr1[index1]);
      index1++;
    } else {
      mergeArr.push(arr2[index2]);
      index2++;
    }
  }

  if (index1 < arr1.length) {
    while (index1 < arr1.length) {
      mergeArr.push(arr1[index1]);
      index1++;
    }
  }
  if (index2 < arr2.length) {
    while (index2 < arr2.length) {
      mergeArr.push(arr2[index2]);
      index2++;
    }
  }
  return mergeArr;
}

function mergeSort(arr) {
  function mergeSortEx(arr, start, end) {
    if (start === end) {
      return [arr[end]];
    }
    let middle = Math.floor((start + end) / 2);
    let arr1 = mergeSortEx(arr, start, middle);
    let arr2 = mergeSortEx(arr, middle + 1, end);
    return merge(arr1, arr2);
  }
  return mergeSortEx(arr, 0, arr.length - 1);
}
// var arr1 = [1, 3, 5];
// var arr2 = [2, 4, 6];
// console.log(merge(arr1, arr2));

var arr = [7, 2, 8, 1, 4, 6, 9, 3];
console.log(mergeSort(arr));
