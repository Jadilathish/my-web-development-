let a=Math.random()
console.log(a)
let b=prompt("enter the first nmber:")
let c=prompt("enter the operator")
let d=prompt("enter the second number")
obj={
    '+':'-',
    '-':'+',
    '*':'/',
    '/':'**'
}
if (a>0.5) {
    console.log(`the sum is ${b} ${c} ${d}`)
    alert(`the function ${eval(`${b} ${c} ${d}`)}`)
}
else{
    c=obj[c]
    alert(`the function ${eval(`${b} ${c} ${d}`)}`)

}