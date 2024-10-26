const person= {
    name:'Mohammed Aftaab Khimani',
    age:18
    ,func:function(){
        console.log(`person name is ${this. name}`);
    }
}
console.log(person.func);
person.func();