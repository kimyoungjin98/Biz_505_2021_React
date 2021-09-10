let str = "";
console.log(str);

if (str) {
  console.log(str);
} else {
  console.log("없음");
}

let num = 0;
console.log(num);
if (num) {
  console.log(num);
}

/**
 * JS에서는
 * null, "", 0, undefined, NaN 등등의 값들이
 * if()를 만나면 false가 된다
 */

let bYes = true || true;
bYes = true || false;

let result = str || "대한민국";
