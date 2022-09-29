// Merging two arrays using while loop (only works with sorted arrays of same size)
let array1 = [3, 87, 50, 65, 9];
let array2 = [8, 7, 10, 15, 90, 100, 551];
let array3 = [];

//sorting both arrays
array1.sort((a, b) => {
    return a - b;
});

array2.sort((a, b) => {
    return a - b;
});

console.log("sorted array Array1:", array1);
console.log("sorted array Array2:", array2);

let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1 < array1.length && a2 < array2.length) {
    if (array1[a1] < array2[a2]) {
        array3[a3] = array1[a1];
        a1++;
    } else {
        array3[a3] = array2[a2];
        a2++
    }
    a3++
}
console.log("mergerd array without last two values: ", array3); // here the last two values are not pushed because the array is not of same size.



// used one more while loop to push the last two remaining values from array2
while (a2 < array2.length) {
    array3[a3] = array2[a2];
    a2++;
    a3++;
}

console.log("mergerd array with last two values: ", array3);