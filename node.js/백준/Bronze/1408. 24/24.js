const js_input = function () {
  var fs = require("fs");
  if (process.platform === "linux") {
    return fs.readFileSync(0).toString().trim();
    // '/dev/stdin'
  } else {
    return `23:50:50
01:00:00`;
  }
};

let input = js_input()
  .split("\n")
  .map((a) => a.split(":"));

let two_position = function (a) {
  if (a < 10) {
    return "0" + `${a}`;
  }
  return a;
};

let A = new Date(2023, 09, 10, ...input[0]);
let B = new Date(2023, 09, 10, ...input[1]);

if (B > A) {
  let dif_time = Math.abs(B.getTime() - A.getTime()) / 1000;
  let dif_hour = parseInt(dif_time / 3600);
  let dif_min = parseInt((dif_time - dif_hour * 3600) / 60);
  let dif_sec = dif_time % 60;
  console.log(
    `${two_position(dif_hour)}:${two_position(dif_min)}:${two_position(
      dif_sec,
    )}`,
  );
} else {
  let dif_time = 86400 - Math.abs(B.getTime() - A.getTime()) / 1000;
  let dif_hour = parseInt(dif_time / 3600);
  let dif_min = parseInt((dif_time - dif_hour * 3600) / 60);
  let dif_sec = dif_time % 60;
  console.log(
    `${two_position(dif_hour)}:${two_position(dif_min)}:${two_position(
      dif_sec,
    )}`,
  );
}
