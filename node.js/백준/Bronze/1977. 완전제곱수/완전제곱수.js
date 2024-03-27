const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString().trim();
    // '/dev/stdin'
  } else {
    return `60
100`;
  }
};

let input = js_input().split("\n");
let A = parseInt(input[0]);
let B = parseInt(input[1]);

let result_add = 0;
let result_min = 0;
for (let i = A; i < B + 1; i++) {
  if (i ** 0.5 % 1 == 0) {
    result_add += i;
    if (result_add == i) {
      result_min += i;
    }
  }
}
if (result_add == 0 && result_min == 0) {
  console.log(-1);
} else {
  console.log(result_add);
  console.log(result_min);
}
