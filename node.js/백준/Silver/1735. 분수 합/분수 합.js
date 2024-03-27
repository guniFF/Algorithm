const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `2 7
3 5`;
  }
};

let input = js_input()
  .split("\n")
  .map((a) => a.split(" "))
  .map((b) => [parseInt(b[0]), parseInt(b[1])]);

let denominator = input[0][1] * input[1][1];
let numerator = input[0][1] * input[1][0] + input[1][1] * input[0][0];

function gcd(a, b) {
  let remainder = a % b;
  if (b == 0) {
    return a;
  } else {
    return gcd(b, remainder);
  }
}
let gcd_dn = gcd(numerator, denominator);
if (gcd_dn == 1) {
  console.log(numerator, denominator);
} else {
  console.log(numerator / gcd_dn, denominator / gcd_dn);
}
