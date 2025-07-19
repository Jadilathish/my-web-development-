let a=prompt("enter the first num")
let b=prompt("enter the second number")
// let sum=a+b//these are strings so you get 8+1 as 81
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("bai nuvu tappu chasav");
    
    
}
    let sum=parseInt(a)+parseInt(b)//this provide you the original 8+1 is 9
    // console.log("the sum is",sum)
    // what if we enter a string like lathish+yasu the console provide you Nanite is not good so for that we ue custom error
    //there are
    function main() {
        
        let x=2;
        try {
            console.log("the sum is",sum*x)
            return  console.log("true")
            
        } catch (error) {
            console.log("babu x ladu amma yakadnchi thachav")
            return  console.log("false") 
            
        }
        // console.log("successfully completed")//not work
        finally{
            console.log("sucessifally executed")
        }
    }
    main()
