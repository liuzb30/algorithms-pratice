const quickSort = require("./quickSort");

function bucket_sort(arr) {
  var sort_arr = [];
  var buckets = new Array(4);
  for (var i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  // 放入对应的桶里
  for (var i = 0; i < arr.length; i++) {
    var index = Math.floor(arr[i] / 3);
    buckets[index].push(arr[i]);
  }
  console.log(buckets);
  // 对每一个桶进行排序
  for (var i = 0; i < buckets.length; i++) {
    quickSort(buckets[i]);
  }
  console.log(buckets);

  // 搜集桶里的数据
  for (var i = 0; i < buckets.length; i++) {
    for (var j = 0; j < buckets[i].length; j++) {
      sort_arr.push(buckets[i][j]);
    }
  }
  return sort_arr;
}

var arr = [7, 2, 8, 1, 4, 6, 9, 3];
sort_arr = bucket_sort(arr);
console.log(sort_arr);
