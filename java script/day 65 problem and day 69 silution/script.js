// let a=[1,2,3,4,5,6]
// let b=(a,b)=>{
//     return a*b
// }
// console.log(a.reduce(b))

// let array=prompt("enter the number:")
// let newarray=[]
// for (let index = 0; index < array; index++) {
//     const element = array-index;
//     // console.log(element)
//     newarray.push(element)
// }
// // console.log(newarray)
// let hmm=(a,b)=>{
//     return a*b
// }
// console.log(newarray.reduce(hmm))

// let a=5
// function factorial(number) {
//     let arr=Array.from(Array(number+1).keys())
//     // console.log(arr)
//     let c=arr.slice(1,).reduce((a,b)=>a*b)
//     return c
    
// }
// console.log(factorial(a))
let a=5
function forfun(num) {
    let fac=1
    for (let i = 1; i <= a; i++) {
        fac=fac*i
        
        
    }
    return fac
    
}
console.log(forfun(a))