//Bài 1
console.log("Bài 1:");
console.log(
  "1. Const: là từ khóa định nghĩa 1 biến sẽ là hằng số. Biến const lưu trữ giá trị không thể thay đổi được trong suốt vòng đời của biến."
);
console.log(
  "Var: là từ khóa định nghĩa 1 biến có pham vi truy cập trong 1 function. Biến var có tác dụng trong function mà nó được định nghĩa."
);
console.log(
  "2.Phạm vi của biến số sử dụng var là phạm vi hàm số hoặc bên ngoài hàm số, toàn cục."
);
console.log(
  "Phạm vi của biến số sử dụng let là phạm vi một khối, xác định bởi cặp {}."
);
console.log(
  "3. Giống như khai báo let, khai báo const chỉ có thể được truy cập trong phạm vi khối được khai báo"
);
console.log(
  "Còn khai báo var có phạm vi là function/locally scoped (khai báo bên trong một function) hoặc phạm vi globally scoped."
);
console.log(
  "4. Const dùng để khai báo một hằng số, là một giá trị không thay đổi được trong suốt quá trình chạy."
);
console.log(
  "Let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó."
);
console.log(
  "Var tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó."
);
//Bài 2
console.log(
  "1. Boolean (phiên âm là loại dữ liệu logic chỉ có giá trị true hoặc false."
);
console.log("2. Kết quả trả về là true hoặc false");
//Bài 3
console.log("a.");
for (let i = 0; i < 7; i++) {
  console.log(i);
}

console.log("b.");
let n = prompt("n=?");
for (let i = 0; i < n; i++) {
  console.log(i);
}

console.log("c.");
let n = prompt("n=?");
for (let i = 3; i < n; i++) {
  console.log(i);
}

console.log("d.");
let n = prompt("n=?");
let c = prompt("c=?");
for (let i = c; i < n; i++) {
  console.log(i);
}

console.log("e.");
let n = prompt("n=?");
let c = prompt("c=?");
for (let i = c; i < n; i += 3) {
  console.log(i);
}

console.log("f.");
let n = prompt("n=?");
let s = prompt("s=?");
let c = prompt("c?");
for (let i = c; i < n; i += s) {
  console.log(i);
}
//Bài 4
const x = prompt("x=?");
function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(x));
//Bài 5
var age = prompt("How old are you?");
if (age >= 14) {
  console.log("You are old enough to enter!");
} else {
  console.log("You can't enter :)");
}
//Bài 6
let x = prompt("number=?");
if (x < 9 / 2 && x >= 0) {
  alert("Lower half of 9");
} else {
  alert("Higher half of 9");
}
//Bài 7
let n = prompt("n = ");
let x = prompt("x = ");
if (x < n / 2 && x > 0) {
  alert(`${x} is in lower half of ${n}`);
} else {
  alert(`${x} is in higher half of ${n}`);
}
//Bài 8
let x = prompt("x = ");
if (x % 2 == 0) {
  alert(`${x} is an even number`);
} else {
  alert(`${x} is an odd number`);
}
//Bài 9

//Bài 10
let mass = prompt("weight=?")
let height = prompt("height=?")
let bmi = mass/(height*height)
alert(bmi)
if(bmi<16)
{
    alert("You are Severely")
}
else if(16<=bmi&&bmi<=18.5)
{
    alert("You are Underweight")
}
else if(18.5<=bmi&&bmi<=25)
{
    alert("You are Normal")
}
else if(25<=bmi&&bmi<=30)
{
    alert("You are Overweight")
}
else alert("You are Obese")
//Bài 11
console.log("a.");
for (var i = 1; i <= 4; i++) {
  fd(50);
  lt(90);
}
console.log("b.");
for (var i = 1; i <= 3; i++) {
  fd(200);
  rt(120);
}
console.log("c.");
for (var i = 1; i <= 5; i++) {
  fd(200);
  rt(72);
}
console.log("d.");
for (var i = 1; i <= 6; i++) {
  fd(200);
  rt(60);
}
//Bài 12

//Bài 13
