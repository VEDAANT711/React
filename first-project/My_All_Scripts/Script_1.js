let names = ["ved","sid","rock","kane"]
console.log(names)

let [n1,n2,n3,n4] = names
console.log(n1,n2,n3,n4)

let q1 = names[0]
let q2 = names[1]
let q3 = names[2]
let q4 = names[3]
console.log(q1,q2,q3,q4)

let info ={
    fn : "ved",
    ln : "007",
    age: "23"
}
let f = info.fn
let l = info.ln
let a = info.age
console.log(f,l,a)

let {fn:fn1,ln:ln1,age:age1} = info
console.log(fn1,ln1,age1)

//SPREAD OPERATOR//

let skills = ["Javascript","SQL","Python","React"]
let skills1 = [...skills,"PowerBi"]
console.log(skills,skills1)

//REST OPERATOR WTH ARRY//

let game = ["valo","bgmi","csgo2","gta6"]
let [csgo2,...arr] = game
console.log(csgo2,arr)

let n = [234,887,556]
function add(a,b,c){
    console.log(a+b+c)
}
add(...n)

function addall(...arr){
    console.log(arr)
    return arr.reduce (function(acc,el){
        return acc + el
    },0)
}
let q7 = addall(12,33,44,55,66,77,33,44,55,66,77)
console.log(q7)




let infoE = {
    firstName:"vedu",
    lastName:"007",
    city:"Delhi"    
}


let infoB = {infoE,"age":23}
console.log(infoB)

//SPREAD OPERATOR WITH OBJ//

let infoC  = {...infoE,"age":24}
console.log(infoC)

//REST OPERATOR WITH OBJ//

let {lastName,...infoD} = infoE
console.log(lastName,infoD)
console.log(infoD)

//TEMPLATE LITERALS//

let FN = "VEDU"
let LN = "DON"
console.log(`MY FirstName is ${FN} & My LastName is ${LN}`)

let H = 'HUHAAHUHAA'
console.log(`Ghacha Chaghacchar Ghaccchar ${H}`)


let A = 20,B = 19
A>B ? console.log("A is BADA"):console.log('B is BADA')

console.log(`${1+19}`)











