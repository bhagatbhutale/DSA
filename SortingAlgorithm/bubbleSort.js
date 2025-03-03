// Bubble Sort 

const arr = [6, 0, 3, 5, 7]

let n = arr.length;
let temp;

function bubbleSort(arr, n) {
    for (let i = 0; i < n; i++) {
      let swaped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swaped = true;
        }
      }

      if (swaped == false) {
        break;
      }
    }
}

bubbleSort(arr, n)
console.log(arr);