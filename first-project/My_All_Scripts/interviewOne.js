// let num = [11,22,33,55,11,77,88,33,99]
// console.log(new Set(num))
// console.log(Array.from(new Set(num)))
// let q = [...new Set(num)]
// console.log(q)



// num = [11,22,33,55,11,77,88,33,99,22,11]

// let q = num.filter(function(el,index,arr){
//     return num.indexOf(el) === index
// })
// console.log(q)


//filter function
list = [1, 2, 3, 2, 3, 10, 5, 3, 1, 2, 'php', 'javascript', 'python', 'php', 'ruby', 'python']
// function removeDuplicate(array){
//     return array.filter((el,index) => array.indexOf(el) === index);
// }
// console.log(removeDuplicate(list));


//foreach 

// function removeDuplicate(array){
//     let x={};

//     array.forEach(function(i){
//         if(!x[i]){
//             x[i] = true
//         }
//     });
//     return Object.keys(x);
// }
// console.log(removeDuplicate(list));




let ul = []
let seen = {}

for (let i = 0 ; i < list.length ; i++){
    let item = list[i]
    if(!seen[item]){
        ul.push(item)
        seen[item] = true
    }
}

console.log(ul)


unique = []
for(let i=0 ; i < list.length; i++){
    if(unique.indexOf(list[i])<0){
        unique.push(list[i])
    }
}
console.log(unique)
















