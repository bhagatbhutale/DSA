// Linear Search 

let arr = [10, 14, 3, 16, 33];
let target = 16;
let length = arr.length

let result = linearSearch(arr, target)

function linearSearch(arr, target ) {
    for(let i = 0; i<length; i++ ) {
        if(arr[i] === target) {
            return `Element present at index ${i}`
           break
        }
    }
    return "Not Found"
}
console.log(result)

