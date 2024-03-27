const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `200`;
  }
};

let input = parseInt(js_input());

let i = 1;
let sum = 0;
while (true) {
  sum += i;

  if (sum > input) {
    break;
  }
  i++;
}

console.log(i - 1);
