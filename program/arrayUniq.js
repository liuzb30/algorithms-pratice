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

// JSON.stringify无法区分{a:1,b:2} {b:1,a:2}

// 解决思路：
// 去重常见的思路就是遍历数组，然后比较数组中的每一项是否相等，所以重点是比较。
// 由于数组里面有对象类型，需要在判断类型相等情况下满足以下条件：
// 如果是数组元素，则数组中每一项要相等；
// 如果是对象元素，则对象的每个键值对需要相等；

// function unique(arr){
//   return arr.reduce((result,current)=>{
//     const hasIndex = result.findIndex(item=> isEqual(item, current))
//     if(hasIndex===-1){
//       result.push(current)
//     }
//     return result
//   },[])
//   function getType(obj){
//     const class2type = { '[object Boolean]': 'boolean', '[object Number]': 'number', '[object String]': 'string', '[object Function]': 'function', '[object Array]': 'array', '[object Date]': 'date', '[object RegExp]': 'regexp', '[object Object]': 'object', '[object Error]': 'error', '[object Symbol]': 'symbol','[object Null]':'null' }
//     const str = Object.prototype.toString.call(obj)
//     return class2type[str]
//   }

//   function isEqual(o1,o2){
//     const t1 = getType(o1)
//     const t2 = getType(o2)
//     if(t1!==t2) return false

//     if(t1==='array'){
//       // 判断数组个数是否相等
//       if(o1.length!==o2.length) return false
//       return o1.every((item,i)=> isEqual(item, o2[i]))
//     }
//     if(t1==='object'){
//       const keysArr = Object.keys(o1)
//       if(keysArr.length!==Object.keys(o2).length) return false
//       return keysArr.every((key,index)=> isEqual(o1[key],o2[key]))
//     }
//     return o1===o2
//   }

// }



// const  arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// const arr = [123, "meili", "123", "mogu", 123] ;
// const arr = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"] ;
const arr = [123, {a: 1,b:2}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}},{b:2,a:1}, "meili"]

console.log(unique(arr));
