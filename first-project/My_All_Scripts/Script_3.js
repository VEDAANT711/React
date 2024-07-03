let a ;
console.log(a)
console.log(12+a)

if({}){
    console.log('hello')
}
else{
    console.log('bye')
}


//&&//

let a1 ="" && 7
console.log(a1)


let a2 = 8 === 8 && 7
console.log(a2)

let a11 = 0
let a21 = 42
let b13 = null
let b14 = 'hello'

console.log(a11 && a21)
console.log(b13 && b14)
console.log(a11 && b14)
console.log(a21 && b13)

// || //


let b15 = null 
let b16 = 7 != 7
let f = b15 || b16
console.log(f)

b15b = "A"
let f12 = b15b || b16
console.log(f)

let h1 = false
let h2 = 10 === '10'
let r =  false || h2
console.log(r)

let j = 9 > 11
let k = undefined
let jk = k || j


// Coalese

console.log(null ?? "hello")
console.log(0 && "hello")
console.log(null ??'hello')


console.log(7 === 7 && 8 === 8)
console.log(6 != 6 && "6")
console.log(6 != 6 || "6")
console.log(8 === 5 ?? "6")
console.log( undefined ?? "6")


//optional operator//
let i = {
    fn:"ved",
    ln:"007",
    info:{
        weight:"80kgs",
        height:"5'11"
    }
}
console.log(i?.inf?.height)
console.log(i?.info?.height)

