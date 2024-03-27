const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return ``;
  }
};

let h = js_input().split("\n");
let N = parseInt(h[0]);
h.splice(0, 1);

let dup_rmv = function (a) {
  let l_a = a.length;
  let fixed_a = "";
  for (let i = 0; i < l_a; i++) {
    if (i == l_a - 1) {
      fixed_a += a[i];
    } else {
      if (a[i] !== a[i + 1]) {
        fixed_a += a[i];
      }
    }
  }
  return fixed_a;
};
let result = 0;

for (let i = 0; i < N; i++) {
  let fixed_h = dup_rmv(h[i]);
  let num = 0;
  for (j = 0; j < fixed_h.length - 1; j++) {
    for (k = j + 1; k < fixed_h.length; k++) {
      if (fixed_h[j] == fixed_h[k]) {
        num += 1;
      }
    }
  }
  if (num == 0) {
    result += 1;
  }
}

console.log(result);