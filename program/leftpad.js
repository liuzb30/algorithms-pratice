function leftpad(str, len, ch) {
  let i = len - str.length;
  while (i--) {
    str = ch + str;
  }
  return str;
}

function leftpad2(str, len, ch) {
  let i = len - str.length;
  let total = "";
  while (i) {
    if (i % 2 == 1) {
      total += ch;
    }
    if (i === 1) {
      return total + str;
    }

    ch += ch;
    i = Math.floor(i / 2);
  }
}

// console.log(leftpad("hello", 10, "0"));
console.time("leftpad2");
for (let i = 0; i < 100000; i++) {
  leftpad2("hello", 100000, "0");
}
console.timeEnd("leftpad2");

function leftpad3(str, len, ch) {
  let i = len - str.length;
  let total = "";
  while (i) {
    if (i & 1) {
      total += ch;
    }
    if (i === 1) {
      return total + str;
    }

    ch += ch;
    i = i >> 1;
  }
}
console.time("leftpad3");
for (let i = 0; i < 100000; i++) {
  leftpad3("hello", 100000, "0");
}
console.timeEnd("leftpad3");
