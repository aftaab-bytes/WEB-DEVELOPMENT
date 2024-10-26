// compile time initialisation
// const person = new Map([['firstname', 'Mohammed'], ['age',18]],[[1,2,3],'array']);
// console.log(person);

const person = new Map();


person.set('FIRSTNAME','Mohammed');
person.set('Age',18);
person.set(1,'sleeping');
person.set([1,0,2],'array');



// REAL LIFE EXAMPLE
const people= {
    'ID':45,
    'NAME':'Mohammed'
}
const Info = new Map()
Info.set(people,{age:18,gender:'male'});
console.log(Info.get(people).age);

// accesing by destruction of entries
// for([key,value] of person)
//     {
//         console.log(key,value);
//     }


// // accessing whole entry in map
// for(let entry of person)
//     {
//         console.log(entry);
//     }
// accessing the values of keys
// for(keys of person.keys())
//     {
//         console.log(`Key: ${keys} Element: ${person.get(keys)}`)
//     }


// for of loop in map
// for (let key of person.keys())
//     {
//         console.log(`Key: ${key} Type: ${typeof key}`);
//     }
