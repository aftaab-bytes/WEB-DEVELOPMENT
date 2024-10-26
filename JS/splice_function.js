const arr =['item1','item2','item3'];
console.log("Original Array:",arr);
const del = arr.splice(0,2,"inserted1",'inserted2');
console.log("Array after deletion and insertion:",arr);
console.log("Deleted items:",del);