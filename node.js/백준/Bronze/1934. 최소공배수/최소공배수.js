const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `3
1 45000
6 10
13 17`;
  }
};

let input = js_input().split("\n");
let N = parseInt(input[0]);
input.splice(0, 1);
let testase = input.map((a) => a.split(" "));

function gcd(a, b) {
  const remainder = a % b; // 1번
  if (remainder === 0) return b; // 2번
  return gcd(b, remainder); // 3번
}
let gcd_maker = function (a) {
  return [a[1], a[1] % a[0]];
};

for (test of testase) {
  test.sort((a, b) => a - b).reverse();
  let a_1 = parseInt(test[0]);
  let a_2 = parseInt(test[1]);
  if (a_1 % a_2 == 0) {
    console.log(a_1);
  } else {
    console.log((a_1 * a_2) / gcd(a_1, a_2));
  }
}
