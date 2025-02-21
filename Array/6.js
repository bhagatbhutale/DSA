
const arr = [1, 2, 3, 4];
const ansArr = new Array(arr.length);

ansArr[0] = arr[0];

for (let i = 1; i < arr.length; i++) {
  ansArr[i] = arr[i-1] + arr[i];
}

console.log(ansArr);
