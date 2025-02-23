// // Count count 1 in Binary : Decending Order given array ?


// const arr = [1, 1, 1, 1, 0, 0, 0];

// function count1s(arr) {
//     let start = 0;
//     let end = arr.length-1;

//     while(start <= end) {
//         let mid = start + Math.floor((end-start)/2);

//         if(arr[mid] == 0) {
//             end = mid - 1
//         }

//         else if(arr[mid] == 1 && arr[mid] == 1 ) {
//             start = mid + 1
//         }

//         // conforming weather this is last 1 or not
//         else if(arr[mid] == 1 && ((arr[mid+1] == 0) || mid == arr.length -1))
//             return mid + 1;
//     }

//     return -1
// }

// const result = count1s(arr);
// (result == -1) ? console.log("There are 0 1s in array") : console.log("Number is in array index is ", result)



const arr = [1, 1, 1, 1, 0, 0, 0];

function count1s(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == 0) {
      end = mid - 1;
    } else {
      // If mid is the last 1 or the next element is 0
      if (mid === arr.length - 1 || arr[mid + 1] == 0) {
        return mid + 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return 0; // No 1s found
}

const result = count1s(arr);
console.log("Number of 1s in array:", result);
