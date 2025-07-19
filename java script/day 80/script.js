// class person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
// }
// let p1=new person("lathish",20)
// console.log(p1)


// methods in class

// class person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     greet() {
//         return `the name is ${this.name} and his age is ${this.age}`

//     }
// }
// let p1=new person("lathish",40)
// console.log(p1);
// console.log(p1.greet());
// console.log(p1.name);
// console.log(p1["age"]);
// p1.name="bhathi";
// p1["age"]=33;
// console.log(p1);
// delete p1.age;
// console.log(p1);


// function person(name,age) {
//     this.name=name;
//     this.age=age;
//     this.greet=function() {
//         return `the name is ${this.name} and his age is ${this.age}`
        
//     }
// }
// let p1=new person("lathish",20)
// console.log(p1)
// console.log(p1.greet())


// static methiod


// class addition {
//     static add(a,b){
//         return a+b;
//     }
// }
// console.log(addition.add(1,2))


// encapulation

// function person(name,age) {
//         this.privatename=name;
//         this.age=age;
//         this.greet=function() {
//             return this.privatename;
//         }
//     }
//     let p1=new person("lathish",20)
//     console.log(p1.name)
//     console.log(p1.age)
//     console.log(p1.greet())


// class animal {
//     constructor(name,breed) {
//         this.name=name;
//         this.breed=breed;
        
//     }
//     show(){
//         return `the animal name${this.name}and its breed ${this.breed}`
//     }
    
// }
// class monkey extends animal {
//     m1(){
//         return "i am monkey"
//     }
// }
// let m=new  monkey("bhrath","kondamuchu")
// console.log(m.show())
// console.log(m.m1())


// class shape {
//     constructor(name) {
//         this.name=name;
        
//     }
//     show(){
//         console.log(`the name is ${this.name}`)
//     }
// }
// class circle extends shape
// {
//     show(){
//         console.log(`the name is circle`)
//     }

// }
// class square extends shape{
//     show(){
//         console.log(`the name is square`)
//     }
// }
// let a=new shape("shape");
// let b=new circle();
// let c=new square();
// a.show()
// b.show()
// c.show()
   

//super

class animal {
        constructor(name,breed) {
            this.name=name;
            this.breed=breed;
            
        }
        show(){
            return `the animal name${this.name}and its breed ${this.breed} ${this.age}`
        }
        
    }
    class monkey extends animal {
        constructor(name,breed,age)
        {
            super(name,breed);
            this.age=age
        }
        m1(){
            const showMessage = super.show();
        console.log(showMessage);
            console.log("hi",this.age)
        }
    }
    let m=new  monkey("bhrath","kondamuchu",20)
    // console.log(m.show())
    console.log(m.m1())