function flatten(obj) {
    let res = {}
    function dfs(data, prefix) {
        if (typeof data === 'object' && data !== null) {
            if (Array.isArray(data)) {
                data.forEach((value, index) => {
                    dfs(value, `${prefix}[${index}]`)
                })
            } else {
                for (let k in data) {
                    dfs(data[k], `${prefix}.${k}`)
                }
            }
        } else {
            res[prefix] = data
        }
    }
    dfs(obj, '')
    return res
}


// const obj = {
//     a: {
//         b: 1,
//         c: 2,
//         d: { e: 5 }
//     },
//     b: [1, 3, { a: 2, b: 3 }],
//     c: 3
// }

// flatten(obj)
   // {
   //  'a.b': 1,
   //  'a.c': 2,
   //  'a.d.e': 5,
   //  'b[0]': 1,
   //  'b[1]': 3,
   //  'b[2].a': 2,
   //  'b[2].b': 3
   //   c: 3
   // }