const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString();
    // '/dev/stdin'
  } else {
    return `3 14`;
  }
};

let input = js_input().split(" ");
let DayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
if (parseInt(input[0]) < 10) {
  input[0] = "0" + input[0];
}

let time = new Date("2007" + "-" + input[0] + "-" + input[1]).getDay();
console.log(DayOfWeek[time]);
