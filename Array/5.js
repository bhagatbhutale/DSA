let arr = [1, 2, 3, 4]

// Brute Force technique...

// let ansArr = new Array(arr.length).fill(0)

// for(let i = 0; i< arr.length; i++) {
//     for(let j = 0; j <= i; j++) {
//         ansArr[i] = ansArr[i] + arr[j]
//     }
// }
// // TC --> O(n*2)
// console.log(ansArr);

// ----------------------------------

// TC : O(n)
let ansArr = new Array(arr.length)

ansArr[0] = arr[0];

for(let i = 1; i < arr.length; i++){
    ansArr[i] = arr[i-1] + arr[i]
}

console.log(ansArr)