const items = ['item1','item2','item3'];
const sets = new Set();
sets.add(1);
sets.add(2);
sets.add(3);
sets.add(['item1','item2','item3']);
sets.add(['item1','item2','item3']);
// if(sets.has(3))
//     {
//         console.log("It has 3");
//     }


// for(ele of sets)
//     {
//         console.log(ele);
//     }

// console.log(sets);

// extracting the unique value of array
const arr2 = [1,1,2,2,3,3,4,5,6,7,88,9,9];
const unique_elements = new Set(arr2);
console.log(unique_elements);