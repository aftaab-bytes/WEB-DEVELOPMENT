// normal function
function write(num1,num2=5)
{
    return num1+num2;
}
console.log(write(1));
let hello = function()
{
    console.log("Hello world");
}
hello();
//this is as arrow function
let even= number => number %2==0
let add = (var1,var2)=>var1+var2;
console.log(add(4,110));
