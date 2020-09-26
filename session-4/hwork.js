console.log("Bài 1");
// 1.1
 console.log("X nhận được giá trị property từ product")
 // 1.2
 let product = {
    name:"Xiaomi rice cooker",
    price: 1700,
    brand: "Xiaomi",
    color: "white"
};
 console.log("Name: "+ product.name)
 console.log("price: "+ product.price)
 console.log("brand: "+ product.brand)
 console.log("color: "+ product.color)
 
 console.log("Bài 2");
 let task = {
     subject: "Implement login feature",
     createdBy: "Hoang Ngoc Duc",
     assignTo: "Nguyen Phuong Nam",
     dueDate: "2019-10-08T18:00:24+0000",
     expectedHours: 0.5,
     };
 
 let { subject , dueDate , assignTo } = task;
 console.log(
 "Subject: "+ subject +"\n",
 "DueDate: "+ dueDate +"\n",
 "AssignTo: "+ assignTo);

 console.log("Bài 3");
//3.1
console.log("Kiểu dữ liệu ngoài cùng là một Object");
// 3.2
console.log ("Thuộc tính của hits là một Array bao gồm 3 Object ");
//3.3
console.log("const {title, locations, salary, benefits,skills, requirements} = benefits")

console.log("Bài 4");
//4.1, 4.2

let keywork = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for ‘error’ ",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  ui_ux:
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
while (true) {
  alert("Hi there, this is dev dictionary");
  let a = prompt("Enter a keyword");
  if (a == null) {
    alert("Good bye!");
    break;
  } else if (a == "debug") {
    alert(
      "debug: The process of figuring out why your program has a certain error and how to fix it"
    );
  } else if (a == "done") {
    alert(
      "done: When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)"
    );
  } else if (a == "pm") {
    alert(
      "pm: The short version of Project Manager, the person in charge of the final result of a project"
    );
  } else if (a == "ui_ux") {
    alert(
      "ui_ux: UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
    );
  } else {
    let b = prompt(
      `We could not in find your word: ${a}, leave your explanation`
    );
    alert("Done");
    keywork.a = b;
  }
}

console.log("Bài 5");

let a = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
  },
  {
    name: "VSmart active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "Phone",
  },
  {
    name: "IphoneX",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];

//5.1
for (let i = 0; i < a.length; i++) {
  console.log("\n-----------------------");
  console.log("Name: " + a[i].name);
  console.log("Price: " + a[i].price);
}
//5.2
for (let i = 0; i < a.length; i++) {
console.log(`#${i+1}. ${a[i].name} \n ${a[i].price}`);
}
let b = Number(prompt("Enter product position:"));
console.log(`
    Name: ${a[b - 1].name}
    Brand: ${a[b - 1].brand}
    Price: ${a[b - 1].price}
    Color: ${a[b - 1].color}
    Category: ${a[b - 1].category}
  `);

//5.3

let x = prompt("Enter your category");
if (x == "charger") {
  console.log(`Name: ${a[0].name} \n Price: ${a[0].price}`);
} else if (x == "phone") {
  for (let i = 1; i < a.length; i++) {
    console.log(`Name: ${a[i].name} \n Price: ${a[i].price}`);
  }
}
//5.4

a[0].Providers = "Phukienzezo Dientuccc";
a[1].Providers = "Tgdd ddggb Vhstore";
a[2].Providers = "Tgdd";
a[3].Providers = "Tgdd";

for (let t = 0; t < a.length; t++) {
  console.log(`#${t + 1}.  ${a[t].name}\n${a[t].price}\n${a[t].Providers} `);
}

//5.5

let d = prompt("Enter provider");
if (d == "phukienzezo" || d == "dientuccc") {
  console.log(
    `Name: ${a[0].name}\n
    Brand: ${a[0].brand}\n
    Price: ${a[0].price}\n
    Color: ${a[0].color}\n
    Category: ${a[0].category}\n
    Providers: ${a[0].Providers}`
  );
} else if (d == "tgdd") {
  for (let i = 1; i < a.length; i++) {
    console.log("\n------------------------");
    console.log(
      ` Name: ${a[i].name}\n
        Brand: ${a[i].brand}\n
        Price: ${a[i].price}\n
        Color: ${a[i].color}\n
        Category: ${a[i].category}\n
        Providers: ${a[i].Providers}`
    );
  }
} else if (d == "ddggb" || d == "vhstore") {
  console.log(
    `Name: ${a[1].name}\n
     Brand: ${a[1].brand}\n
     Price: ${a[1].price}\n
     Color: ${a[1].color}\n
     Category: ${a[1].category}\n
     Providers: ${a[1].Providers}`
  );
}

console.log("Bài 6");
// 6.1 

let learn = [
    {
        name: "HTML",
        Complete : false
    },
    {
        name: "CSS",
        Complete : false
    },
    {
        name: "Basics of javascript",
        Complete : false
    },
    {
        name: "Node Package Manager (npm)",
        Complete : false
    },
    {
        name: "Git",
        Complete : false
    }
]; 
//6.6
for ( let i = 0 ; i < learn.length ; i++ ) {
    console.log(`1. [ ] ${learn[i].name}`)
}


console.log("Hi there , this is your learning takes to front-end developer carrer: "); 
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};

//6.2
let b = prompt("Enter your command (New , update , complete")
if (b=="new") {let c = prompt("Enter new task:")
learn.push({
    name: c,
    Complete: false
}) ; console.log(learn)
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};}

// 6.3 
let b = prompt("Enter your command (New , update , complete")
if (b=="update") {let c =Number(prompt("Enter position:"))
let d = prompt("Enter new title")
learn[c-1].name = d
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.4
let b = prompt("Enter your command (New , update , complete")
if (b=="complete") {let c =prompt("Enter position:")
learn[c-1].Complete = true
for (let i = 0 ; i < learn.length ; i ++ ) {
    console.log(`${i+1}. ${learn[i].name} \n Complete: ${learn[i].Complete}`)
};
}

//6.5
let d = prompt("Bạn muốn xóa gì? ( HTML, CSS , ...)")

//6.6 
console.log('Hi there, this is learning tasks to front-end developer career:');
let tasks = [
    {
        subject: 'HTML',
        complete: false,
    },
    {
        subject: 'CSS',
        complete: false,
    },
    {
        subject: 'Basic of Javascrip',
        complete: false,
    },
    {
        subject: 'Node Packeage Manager',
        complete: false,
    },
    {
        subject: 'Git',
        complete: true,
    },
    {
        subject: 'ReactJS',
        complete: false,
    },
];
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].complete == true) {
        console.log(`[X] ${tasks[i].subject}`);
    }else {
        console.log(`[ ] ${tasks[i].subject}`);
    }
};

console.log("Bài 7");
const pos = {
    x: 200,
    y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

console.log("Bài 8");
const square = {
    x: 100,
    y: 50,
    width: 20,
};
penup();
rt(90);
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
    fd(square.width);
    rt(90);
}

console.log("Bài 9");
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++) {
    fd(rect.height);
    rt(90);
    fd(rect.width);
    rt(90);
}

console.log("Bài 11");
const circle = {
    shape: 'circle',
    x: 100,
    y: 50,
    radius: 30,
};
let a = 2*3.14*circle.radius;
penup();
rt(90);
fd(circle.x);
lt(90);
fd(circle.y);
fd(circle.radius);
pendown();
rt(90);
for (let i = 0; i < a; i++) {
    fd(1);
    rt(360/a);
}
