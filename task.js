// 1-task

// function waiting(second) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, second * 1000)
//     });
// }

// async function choyTayyorlash() {
//     console.log("suv qaynamoqda...");
//     await waiting(3);
//     console.log("suv qaynadi! uni damlang");
//     await waiting(3);
//     console.log("choy tayyor boldi!")
// }
// choyTayyorlash();


//                                                   2-task

// function chargingTime(sec) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, sec * 1000)
//     });
// }
// async function charging() {
//     await chargingTime(2);
//     console.log("zaryadkaga qoyildi")
//     await chargingTime(3);
//     console.log("50% zaryad oldi...")
//     await chargingTime(2);
//     console.log("100% bo‘ldi, zaryaddan olishingiz mumkin!")
// }
// charging();


//                                                   3-task

// function introData(soniya) {
//     return new Promise((resolve)=> {
//         setTimeout(resolve, soniya * 1000)   
//         });
//     }

//     async function tellTheData() {
//         console.log("Serverga murojat qilindi!")
//         await introData(2);
//         console.log("Ma'lumot yuklanmoqda...")
//         await introData(2);
//         const data ={
//             id: 777,
//             name: "Nathan",
//             status: "active",
//         }
//         console.log("Malumot yuklandi:", data)
//         console.log(data.name, "Xush kelibsiz janob")
//     }
//     tellTheData();

//                                                     4-task

// try{
//     let b = c + 5;
//     console.log(b);
//     } catch(error) {
//         console.log("Xatolik yuz berdi:", error.message)
//     }

//                                                     5-task

// function getUsers() {
//    return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, name: "Ali", age: 25, city: "Tashkent" },
//         { id: 2, name: "Doston", age: 30, city: "Samarkand" },
//         { id: 3, name: "Boburbek", age: 22, city: "Busan" },
//         { id: 4, name: "Laylo", age: 28, city: "Fergana" },
//         { id: 5, name: "nodir", age: 27, city: "Bukhara" },
//       ]);
//     }, 1000);
//   });
// }
// async function getData() {
//     try {
//         console.log("foydalanuvchi malumotlari olinmoqda...")
//         const users = await getUsers();
//         const user = users.find(nameof => nameof.name === "Boburbek");
//         if(user) {
//             console.log("Foydalanuvchi topildi", user.name)
//         } else {
//             console.log("Foynadalanuchi topilmadi")
//         }
//     } catch (error) {
//         console.log("Xatolik yuz berdi:", error.message);
//     }
// }
// getData();

//                                                          6-task

// Tasodifiy son yaratish
// function randomNumber() {
//     return Math.floor(Math.random() * 10)
// }

// // promise yaratish
// const checkJuftnum = new Promise((resolve, reject) => {
//     const number = randomNumber()
//     console.log("Tasodifiy son", number)
//     if (number % 2 === 0) {
//         resolve(number);
//     } else {
//         reject(number)
//     }
// });

// checkJuftnum
// .then((num) => {
//     console.log("juft son",num)
// })
// .catch((num) => {
//     console.log("toq son", num)
// })
// randomNumber();

//                                                     7-task

// function getUser(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success){
//                 resolve({id:1, name:"Nathan", status: "active"})
//             } else {
//                 reject("Malumot topilmadi");
//             }
//         }, 1000);
//     })
// }
// async function showUser(success) {
//     try {
//     const user = await getUser(success);
//     console.log("Malumot muvaffaqiyatli yuklandi", user)
//     console.log(user.name, "Hush kelibsiz")
//     }
//     catch (error) {
//         console.log("Malumot yuklanmadi", error)
//     }
// }
// showUser(true);

//                                                  8-task

// function boiling(vaqt){
//     return new Promise((resolve) => {
//         setTimeout(resolve, vaqt * 1000)    
//         });
    // }

    // async function nonTayyorlash() {
    //     console.log("Non tayyorlanmoqda...")
    //     await boiling(2);
    //     console.log("Tuxum qovurilmoqda ...")
    //     await boiling(2);
    //     console.log("Nonushta tayyor marhamat, Yoqimli ishtaha")       
    // }
    // nonTayyorlash();

//                                                   9-task

// async function makingBreakfast(tuxumBormi) {
//     console.log("Non tayyorlanmoqda...")
//     await boiling(2);
//     if(tuxumBormi){
//         console.log("Tuxum qovurilyapti...")
//     } else {
//         console.log("Murobbo tayyorlanyapti...")
//     }
//     await boiling(2);
//     console.log("Nonushta tayyor!")
// }
// makingBreakfast(true);
// makingBreakfast(false);