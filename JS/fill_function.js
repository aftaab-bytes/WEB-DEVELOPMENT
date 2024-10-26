const n = [1,2,3,5,8,9,4,4];
console.log(`ORIGINAL ARRAY: ${n}`);
let a = n.fill(-1);
console.log(`ARRAY FILLED WITH '-1': ${a}`);
a=n.fill(0,2,5);
console.log(`ARRAY FILLED WITH 0 FROM 3 TO 5 INDEX ${a}`);