// a=[1,2,3,7,5,6]
// let newarray=[]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newarray.push(element*2)
    
// }
// console.log(newarray)
// a=[1,2,3,7,5,6]
// let b=a.map((e,index,arr)=>{
//     return e*2

// })
// console.log(b)

// let a=[1,22,33,4,5,6]
// let graterthanseven=(e)=>{
//     if (e>7) {
//         return true
//     } else {
//         return false
        
//     }
// }
// console.log(a.filter(graterthanseven))

// let a=[1,2,3,7,5,6]
let a2=[1,9,8,7,6,7]
let v=(a,b)=>{
    return a+b
}
console.log(a2.reduce(v))