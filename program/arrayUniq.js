// 腾讯：不产生新数组，删除数组里的重复元素


function unique(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}

function unique(arr){
  const obj = {}
  const ret = arr.filter(item=> typeof item==='object' && item ? true : obj[typeof item +item] ? false : (obj[typeof item +item]=true))
  return ret
};



const  arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

console.log(unique(arr));
