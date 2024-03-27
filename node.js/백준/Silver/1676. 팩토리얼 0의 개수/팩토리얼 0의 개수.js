const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString();
    // '/dev/stdin'
  } else {
    return `10`;
  }
};

let N = parseInt(js_input());

let result = 0;
let two = 0;
let five = 0;
for (let i = 1; i < N + 1; i++) {
  let cur = i;

  while (cur % 2 == 0) {
    cur = cur / 2;
    two += 1;
  }
  while (cur % 5 == 0) {
    cur = cur / 5;
    five += 1;
  }
}
result += Math.min(two, five);
console.log(result);
