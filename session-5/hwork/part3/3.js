//part3.1
// const arr = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let count = {};
// arr.forEach(function(x) {count[x] = (count[x] || 0) + 1;});
// console.log(count);

// part3.2
const inventory = [

    {

        name: 'HP Envy 13aq',

        price: 21000,

        brand: 'HP',

        quantity: 5,

    },

    {

        name: 'Dell XPS 9370',

        price: 30000,

        brand: 'Dell',

        quantity: 1,

    },

    {

        name: 'Dell Inspiron 3567',

        price: 9300,

        brand: 'Dell',

        quantity: 12,

    },

    {

        name: 'Dell Latitude E5450',

        price: 8600,

        brand: 'Dell',

        quantity: 2,

    },

    {

        name: 'Asus Zenbook',

        brand: 'Asus',

        price: 20000,

        quantity: 4,

    },

    {

        name: 'HP Pavilion',

        brand: 'HP',

        price: 14000,

        quantity: 7,

    },
]

//part3.3
// let listbrand = {};
// for (let item of inventory) {
//     let brand = item.brand;
//     if (brand in listbrand) {
//         listbrand[brand].push(item);
//     }else{
//         listbrand[brand] = [];
//         listbrand[brand].push(item);
//     }
// }
// console.log(listbrand);

// //part3.4
// let listbrand = {};
// for (let item of inventory) {
//     let brand = item.brand;
//     if (brand in listbrand) {
//         listbrand[brand].push(item);
//     }else{
//         listbrand[brand] = [];
//         listbrand[brand].push(item);
//     }
// };
// console.log(listbrand);
// let ask = prompt('Which brand?');
// alert(`There are ${listbrand[ask].length} genneration of \'${ask.toUpperCase()}\' in inventory `);

// //part3.5
// let listbrand = {};
// for (let item of inventory) {
//     let brand = item.brand;
//     if (brand in listbrand) {
//         listbrand[brand].push(item);
//     }else{
//         listbrand[brand] = [];
//         listbrand[brand].push(item);
//     }
// };
// console.log(listbrand);
// let ask = prompt('Which brand?');
// let a = '';
// for (let i = 0; i < listbrand[ask].length; i++) {
//     a += '\n' + listbrand[ask][i].name;
// }
// alert(`There are ${listbrand[ask].length} genneration of \'${ask.toUpperCase()}\' in inventory: ${a}`);

// //part3.6
// let listbrand = {};
// for (let item of inventory) {
//     let brand = item.brand;
//     if (brand in listbrand) {
//         listbrand[brand].push(item);
//     }else{
//         listbrand[brand] = [];
//         listbrand[brand].push(item);
//     }
// };
// console.log(listbrand);
// let ask = prompt('Which brand?');
// let a = '';
// for (let x of listbrand[ask]) {
//     a += '\n' + x.name;
// };
// let sum = 0;
// for (let n of listbrand[ask]) {
//     sum += n.price*n.quantity;
// }
// alert(`There are ${listbrand[ask].length} genneration of \'${ask.toUpperCase()}\' in inventory:\n${a}\n\nwith total value: ${sum}K`);

// //part3.7
// let listbrand = {};
// for (let item of inventory) {
//     let brand = item.brand;
//     if (brand in listbrand) {
//         listbrand[brand].push(item);
//     }else{
//         listbrand[brand] = [];
//         listbrand[brand].push(item);
//     }
// };
// console.log(listbrand);
// let ask = prompt('Which brand?');
// let a = '';
// for (let x of listbrand[ask]) {
//     a += '\n' + x.name;
// };
// let sum = 0;
// for (let n of listbrand[ask]) {
//     sum += n.price*n.quantity*1000;
// }
// alert(`There are ${listbrand[ask].length} genneration of \'${ask.toUpperCase()}\' in inventory:\n${a}\n\nwith total value: ${sum.toLocaleString('vi-VN')}VND`);