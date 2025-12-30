// MIT task
 
function countLetter(e, engineer) {
let count = 0
for (let letter of engineer){
    if(letter  === e) {
    count++;
}
}
    return count
}
console.log(countLetter("e", "engineer"));


function countCharacter(a, mexanizatsiyalashtirmayotganinggizdarda) {
    count = 0;
    for(let char of mexanizatsiyalashtirmayotganinggizdarda) {
        if(char === a) {
            count++;
    }
}
    return count
}
console.log(countCharacter("a", "mexanizatsiyalashtirmayotganinggizdarda"));






// console.log("Jack Maa's quotes");
// const list = [
//     "Be a good students!", 
//     "Follow the right leader!",
//     "Work for yourself!",
//     "Do what you good at!",
//     "Invest to young generation!",
//     "Take a rest!",
// ];

// function givingAdvice(a, callback) {
//     if (typeof a !== 'number') callback("Input should be a number", advise);
//     else if (a <= 20) callback(advise, list[0]);
//     else if (a > 20 && a <= 30) callback(advise, list[1]);
//     else if (a > 30 && a <= 40) callback(advise, list[2]);
//     else if (a > 40 && a <= 50) callback(advise, list[3]);
//     else if (a > 50 && a <= 60) callback(advise, list[4]);
// else {
    
//     setTimeout(function(){
//         callback(null, list[5]);
//     }, 5000);
// }
// };

// console.log("Before seen");
// givingAdvice(65, (err, data) => {
//     if (err) 
//         console.log("Error:", err);
//     else 
//         console.log("Response:", data);
// });
// console.log("After seen");

// async function givingAdvice(a) {
//     if(typeof a !== 'number') throw new Error("Input should be number");
//       else if(a <= 20) return list[0];
//       else if(a > 20 && a <= 30) return list[1];
//       else if(a > 30 && a <= 40) return list[2];
//       else if(a > 40 && a <= 50) return list[3];
//       else if(a > 50 && a <= 60) return list[4];
//       else {
//            return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//        });
//     }
//     }

    // then, catch
    // console.log("Before seen");
    //   givingAdvice(19)
    //    .then((data) => {
    //     console.log("Response:", data)
    //   })
    //    .catch((err) => {
    //     console.log("Error:", err)
    //   });
    //   console.log("After seen");


    // async & await
    // async function run() {
    //     let advise = await givingAdvice(23)
    //     console.log(advise);
    //     advise = await givingAdvice(65)
    //     console.log(advise)
    //     advise = await givingAdvice(44)
    //     console.log(advise)
    // };
    // run();