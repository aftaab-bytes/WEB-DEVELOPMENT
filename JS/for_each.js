let num=[1,2,3,4,5]
function square(a,index)
{
    console.log("index",index,"Square:",a*a);
}
num.forEach(square);
num.forEach((element,index) => {
    console.log(index,element);
});