let arr = [1,2,3,4,5]; 
// push method
arr.push(6); 
console.log("push val to array: ", arr); 

// pop method
arr.pop(); 
console.log("push val to array: ", arr); 

// shift method
arr.shift(); 
console.log("shift val from array: ", arr); 

// unshift method
arr.unshift(1); 
console.log("unshift val to array: ", arr); 

// length
console.log("length of array: ", arr.length)

// map method
const arr_map =arr.map((val, index)=> val*index);
console.log("map method: ", arr_map); 

// reduce method  // summ all 
const arr_reduce = arr.reduce((val, sum) => sum += val ,0);
console.log("array reduce method usage: ", arr_reduce)

// filter method  // all even 
const arr_filter = arr.filter(val => val%2== 0);
console.log("array filter method usage: ", arr_filter)

// slice array
const arr_slice = arr.slice(2,4); 
console.log("array slice: ",arr_slice)

// splice array
arr.splice(4,0,6); 
console.log("array splice: ",arr)

// join method
console.log("joinning array: ", arr.join(" "))

// sort array // after splice 
console.log("sorted array: ", arr.sort())