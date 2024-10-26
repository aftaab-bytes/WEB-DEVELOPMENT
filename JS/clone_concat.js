let arr=[1,2,3,5,4,5]
// let arr1=arr.slice(0);
// let arr1=[].concat(arr);
// spread operator
// let arr=[...'123456789']
// console.log(arr);
let arr1=[...arr].concat([1,2]);
console.log(arr1);