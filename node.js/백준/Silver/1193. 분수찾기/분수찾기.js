const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `2`;
  }
};

var h = parseInt(js_input());
var num_stack = 0;
var t = 1;

while (true) {
  num_stack += t;
  if (num_stack >= h) {
    break;
  }
  t++;
}

var isEven = function (num) {
  return num % 2 == 0;
};

var arr_end = [];
var j = t;
for (var i = 1; i < t + 1; i++) {
  var arr = [];
  arr.push(i, "/", j);
  arr_end.push(arr);
  j--;
}

var idx_result = num_stack - h;

if (isEven(t)) {
  console.log(arr_end[t - idx_result - 1].join(""));
} else {
  console.log(arr_end[idx_result].join(""));
}
