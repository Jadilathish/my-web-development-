// async function getdata(params) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }
async function getdata() {
//    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// //    let data=await x.json()
//    let data=await x.text()
//    console.log(data)

let x=await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userld:1,
    }),
    headers:{
        'Content-type':'application/json;charset=UTF-8',
    },


}

)
let data=await x.text()
return data
 
}
// console.log("data is comming")
// console.log("almosst ther")
// console.log("loading data")
// let data=getdata()
async function main() {
    console.log("data is comming")
    console.log("almosst ther")
    console.log("loading data")
    let data =await getdata()
    console.log(data)
    console.log("processing data")
    console.log("task data")

}
main()


//            or

// data.then((v)=>{

//     console.log(data)
//     console.log("processing data")
//     console.log("task data")
// })

