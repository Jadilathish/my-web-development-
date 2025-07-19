console.log("promice")
let p1=new Promise((resolve, reject) => {
    let a=Math.random();
    if (a<0.5) {
        console.log(a)
        reject("no random element allowed")
        
    } else {
        setTimeout(()=>{
            console.log("fine")
            resolve("successfully completed");
        })
    }
})
let p2=new Promise((resolve, reject) => {
    let a=Math.random();
    if (a<0.5) {
        console.log(a)
        reject("no random element allowed")
        
    } else {
        setTimeout(()=>{
            console.log("fine")
            resolve("successfully completed");
        })
    }
})
let p3=Promise.race([p1,p2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
})