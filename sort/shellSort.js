function shellSort(arr){
    // 缩小增量
    let length = arr.length
    for(let gap = length>>1; gap>0; gap = gap>>1){
        for(let i=gap; i<length;i++){
            let j=i;
            const current = arr[j]
            while(j-gap>=0 && current<arr[j-gap]){
                arr[j] = arr[j-gap]
                j = j-gap
            }
            arr[j] = current
        }
    }
    return arr
}

let arr = [2,5,10,7,10,32,90,9,11,1,0,10];
console.log(shellSort(arr));