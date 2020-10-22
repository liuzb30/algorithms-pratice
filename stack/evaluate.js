// 算术表达式求值

function evaluate(str) {
  let ops = [];
  let vals = [];

  // 遇到数字则放入vals
  let i = 0;
  while (i < str.length) {
    const item = str[i];

    if (["+", "-", "/", "*"].indexOf(item) > -1) {
      //   console.log(item);
      ops.push(item);
    } else if (!isNaN(item)) {
      let j = i;
      while (!isNaN(str[i])) {
        i++;
      }
      vals.push(str.slice(j, i));
      i--;
      //   vals.push(item);
    } else if (item === ")") {
      const val1 = Number(vals.pop());
      const val2 = Number(vals.pop());
      const op = ops.pop();
      const res = eval(val2 + op + val1);
      vals.push(res);
    }
    i++;
  }
  console.log(vals);
  console.log(ops);
  return vals.pop();
}

evaluate("(1+((20*3)/(4*5)))");
