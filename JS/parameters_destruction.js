//param destructing
// objects and react
function des_Obj({firstname, gender, age})
{
    console.log(firstname,gender,age);
}
let person={
    firstname:"Mohammed Aftaab Khimani",
    gender:'Male',
    age:18
}
des_Obj(person);
function des_Arr([var1,var2]){
    console.log(var1,var2);
}
let arr=[10,20,30,50]
des_Arr(arr);