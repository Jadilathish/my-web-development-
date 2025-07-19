// let a=document.getElementsByClassName("box")
// a[0].style.backgroundColor="blue";
// a[1].style.backgroundColor="red";
// a[2].style.backgroundColor="yellow";
// a[3].style.backgroundColor="green";
// a[4].style.backgroundColor="pink";

let a=document.getElementsByClassName("box");
// let a=document.querySelector(".container").children
function getRandomcolors() {
    let b=Math.ceil(0+Math.random()*256);
    let c=Math.ceil(0+Math.random()*256);
    let d=Math.ceil(0+Math.random()*256);
    return `rgb(${b},${c},${d})`
}
Array.from(a).forEach(e=>{
    e.style.backgroundColor=getRandomcolors()
    e.style.color=getRandomcolors()
})





