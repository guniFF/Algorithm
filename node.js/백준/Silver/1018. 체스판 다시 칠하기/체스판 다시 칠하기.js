const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return ``;
  }
};

let chess = js_input().split("\n");
let N = parseInt(chess[0].split(" ")[0]);
let M = parseInt(chess[0].split(" ")[1]);
chess.splice(0, 1);

const pt1 = "BWBWBWBW";
const pt2 = "WBWBWBWB";
let change_color = function (a) {
  let num1 = 0;
  let num2 = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (i % 2 == 0) {
        if (a[i][j] !== pt1[j]) {
          num1 += 1;
        } else if (a[i][j] !== pt2[j]) {
          num2 += 1;
        }
      } else {
        if (a[i][j] !== pt2[j]) {
          num1 += 1;
        } else if (a[i][j] !== pt1[j]) {
          num2 += 1;
        }
      }
    }
  }

  return Math.min(num1, num2);
};

let result = [];

for (let i = 0; i < N - 7; i++) {
  let cutM = chess.slice(i, i + 8);
  for (let j = 0; j < M - 7; j++) {
    let cutMN = [];
    for (let k = 0; k < 8; k++) {
      cutMN.push(cutM[k].slice(j, j + 8));
    }
    result.push(change_color(cutMN));
  }
}

console.log(Math.min(...result));
