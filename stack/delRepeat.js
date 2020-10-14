const delRepeat = (s) => {
  const stack = [];
  for (c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
};

console.log(delRepeat("abbaca"));
