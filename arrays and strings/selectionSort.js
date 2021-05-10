
// nested loop
// using a sliding window to track a min val
// with each window shifiting the min value to the front of the window and not the arr;

//walk example

// big O

function selectionSort(arr) { // [5, 6, 4]
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]; // 4
        let idx = 0;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min){
                min = arr[j];
                idx = j;
            } 
        }

        if (arr[i] > min) { // 4 < 6
                let temp = arr[i];
                arr[i] = min;
                arr[idx] = temp;
        }
    }

    return arr;
}

//function => array of an alphabet
// each word would be assigned a index number
// 1022

console.log(selectionShort([6, 5, 4])) // => [4, 5, 6];