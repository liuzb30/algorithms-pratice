// 插入排序特点：它先将待排序序列的第一个元素看做一个有序序列，当然了，就一个元素，那么它一定是有序的；
// 而把第二个元素到最后一个元素当成是未排序序列；对于未排序的序列进行遍历，将扫描到的每个元素插入有序序列的适当位置，
// 保证有序序列依然有序，那么直到所有数据都完成，我们也就完成了排序。

const insertSort = (array) => {
  let prev;
  let current;
  for (let i = 1; i < array.length; i++) {
    prev = i - 1;
    current = array[i];
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      prev--;
    }
    array[prev + 1] = current;
  }
  return array;
};

let arr = [1, 3, 6, 3, 4, 8, 5, 7];

insertSort(arr);
console.log(arr);
