/*

arr = [1,2,2,5,1,3,4,5]
arr.splice(1,1);


[1,2,5,3,4]


Approach:
  -Loop through the array
  -Check if current element is in hash table
    -if true, continue
    -if false, add to unique array
  -return unique array

O(n) time | O(n) space
*/

// function uniqueEle(nums) {
//   let hash = {};
  
//   for (let i = 0; i < nums.length; i++) {
//     if (hash[nums[i]] !== undefined) {
//       nums.splice(i, 1);
//     } else {
//       hash[nums[i]] = 1;
//     }
//   }

//   return nums;
// }

// console.log(uniqueEle([1,2,2,5,1,3,4,5]));

// // Remove Duplicates (Google Interview Question)
// // Time: O(n) | Space: O(2n) worst case if no dupes

// function removeDuplicates(arr, opt_rv, opt_hashFn) {
//   let returnArray = opt_rv || arr;
//   const defaultHashFn = function (item) {
//     // Prefix each type with a single character representing the type to
//     // prevent conflicting keys (e.g. true and 'true').
//     return (typeof item).charAt(0) + item;
//   };
//   let hashFn = opt_hashFn || defaultHashFn;

//   let seen = {},
//     cursorInsert = 0,
//     cursorRead = 0;
//   while (cursorRead < arr.length) {
//     let current = arr[cursorRead++];
//     let key = hashFn(current);
//     if (!seen.hasOwnProperty(key)) {
//       seen[key] = true;
//       returnArray[cursorInsert++] = current;
//     }
//   }
//   returnArray.length = cursorInsert;
// }

// let array = [400, 234, 105, 400, 116, 234, 118, 12];
// console.log(array);
// removeDuplicates(array); // [400, 234, 105, 116, 118, 12]
// console.log(array);



// ---------- BINARY SEARCH -------- //
// Only be used on a sorted array
// Runs in o(log n)


// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11] target = 4
//  L           M               R


// left = 3, right = 3, mid = 3

function binarySearch(array, target)  {
    let left = 0,
        right = array.length -1,
        mid = Math.floor((left + right) / 2);
    
  
    while(left <= right) {
      if (target < array[mid]) {
        right = mid - 1;
        mid = Math.floor((left + right) / 2);
      } else if (target === array[mid]){
        return mid;
      } else {
        left = mid + 1;
        mid = Math.floor((left + right) / 2);
      }
    }
    return false;
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 4))  // 3
  
  //              p                
  // [21, 24, 27, 0, 1, 3, 4, 5, 7, 9, 12, 15, 18] target = 24
  
  
  // [21, 24, 27, 0, 1, 3, 4, 5, 7, 9, 12, 15, 18]
  //.             R                             
  //.             L
  //.             M
  
  /*
  
  Approach:
    -Find the pivot point
      -Modified binary SEARCH
      -If right > mid:
        -right = mid - 1
      - If right < mid:
        -left = mid + 1
      - Else:
        return mid
  
    -Is target in the left array or the right array?
      -if target > arr[arr.length - 1]
        -binarySearch(array.slice(0, pivotPoint), target)
      -else
        --binarySearch(array.slice(pivotPoint, array.length), target)
  
  */
  
  function findPivot(array) {
    let left = 0,
        right = array.length - 1;
        
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (array[right] > array[mid]) {
        right = mid - 1;
      } else if (array[right] < array[mid]) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  }
  
  function shiftedArraySearch(array, target) {
    if (array[array.length - 1] < target) {
      return binarySearch(array.slice(0, findPivot(array), target));
    } else if (array[array.length - 1] > target) {
      return binarySearch(array.slice(findPivot(array)), target);
    } else {
      return array.length - 1;
    }
  }
  