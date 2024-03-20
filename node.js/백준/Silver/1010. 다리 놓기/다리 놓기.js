const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `3
2 2
1 5
13 29`;
  }
};

let input = js_input()
  .split("\n")
  .map((a) => a.split(" "));
let T = parseInt(input[0]);
input.splice(0, 1);

let result = [];
for (let k = 0; k < T; k++) {
  let N = parseInt(input[k][1]);
  let K = parseInt(input[k][0]);

  let son = BigInt(1);
  let mom = BigInt(1);

  for (let i = N; i > N - K; i--) {
    son *= BigInt(i);
  }

  for (let j = K; j > 0; j--) {
    mom *= BigInt(j);
  }
  result.push(`${BigInt(son / mom)}`);
}

console.log(result.join("\n"));
