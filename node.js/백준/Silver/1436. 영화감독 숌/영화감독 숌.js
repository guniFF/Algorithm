const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `187`;
  }
};
var N = parseInt(js_input());
let num = 0;
let t = 666;

while (true) {
  let str_t = String(t);
  if (str_t.includes("666") == true) {
    num += 1;
  }
  if (num == N) {
    break;
  }
  t++;
}

console.log(t);
