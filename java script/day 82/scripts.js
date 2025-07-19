// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45);
//         }, 2000);
//     })
// }
// // let a = await sleep()
// // console.log(a)
// // let b = await sleep()// not work because await work only inside of async not outside
// // console.log(b)
//     (async function main(params) {
//         let a = await sleep()
//         console.log(a)
//         let b = await sleep()
//         console.log(b)

//     })()//imp


// let [a,b,...rest]=[1,2,3,4,5,6,7,8,8]
// console.log(a,b,rest)
//...rest make all group all numbers
// let [a,b,rest]=[1,2,3,4,5,6,7,8,8]
// console.log(a,b,rest)
//rest is another a variable store one number


// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// let {a,b}=obj
// console.log(a,b)


//spread

// function sum(a,b,c) {
//     return a+b+c
// }
// let arr=[1,5,6]
// console.log(arr[0]+arr[1]+arr[2])
// console.log(sum(arr[0],arr[1],arr[2]))
// console.log(sum(...arr))

let a="ha",b="lathish"
let c={a,b}
console.log(c)