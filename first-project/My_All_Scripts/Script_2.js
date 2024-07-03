
let a = 480
let b = 233

if (a > b) {
    console.log("a is greater")
}
else {
    console.log("b is greater")
}
a > b ? console.log("a is greater") : console.log("b is greater")



function additionA(x, y) {
    return x + y
}
additionA(12, 3)


let additionB = function (x, y) {
    return x + y
}

// arrow funcion //

let additionC = (x, y) => {
    return x + y
}
let additionD = (x, y) => x + y


let numbers = [11, 22, 33, 44, 55, 66, 77]
console.log(numbers.map(el => el + 10))


// this keyword 

var firstName = "ved"
var lastName = "007"

let info5 = {
    firstName: "vedu",
    lastName: "7066",
    displayName: function () {
        // this  ====> info
        console.log(this.firstName + this.lastName)
        let displayName2 = function () {
            // this ==>  window
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info5.displayName()


let info8 = {
    firstName: "chulbul",
    lastName: "pande",
    displayName: function () {
        // this  ====> info
        console.log(this.firstName + this.lastName)
        let displayName2 = () => {
            // this ==>  info
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info8.displayName()

let info0 = {
    firstName: "minskole",
    lastName: "nagpur",
    displayName: () => {
        // this -----> GLobal
        console.log(this.firstName + this.lastName)
        let displayName2 = () => {
            // this -----> GLobal
            console.log(this.firstName + this.lastName)
        }
        displayName2()
    }
}

info0.displayName()
