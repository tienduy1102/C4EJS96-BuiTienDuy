// // console.log("Bài 1");
// // init
// let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
//   };
  
//   // console.log("Bài 2");
//   // read 2.1
//   let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
//   };
//   console.log(movies);
//   console.log(movies.rate + movies.title + movies.year);
//   console.log(movies["director"]);
  
//   // read 2.2
//   let a = {
//       interests: ["LOL","DOTA","FIFA"]
//   }
//   a.interests.push("Eat")
//   let b = a.interests
//   console.log(b[0].toUpperCase());
//   console.log(b[1].toUpperCase());
//   console.log(b[3].toUpperCase())
  
//   // read 2.3
//   let movies = {
//       title: "The dark night rises",
//       year: 2012,
//       rate: 8.4,
//     }; 
//   let a = prompt("What you want to know?");
//   if (a=="title") {alert(movies.title)}
//   else if (a=="year") {alert(movies.year)}
//   else if (a=="rate") {alert(movies.rate)}
//   else {alert(`${a} does not exist in our data`)}
  
  
//   // console.log("Bài 3");
//   // update 3.1
//   let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
//   };
//   movies.rate = 8.7;
//   movies.rate = movies.rate + 0.5;
//   console.log(movies.rate);
  
//   //update 3.2
  
//   let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
//   };
//   let a = prompt("What you want to update?");
//   let b = prompt("What is the update?");
//   movies[a] = b;
//   console.log(movies);
  
//   // console.log("Bài 4");
//   // Creat 4.1
  
//   let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.4,
//   };
//   let c = prompt("What you want to update?");
//   if (c=="title") {let d = prompt("Enter the new data"); movies.title = d}
//   else if (c==null) {alert("Good Bye!")}
//   else if (c=="year") { let e = prompt("Enter the new data"); movies.year = e}
//   else if (c=="rate") { let g = prompt("Enter the new data"); movies.rate = g}
//   else {alert(`'${c}' does not exist in our data, we will add new`);
//   let f = prompt("Enter the new data"); movies.c=f
//   } console.log(movies);
  
//   // console.log("Bài 5");
//   // Array and Object
//   // 5.1
//   let movies = [
//     {
//       title: "The dark night rises",
//       year: 2012,
//       rate: 8.4,
//     },
//     {
//       title: "catch me if you can",
//       year: 2002,
//       rate: 8,1,
//     },
//     {
//       title: "Titanic",
//       year: 1997,
//       rate: 7,8,
//     },
//   ];
//   // 5.2
//   console.log(movies[0]);
//   // // 5.3
//   console.log(movies[2].title);
//   // 5.4 , 5.5 , 5.6
//   for (let i = 0; i < movies.length; i++) {
//     console.log("\n"+"------------------------");
//     console.log(movies[i].title);
//     console.log("Rate:" + movies[i].rate);
//     console.log("Year:" + movies[i].year);
//     movies[i].rate = movies[i].rate + 0.7;
//     console.log(movies[i].rate);
//   }
  
//   // Bài 6 . Array of object
//   //6.1 , 6.2 , 6.3
//   let movies = {
//     title: "The dark night rises",
//     year: 2012,
//     rate: 8.5,
//     casts: ["Batman", "Bane", "Catwoman"],
//   };
//   let casts = movies.casts;
//   casts.push("James Gordon","Selina Kyle")
//   console.log(movies.title);
//   console.log("Rate: " + movies.rate);
//   console.log("Year: " + movies.year);
//   console.log("Casts: " + movies.casts);
  
//   // Bài 7 
  
//   let a = [
//       {
//           title: "Naruto",
//           year : 2012,
//           rate : 8.5,
//           casts: ["Naruto", "Sasuke", "Sakura"], 
//       },
//       {
//           title: "Doreamon",
//           year : 2010,
//           rate : 7.5,
//           casts: ["Doremon","Nobita","Xuka"]
//       },
//       {
//           title: "One piece",
//           year : 1997,
//           rate : 9.0,
//           casts: ["Luffy","Zoro","Nami"]
//       }
//   ]
//   for ( let i = 0 ; i < a.length ; i++) {
//       console.log("\n"+"---------------------------")
//       console.log(a[i].title)
//       console.log("Year: "+a[i].year)
//       console.log("Rate: "+a[i].rate)
//       console.log("Casts: "+a[i].casts)
//   }
  
//   // Bài 8
//   // 8.1

//   {
//     total_results: 3,
//     results: [
//         {
//             popularity: 512.119,
//             vote_count: 460,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//             id: 475557,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
//             original_language: "en",
//             original_title: "Joker",
//             genres: [
//                 80,
//                 18,
//                 53
//             ],
//             title: "Joker",
//             vote_average: 8.8,
//             overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//             release_date: "2019-10-04"
//         },
//         {
//             popularity: 241.402,
//             vote_count: 598,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
//             id: 429203,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
//             original_language: "en",
//             original_title: "The Old Man & the Gun",
//             genres: [
//                 35,
//                 80,
//                 18
//             ],
//             title: "The Old Man & the Gun",
//             vote_average: 6.3,
//             overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
//             release_date: "2018-09-28"
//         },
//         {
//             popularity: 233.735,
//             vote_count: 4139,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
//             id: 429617,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
//             original_language: "en",
//             original_title: "Spider-Man: Far from Home",
//             genres: [
//                 28,
//                 12,
//                 878
//             ],
//             title: "Spider-Man: Far from Home",
//             vote_average: 7.6,
//             overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
//             release_date: "2019-07-02"
//         },
//         {
//             popularity: 158.333,
//             vote_count: 323,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
//             id: 522938,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
//             original_language: "en",
//             original_title: "Rambo: Last Blood",
//             genres: [
//                 28,
//                 53
//             ],
//             title: "Rambo: Last Blood",
//             vote_average: 6.1,
//             overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
//             release_date: "2019-09-20"
//         },
//     ]
// }
// // 8.2.1
// for ( let i = 0 ; i < a.length ; i ++ ) { console.log(a[i])}
// // 8.2.2 
// console.log(a[0])
// // 8.2.3 
// console.log(`${a[0].original_title}\n${a[0].vote_average}\n${a[0].genres}`)
// // 8.2.4
// for ( let i = 0 ; i < a.length ; i ++ ) {
//     console.log(`${a[i].original_title}\n${a[i].vote_average}`) }
// // 8.3

// let a = prompt("Bạn thích thể loại phim nào??");
// if (a==="a") {"Tương tự các bài đã làm"}

// // 8.4

// let b =Number(prompt("Tỉ lệ đánh giá tối thiểu bạn muốn"));
// for ( let i = 0 ; i < a.length ; i ++ ) {
// if (b>vote_average) {
// console.log(a[i].original_title)
// }}