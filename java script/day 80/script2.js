let obj={
    a:1,
    b:"lathish"
}
console.log(obj)

// // let animal={
// //     eats:true
// // };
// // let rabbit={
// //     jumps:true
// // };
// // rabbit.__proto__=animal;

// class animal {
//     constructor(name) {
//         this.name=name
//         console.log("obj is created")
//     }
//     eats(){
//         console.log("tintunna")

//     }
//     jumps(){
//         console.log("yaguruthanna")
//     }
// }
// class ranbir extends animal{
//     constructor(name){
//         super(name);
//         console.log("i am ranbir capoor")
//     }
//     eats(){
//         super.eats()
//         console.log("adi chapundi gadida")
//     }
  
// }
// let a=new animal("balakrishna")
// console.log(a)

// let l=new ranbir("lathish")
// console.log(l)
// l.eats()
// l.jumps()
// console.log(l instanceof ranbir)
// console.log(l instanceof animal)
// console.log(a instanceof animal)
// console.log(a instanceof ranbir)


// getters and setters


// class User {
//     constructor(name) {
//         this._name=name;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(value){
//         if (value.length<4) {
//             console.log("name is short")
//             return;
//         }
//         this._name=value;
//     }
    
// }

// let u=new User("john");
// console.log(u.name)
// u.name="gg"
// console.log(u.name)

