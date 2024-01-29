// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  // const copy = [...arr];
  // const sorted = [];

  // while(copy.length > 0) {
  //   console.log(sorted.join(','));
  //   let tmp = copy.pop();
  //   sorted.unshift(null);

  //   let i = sorted.length - 1;
  //   while(i >= 0) {
  //     if(sorted[i] < tmp) {
  //       break;
  //     } else {
  //       [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
  //     }
  //     i--;
  //   }

  //   sorted.splice(i, 1, tmp);
  // }

  // return sorted;

  const copy = [...arr];
  const sorted = [];

  while (copy.length > 0) {
    console.log(sorted.join(','));
    let tmp = copy.pop();

    let i = sorted.length - 1;
    while (i >= 0 && sorted[i] > tmp) {
      sorted[i + 1] = sorted[i];
      i--;
    }

    sorted[i + 1] = tmp;
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  for (let i = 1; i < arr.length; i++) {
    console.log(arr.join(','));
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
