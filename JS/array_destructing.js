//array_destructing.js
let num=[5,1,2,444,6,6,4,8,2,44];
let [myarr1,asdf,f,g, ...NEWARR]=num;
console.log(myarr1,asdf,f,g);
console.log(NEWARR)