console.log("Bài 1");
console.log("A");
console.log("Ví dụ 1");
let a = 1;
let b = 2;
b = [a,a=b][0];
console.log(a,b);
console.log("Ví Dụ 2");
let a = 1; 
let b = 2;
let c = 0;
c = a;
a = b;
b = c;
console.log(a,b)

console.log("Bài 2");
let a = (" hello good bye ")
a = Array(a)
console.log(a)
let c = "hello good bye"
c.split();
let c = "hello good bye"
c.split(" ");

console.log("Bài 3");
let a = [1,2,3,4,5];
let b = [ 5,1,6,7];
console.log(...a,...b)

console.log("Bài 4");
let shop = ["Jeans", "T-Shit", "socks"];
while (true) {
  let b = prompt(
    "Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?");
  if (b == "r") {
    console.log("The current item are :");
    for (let i = 0; i < shop.length; i++) {
      console.log(i + 1 + "." + shop[i]);
    }
  } else if (b == "c") {
    let c = prompt("Enter the name of the new item");
    shop.push(c);
    alert("Done");
  } else if (b == "u") {
    let d = prompt("Enter the position you want to update");
    let e = prompt("Enter the new name");
    shop[d] = e;
    alert("Done");
  } else if (b == "d") {
    let f = prompt("Enter the position you want to delete");
    shop.splice(f, 1);
    alert("Done");
  } else if (b === null) {
    alert("Good bye");
    break;
  } else {
    alert("This command is not  supported");
  }
}

console.log("Bài 5");
let a = prompt("Enter a squance of Number,separated by commas(,)");
a = a.split(","); 
let sum = 0;
for (i = 0; i < a.length; i++) {
    sum +=Number(a[i])
} 
alert(`The sum of them is ${sum}`)
console.log(sum); 

console.log("Bài 6");
let a = prompt("Enter a squance of Number,separated by commas(,)");
a = a.split(",");
min = Number(a[0]);
for (let i = 0; i < a.length; i++) {
  if (Number(min) > Number(a[i])) {
    min = a[i];
  }
}
alert(`The smallest number is ${Number(min)}`);

console.log("Bài 7")
let number = [9, 10 , 2 , 3 , 4 ];
let a = prompt("Enter a number");
if (a==9) {alert(`${a} is FOUND in my array at index 0`);}
else if ( a==10) {alert(`${a} is FOUND in my array at index 1`);}
else if ( a==2) {alert(`${a} is FOUND in my array at index 2`);}
else if ( a==3) {alert(`${a} is FOUND in my array at index 3`);}
else if ( a==4) {alert(`${a} is FOUND in my array at index 4`);}
else {alert(`${a} is NOT found in my array`)} 

console.log("Bài 8");
console.log("1.")
let size = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Phuong Nam and here is my sheep size:");
for (let i = 0; i < size.length; i++) {
  console.log(size[i]);
}

console.log("2.")
let max = Math.max.apply(Math, size);
console.log(`Now my biggest sheep has size ${max}, let's have it`);

console.log("3.")
size.splice(2, 1);
console.log("after shearing, here is my flock");
console.log(size);

console.log("4.")
console.log("MONTH 1");
console.log("One month has, passed, my sheeps have grown, here are their sizes");
for ( i = 0; i < size.length; i++) {console.log(size[i]+50)};

console.log("5.")
let n = 50 ; 
let sum = 0;
for ( let j = 2 ; j <= 4 ; j++) {
    console.log(`MONTH ${j}`); 
    console.log("One month has, passed, my sheeps have grown, here are their sizes");
    for ( i = 0; i < size.length; i++) { 
        sum +=Number(size[i]+n*j);
        console.log(size[i] + n*j)};
    
}

console.log("6.")
let t = sum*2;
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${t} `);

console.log("Bài 9")


console.log("Bài 10");
let a = prompt("Enter a sequence of names");
let b = a.split (","); console.log(a)
let b1 = b.map(y => "<"+y+">");
alert(b+"=>"+b1);

console.log("Bài 11")
let a = prompt("Enter a sequence number");
let b = a.split(",");
let c = 0 ; 
let d ;
d = b.filter(function(item) {
    return(item%2!=0);
})
alert(b+"=>"+d)

// bài 10 và 11 em có nhờ anh họ hướng đẫn 