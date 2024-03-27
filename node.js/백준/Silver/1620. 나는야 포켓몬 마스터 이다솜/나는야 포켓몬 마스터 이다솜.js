const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return ``;
  }
};

let input = js_input().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
input.splice(0, 1);

let pocketmon_dic = new Map();
for (let i = 0; i < N; i++) {
  pocketmon_dic.set(input[i], i + 1);
}
input.splice(0, N);

let pocket_arrary = [...pocketmon_dic];
for (let i = 0; i < M; i++) {
  let pocket = input[i];
  if (pocketmon_dic.has(pocket)) {
    console.log(pocketmon_dic.get(pocket));
  } else {
    pocket *= 1;
    console.log(pocket_arrary[pocket - 1][0]);
  }
}