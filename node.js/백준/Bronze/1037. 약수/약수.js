const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `14
14 26456 2 28 13228 3307 7 23149 8 6614 46298 56 4 92596`;
  }
};

let input = js_input().split("\n");
let arr = input[1].split(" ").map((a) => parseInt(a));

if (arr.length == 1) {
  console.log(arr[0] ** 2);
} else {
  console.log(Math.max(...arr) * Math.min(...arr));
}
