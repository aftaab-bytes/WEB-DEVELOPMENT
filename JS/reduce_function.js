// Example 01
// const num=[1,2,3,4,55];
// const sum =num.reduce((accumulator, currentValue)=>{
//     console.log(`Accumulator: ${accumulator} CurrentValue: ${curr}`);
// return accumulator+currentValue
// });
// console.log(sum);
const usercart =[
    {productId: 1,pro:"mobile",amt: 50000},
    {productId: 2,pro: "TV",amt : 1000000},
    {productId: 3,pro: "mobile2",amt : 40000}
]
const totalprice = usercart.reduce((totalprice,usercart2)=>{
    console.log(totalprice);    
    return totalprice+usercart2.amt;
},0)
console.log(totalprice);