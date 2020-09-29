// // //Basic

// // //part1.1:
// // // console.log(Math.random(0,1))

// // //part1.2:
// // // let x = [2, 5, 6, 9, 10];
// // // let i = x[Math.floor(Math.random() * x.length)];
// // // console.log(i);

// // //part1.3
// // let x = [
// //     quiz1 = {
// //         question: 'số nào chia hết cho 25?',
// //         choice: '1. 2\n2. 3\n3. 4\n4. 5',
// //         rightChoice: 4,
// //     },
// //     quiz2 = {
// //         question: 'thành phố thuộc miền nam Việt Nam?',
// //         choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
// //         rightChoice: 1,
// //     },
// //     quiz3 = {
// //         question: 'bò có mấy chân?',
// //         choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
// //         rightChoice: 1,
// //     },
// //     quiz4 = {
// //         question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
// //         choice1: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
// //         rightChoice: 4,
// //     }
// // ]
// // console.log(x);

// // part1.4
// let x = [
//     quiz1 = {
//         question: 'số nào chia hết cho 25?',
//         choice: '1. 2\n2. 3\n3. 4\n4. 5',
//         rightChoice: 4,
//     },
//     quiz2 = {
//         question: 'thành phố thuộc miền nam Việt Nam?',
//         choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
//         rightChoice: 1,
//     },
//     quiz3 = {
//         question: 'bò có mấy chân?',
//         choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
//         rightChoice: 1,
//     },
//     quiz4 = {
//         question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
//         choice1: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
//         rightChoice: 4,
//     }
// ]
// let i = Math.floor(Math.random()*x.length);
// let n = prompt(`${x[i].question}\n${x[i].choice}`);

//part1.5
// let x = [
//     quiz1 = {
//         question: 'số nào chia hết cho 25?',
//         choice: '1. 2\n2. 3\n3. 4\n4. 5',
//         rightChoice: 4,
//     },
//     quiz2 = {
//         question: 'thành phố thuộc miền nam Việt Nam?',
//         choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
//         rightChoice: 1,
//     },
//     quiz3 = {
//         question: 'bò có mấy chân?',
//         choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
//         rightChoice: 1,
//     },
//     quiz4 = {
//         question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
//         choice: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
//         rightChoice: 4,
//     }
// ]
// let i = Math.floor(Math.random()*x.length);
// let n = prompt(`${x[i].question}\n${x[i].choice}`);
// if ((x)[i].rightChoice == n) {
//     alert('bravo');
// } else {
//     alert('good luck')
// }

//part1.6
// let x = [
//     quiz1 = {
//         question: 'số nào chia hết cho 25?',
//         choice: '1. 2\n2. 3\n3. 4\n4. 5',
//         rightChoice: 4,
//     },
//     quiz2 = {
//         question: 'thành phố thuộc miền nam Việt Nam?',
//         choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
//         rightChoice: 1,
//     },
//     quiz3 = {
//         question: 'bò có mấy chân?',
//         choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
//         rightChoice: 1,
//     },
//     quiz4 = {
//         question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
//         choice: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
//         rightChoice: 4,
//     }
// ]
// while (true) {
//     if (x.length == 0) {
//         break;
//     };
//     let i = Math.floor(Math.random()*x.length);
//     let n = Number(prompt(`${x[i].question}\n${x[i].choice}`));
//     if ( n == null || n == undefined || n != x[i].rightChoice) {
//         alert('Wrong!!! DIE!!!')
//         break;
//     };
//     x.splice(i, 1);
// };
// alert('u won');

//part1.7
// let x = [
//     quiz1 = {
//         question: 'số nào chia hết cho 25?',
//         choice: '1. 2\n2. 3\n3. 4\n4. 5',
//         rightChoice: 4,
//     },
//     quiz2 = {
//         question: 'thành phố thuộc miền nam Việt Nam?',
//         choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
//         rightChoice: 1,
//     },
//     quiz3 = {
//         question: 'bò có mấy chân?',
//         choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
//         rightChoice: 1,
//     },
//     quiz4 = {
//         question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
//         choice: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
//         rightChoice: 4,
//     }
// ]
// var sum = x.length;
// var count = 0;
// while (true) {
//     if (x.length == 0) {
//         break;
//     };
//     let i = Math.floor(Math.random()*x.length);
//     let n = Number(prompt(`${x[i].question}\n${x[i].choice}`));
//     if ( n == x[i].rightChoice) {
//         count++;
//     } else {
//         alert('Wrong!!!')
//     };
//     x.splice(i, 1);
// };
// alert('Done');
// alert(`You answered correctly ${count} out of ${sum} questions`);

//part1.8
let x = [
    quiz1 = {
        question: 'số nào chia hết cho 25?',
        choice: '1. 2\n2. 3\n3. 4\n4. 5',
        rightChoice: 4,
    },
    quiz2 = {
        question: 'thành phố thuộc miền nam Việt Nam?',
        choice: '1. Hồ Chí Minh\n2.Thanh Hóa\n3. Hà Nội\n4. Thái Bình',
        rightChoice: 1,
    },
    quiz3 = {
        question: 'bò có mấy chân?',
        choice: '1. 4 chân\n2. 8 chân\n3. 12 chân\n4. 16 chân',
        rightChoice: 1,
    },
    quiz4 = {
        question: 'Bác Hồ đọc bản tuyên ngôn năm nào?',
        choice: '1. 1942\n2. 1943\n3. 1944\n4. 1945',
        rightChoice: 4,
    }
]
var sum = x.length;
var count = 0;
while (true) {
    if (x.length == 0) {
        break;
    };
    let i = Math.floor(Math.random()*x.length);
    let arrchoice = x[i].choice;
    for (let u = arrchoice.length - 1; u > 0; u--){
        const j = Math.floor(Math.random() * (u+1)); 
    };
    let n = Number(prompt(`${x[i].question}\n${x[i].choice}`));
    if ( n == x[i].rightChoice) {
        count++;
    };
    x.splice(i, 1);
};
alert('Done');
alert(`You answered correctly ${count} out of ${sum} questions`);