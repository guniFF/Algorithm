const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`;
  }
};

let h = js_input().split("\n");
let N = parseInt(h[0]);
h.splice(0, 1);

let str_length = new Array(50);

for (let i = 0; i < N; i++) {
  let prs_str = h[i];
  let prs_str_length = h[i].length;
  if (str_length[prs_str_length - 1] == undefined) {
    str_length[prs_str_length - 1] = [];
  }
  str_length[prs_str_length - 1].push(prs_str);
}
for (let i = 0; i < 50; i++) {
  if (str_length[i] !== undefined) {
    str_length[i].sort();
  }
}
let result_arr = [];
for (let i = 0; i < 50; i++) {
  if (str_length[i] !== undefined) {
    for (let j = 0; j < str_length[i].length; j++) {
      result_arr.push(str_length[i][j]);
    }
  }
}

let result = `${result_arr[0]}\n`;

for (let i = 1; i < result_arr.length; i++) {
  if (result_arr[i - 1] !== result_arr[i]) {
    result += result_arr[i] + "\n";
  }
}

console.log(result.trim());
