// Find Max and Min element in array

const arr = [2, 6, 7, 1, 2];

let max = arr[0]
let min = arr[0]

for(let i = 0; i<arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }

    if(arr[i] < min) {
        min = arr[i]
    }
}

console.log("Maximum Element : " , max);
console.log("Minimum Element : ", min)