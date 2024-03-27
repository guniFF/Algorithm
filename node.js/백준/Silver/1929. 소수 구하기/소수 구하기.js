const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync("/dev/stdin").toString().trim();
    // '/dev/stdin'
  } else {
    return `1 16`;
  }
};

let input = js_input().split(" ");

let make_prime = function (size_1) {
  let size = parseInt(size_1);
  let result = [];
  let arr = new Array(size + 1);
  for (let j = 2; j < size ** (1 / 2); j++) {
    if (arr[j] == undefined) {
      result.push(j);

      for (let i = 0; i < arr.length; i += j) {
        arr[i] = true;
      }
    }
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] == undefined) {
      result.push(i);
    }
  }

  return result;
};
let primes = make_prime(1000000 ** 0.5);
let is_prime = function (num, primes) {
  for (let prime of primes) {
    if (num % prime == 0 && num != prime) {
      return false;
    }
  }
  return true;
};
let result = new Set();
for (let i = parseInt(input[0]); i < parseInt(input[1]) + 1; i++) {
  if (i == 0 || i == 1) {
    result.add(2);
  } else {
    if (is_prime(i, primes)) {
      result.add(i);
    }
  }
}
console.log([...result].join("\n"));
