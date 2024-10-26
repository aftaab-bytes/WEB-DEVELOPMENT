//destruction of nested objects
let nesobj=[
    {name:'Aftaab',age:18,work:'student'},
    {name:"AQUIB",age:18,work:"Web-Developer"},
    {name:'Intesar',age:18,work:'Photo-grapher'}];
for(fr of nesobj)
    {
        console.log(fr);//iterates all the objects in the array
    }
//destruction of objects in the array
let [st1,st2,st3]=nesobj;
console.log(st1,st2);
//destruction of the keys of the objects in the array
let [{name},{work},{age:var1}]=nesobj;
console.log(name,work,var1);
//here first the objects gets assigned then the keys of the object are accessed