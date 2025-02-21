// Iterating a Array 

let arr1 = [10,20, 30, 40, 50]

for(let i = 0; i< arr1.length; i++) {
    console.log(arr1[i])
}

console.log("Higher order function down")
arr1.forEach((item) => console.log(item))