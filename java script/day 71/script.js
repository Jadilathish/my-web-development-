document.querySelector(".container")
{/* <div class=​"container">​…​</div>​ */}
document.querySelector(".container").innerHTML
'\n<div class="box">i am box</div>\n<div class="box">i am box</div>\n    '
document.querySelector(".container").innerText
'i am box\ni am box'
document.querySelector(".box").innerHTML
'i am box'
document.querySelector(".box").innerText
'i am box'
document.querySelector(".container")
{/* <div class=​"container">​…​</div>​ */}
document.querySelector(".container").outerHTML
'<div class="container">\n<div class="box">i am box</div>\n        <div class="box">i am box</div>\n    </div>'
document.querySelector(".container").outerText
'i am box\ni am box'
document.querySelector(".container").nodeName
'DIV'
document.querySelector(".container").tagName
'DIV'
document.querySelector(".container").textContent
'\n        i am box\n        i am box\n    '
document.querySelector(".container").hidden=true
true
document.querySelector(".container").hasAttribute("style")
false
document.querySelector(".box").hasAttribute("style")
true
document.querySelector(".box").getAttribute("style")
'display: flex;'
document.querySelector(".box").setAttribute("style","display=inline")
undefined
document.querySelector(".box").removeAttribute("style","display=inline")
undefined
document.querySelector(".box").removeAttribute("style","display=inline")
undefined
document.querySelector(".container").hidden=false
false
document.querySelector(".box").innerHTML="i am iron man"
document.querySelector(".box").innerHTML="i am iron man";
'i am iron man'
document.designMode="on"
'on'





let div=document.createElement("div")
undefined
div.innerHTML="i have been inserter<b>by harry</b>"
'i have been inserter<b>by harry</b>'
div.setAttribute("class","created")
undefined
document.querySelector(".container")
{/* <div class=​"container">​…​</div>​ */}
document.querySelector(".container").before("div")
document.querySelector(".container").before(div)
undefined
document.querySelector(".container").after(div)
undefined







﻿
let cont=document.querySelector(".container")
undefined
cont.insertAdjacentHTML("beforebegin","haha mad       ")
cont.insertAdjacentHTML("beforebegin","")
undefined
cont.insertAdjacentHTML("afterbegin","")
undefined
cont.insertAdjacentHTML("afterbegin","i am good")






// document.querySelector(".box").remove()
// undefined
// document.querySelector(".container").classList
// DOMTokenList ['container', value: 'container']
// document.querySelector(".container").classList.add("latish")
// undefined
// document.querySelector(".container").classList
// DOMTokenList(2) ['container', 'latish', value: 'container latish']
// document.querySelector(".container").classList.remove("latish")
// undefined
// document.querySelector(".container").classList
// DOMTokenList ['container', value: 'container']

// document.querySelector(".container").classList.toggle("red")
false


