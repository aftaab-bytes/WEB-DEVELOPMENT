function func1(a,b)
{
    return a+b;
}
function func2(callback)
{
    console.log(callback(4,3));
    console.log(callback);
}
func2(func1);