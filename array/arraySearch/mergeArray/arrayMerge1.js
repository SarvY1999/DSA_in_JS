console.log("array merge");
let data = [10, 20, 30, 40];
let data2 = [50, 60, 70, 80, 90, 100];

// Solution
let merge = [];

for (let i = 0; i < data.length; i++) {
    merge[i] = data[i]  // Copy the first array.
}

for (let i = 0; i < data2.length; i++) {
    merge[data.length + i] = data2[i]  // insert the second array.
}

console.log("Merged Array", merge);

//Note: above solution can be achieved by using spread operator
console.log("spread operator", [...data, ...data2]);