// function loadscript(source,callback) {
//     let script=document.createElement('script');
//     script.src=source
//     script.onload=()=>callback(script)
//     document.head.append(script)

// }
// loadscript("https://www.prisma.io/docs/orm/reference/connection-urls",(script)=>{
//     console.log("lathish")
//     alert("haa")
//     alert(script.src)
// })


// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback(); // Executes the callback function
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);
const callback=(arg,fn)=>{
    console.log(arg)//this is for one function you can also use multiple function in a single function
    fn()
}
const fn=()=>{
    console.log("nothing")
}

const loadscript=(src,callback)=>{
    let sc=document.createElement("script")
    sc.src=src;
    sc.onload=callback("harry",fn);
    document.head.append(sc)
}
loadscript("https://www.prisma.io/docs/orm/reference/connection-urls",callback)


// console.log("i am iron man 1")
// console.log("i am iron man 2")
// setTimeout(()=>{
//     console.log("i am stave roges")
// },1000)
// console.log("bye")
