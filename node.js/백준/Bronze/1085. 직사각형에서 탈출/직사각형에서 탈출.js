const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `653 375 1000 1000`;
  }
};

var N = js_input().split(" ");

var x = parseInt(N[0]);
var y = parseInt(N[1]);
var w = parseInt(N[2]);
var h = parseInt(N[3]);

console.log(Math.min(x, y, w - x, h - y));
