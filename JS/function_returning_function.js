function func1()
{
    function hello()
    {
        console.log("Hello World");
    }
    return hello;
}
let ans=func1();
console.log("Funcion in ans :-",ans);
console.log("\"ans\" Called as function");
ans();