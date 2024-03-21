const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `3 5
1 2 4
2 3 4 5 6`;
  }
};

let input = js_input().split("\n");
let A_length = parseInt(input[0].split(" ")[0]);
let B_length = parseInt(input[0].split(" ")[1]);

let A = input[1].split(" ").map((a) => parseInt(a));
let B = input[2].split(" ").map((b) => parseInt(b));

let A_map = new Map();
let B_map = new Map();
for (let i = 0; i < A_length; i++) {
  A_map.set(A[i], i);
}
for (let i = 0; i < B_length; i++) {
  B_map.set(B[i], i);
}
console.log(
  A.filter((a) => !B_map.has(a)).length + B.filter((b) => !A_map.has(b)).length,
);
