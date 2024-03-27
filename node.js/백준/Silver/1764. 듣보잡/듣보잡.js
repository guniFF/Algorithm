const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `1 2
a
b
c`;
  }
};

let input = js_input().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
input.splice(0, 1);

let unknown_listen = new Map();
for (let i = 0; i < N; i++) {
  unknown_listen.set(input[i], i);
}
input.splice(0, N);

let result = input.filter((a) => unknown_listen.has(a));
console.log(result.length);
console.log(result.sort().join("\n"));