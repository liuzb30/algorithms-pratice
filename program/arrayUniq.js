// 腾讯：不产生新数组，删除数组里的重复元素


function unique(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index)
}

function unique(arr){
  const obj = {}
  const ret = arr.filter(item=> typeof item==='object' && item ? true : obj[typeof item +item] ? false : (obj[typeof item +item]=true))
  return ret
};

function unique(arr){
  const obj = {}
  const result = arr.filter(item=> {
    let key= typeof item + JSON.stringify(item)
    return obj[key] ? false : obj[key]=true
  })
  return result;
}



// const  arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// const arr = [123, "meili", "123", "mogu", 123] ;
// const arr = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"] ;
const arr = [123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]

console.log(unique(arr));
