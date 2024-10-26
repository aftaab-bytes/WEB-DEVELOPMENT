const myArray = ["HELLO",'CAT','DOG','DFD']
const ans=myArray.find((str)=>str.length === 3)
console.log(ans)
// function isLength3(str)
// {
//     return str.length ===3;
// }
// console.log(isLength3('hat'));
//application
const pro = [
    {pro:'mobile',amt:4000},
    {pro:'mobile',amt:3000},
    {pro:'mobile',amt:40500},
    {pro:'mobile',amt:40000}
]
console.log(pro.find((a)=>a.amt>=30000))