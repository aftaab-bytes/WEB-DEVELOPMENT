let obj={
    key1:"value1",
    key2:"value2",
    key3:"vlaue3"
};
let obj1={
    key1:"value4",
    key2:"value5",
    key3:"vlaue6"
};
//to make clone
let clone={ ...obj1};
//note here the keys are same of both the objects so the object which is lastly spreaded has the existence of its variables in it


let merged_obj={...obj1,key87:'value87'};//adding key

let obj_arr={...["item1",'item2']}

// console.log(obj_arr);

let obj_str ={..."asdf"};


console.log('Clone of obj1 :',clone,'\nMerged Object : ',merged_obj,'\nObj_arr : ',obj_arr,'\nObj_str : ',obj_str);