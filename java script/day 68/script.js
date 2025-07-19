// let a=document.getElementsByClassName("box")
// console.log(a)
// a[2].style.backgroundColor="red";

// let b=document.getElementById("perment");
// b.style.backgroundColor="yellow"

// let c=document.querySelector(".box");
// c.style.backgroundColor="yellow" 

// let d=document.querySelectorAll(".box");
// for (let i = 0; i < d.length; i++) {
//     d[i].style.backgroundColor="yellow"

    
// }
// let e=document.getElementsByTagName("div")
// for (let i = 0; i < e.length; i++) {
//     e[i].style.backgroundColor="yellow"
// }


// // Retrieve all elements with the name attribute "nothing"
// let f = document.getElementsByName("nothing");

// // Loop through each element in the NodeList
// for (let i = 0; i < f.length; i++) {
//     // Set the background color of each element to yellow
//     f[i].style.backgroundColor = "yellow";
// }



// these are get from consile

let a=document.getElementsByClassName("box")
undefined
a
// HTMLCollection(6) [div.box, div.box, div.box, div#perment.box, div.box, div.box, perment: div#perment.box]
a[3].matches("#perment")
true
a[2].matches("#perment")
false
a[3].closest("container")
null
a[3].closest("#perment")
//<div id=​"perment" class=​"box">​lathish 3​</div>​
a[2].closest("#perment")
null
a[2].closest(".container")
//<div class=​"container">​…​</div>​
document.querySelector(".box").contains(a[2])
false
document.querySelector(".box").contains(a[1])
false
document.querySelector(".box").contains(a[0])
true