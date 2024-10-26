// sort
const product=[
    {pro:"MOBILE", amt: 200000},
    {pro:"TV", amt:1000000},
    {pro:"FRIDGE",amt:5200000000}
];
product.sort((a,b)=>a.amt-b.amt);
console.log(product);