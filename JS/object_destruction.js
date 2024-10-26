// object destruction
const person={
    name:"aftaab",
    age:18,
    work:"student",
    hobbie1:"sleeping",
    hobbie2:"eating"
};
const {name,work,age:var1 ,...rest}=person;
//changing the name
// let {age:var1}=person;
console.log(name,work,var1);
console.log(rest);//stores the remaining element in rest as an object