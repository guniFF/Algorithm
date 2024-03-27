const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString().trim();
    // '/dev/stdin'
  } else {
    return `123 100`;
  }
};

let input = js_input().split(" ");
let a = parseInt(input[0].split("").reverse().join(""));
let b = parseInt(input[1].split("").reverse().join(""));

let add = a + b + "";

console.log(parseInt(add.split("").reverse().join("")));
