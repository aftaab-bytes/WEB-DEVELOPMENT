// let num=[1,2,3,4,5,6];
// const square=function(num)
// {
//     return num*num;
// }
// const sq_arr= num.map(square);
// console.log(sq_arr);
let num=[1,2,3,4,5,6];
const sq_arr=num.map((numbers,index)=>{
    return numbers*numbers;
})
console.log(sq_arr);