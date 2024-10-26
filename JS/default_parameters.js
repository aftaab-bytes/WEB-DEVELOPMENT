//  old method
//  function func(a,b)
// {
//     if( typeof b === "undefined")
//     {
//         b=0;
//     }
//     return a+b;
// }
// new method of default parameters
function func(a,b=2)
{
    return a+b;
}
console.log(func(45));