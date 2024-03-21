const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString().trim();
    // '/dev/stdin'
  } else {
    return `3 7`;
  }
};

let input = js_input().split(" ");

let A = parseInt(input[0]);
let B = parseInt(input[1]);

let arr = [];
let point = 1;
let repeat = 1;
for (let i = 1; i < 1001; i++) {
  if (point == repeat) {
    arr.push(point);
    point += 1;
    repeat = 1;
  } else if (point > repeat) {
    arr.push(point);
    repeat += 1;
  }
}

console.log(
  arr.splice(A - 1, B - A + 1).reduce((a, b) => {
    a += b;
    return a;
  }, 0)
);
