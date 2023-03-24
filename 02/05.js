// Array
let arr = ["Harry", "Ron", "Snap"];

// JS for loop
console.log('[for loop]');
for(let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// forEach
console.log("[forEach]");
arr.forEach((person, idx) =>{
  console.log(idx, person);
});