const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `500613009`;
  }
};

let h = js_input();

let num_no = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < h.length; i++) {
  num_no[parseInt(h[i])] += 1;
}

let result = "";

for (let i = 9; i > -1; i--) {
  let num_pre = num_no[i];
  for (let j = 0; j < num_pre; j++) {
    result += i;
  }
}
console.log(parseInt(result));