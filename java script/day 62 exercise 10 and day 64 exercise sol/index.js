// // function generator(adjactive,shop_name,another_word) {
// //     return adjactive.concat(shop_name,another_word)
    
// // }
// // let result=generator("crazy","Amazing","bros")
// // console.log(result)

// let tand=Math.random()
// let first,second,third;
// if (tand<0.3) {
//     first="crazy"
    
// }
// else if (tand<0.66 && tand>0.3) {
//     first="Amazing"
    
// } else {
//     first="Fire"
    
// }
// tand=Math.random()
// if (tand<0.3) {
// second="Engine"    
// }
// else if (tand<0.66 && tand>0.3) {
//     second="Foods"
    
// } else {
//     second="Garments"
    
// }
// tand=Math.random()
// if (tand<0.3) {
// third="bros"    }
//     else if (tand<0.66 && tand>0.3) {
// third="Limited"        
//     } else {
// third="Hub"        
//     }
// console.log(`${first} ${second} ${third}`)
let obj1={
1:"Crazy",
2:"Fire",
3:"Engine"
}
let obj2={
    1:"food",
    2:"good",
    3:"Tastu"
}
let obj3={
        1:"Bros",
        2:"come",
        3:"hai" ,
}
let a=Math.floor(Math.random()*3)+1
let b=Math.floor(Math.random()*3)+1
let c=Math.floor(Math.random()*3)+1
console.log(`${obj1[a]} ${obj2[b]} ${obj3[c]}`)
console.log(`${obj1[a]} ${obj2[b]} ${obj3[c]}`)
