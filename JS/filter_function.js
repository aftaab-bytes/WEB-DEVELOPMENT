const num = [1,2,3,55,6,,8,88];
// const condition = function(number){
//     return number%2!=0;
// }
// const filtered_array= num.filter(condition);
// console.log(filtered_array);
const filtered_array=num.filter((num)=>{
    return num%2!=0;
})
console.log(filtered_array);