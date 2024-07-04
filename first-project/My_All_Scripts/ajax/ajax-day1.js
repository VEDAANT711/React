// function addA(){
//     let a = 10
//     let b = 30
//     if (a == b){
//         console.log("acepted")
//     }
//     else{
//         console.log("bye")
//     }
// }

// addA()

// function addB(){
//     setTimeout(() => {
//         console.log("accepted")
//     },2000);
// }

// addB()


//CallBack Hell


// function a(){
//     setTimeout(() => {
//         console.log("a is diplayed"),
//         setTimeout(() => {
//             console.log("b is displyed"),
//             setTimeout(() => {
//                 console.log("c is diplayed")
//             },1000);
//         },2000);
//     },3000);
// }

// a()



//promises

let pro = new Promise((resolve, reject) => {
    let a = 20
    let b = 20
    if (a == b){
        resolve("Accepted")
    }
    else{
        reject("Declined")
    }

})
pro.
then((str) => {
    console.log(str)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("i will always run")
});