const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return ``;
  }
};

var h = js_input().split("\n");
var N = parseInt(h[0]);
var num_pre = h[1].split(" ");
var num = [];

for (var i = 0; i < num_pre.length; i++) {
  num.push(parseInt(num_pre[i]));
}

var primenum_test = 0;
for (var i = 0; i < N; i++) {
  var arr = [];
  for (var j = 1; j < num[i] + 1; j++) {
    if (num[i] % j == 0) {
      arr.push(j);
    }
  }
  if (arr.length == 2) {
    primenum_test += 1;
  }
}

console.log(primenum_test);
