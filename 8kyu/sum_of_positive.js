// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My Sotution
// Parameter: Array, contain negative number, [], whole number, might have only negative
// return

function positiveSum(arr) {
    // filter array -> tale only positive number -> sum
    let positiveArray = arr.filter(num => num > 0);
    if(positiveArray.length === 0) {
        return 0;
    } else {
        let sum = positiveArray.reduce((accumulator, num)=> {
            return accumulator + num;
        }, 0);
        return sum;
    }

}

// positiveSum([1, 2, 3]) -> 6
// positiveSum([-1, -2, 3]) -> 3
// positiveSum([]) -> 0
// positiveSum([-1, -2, -3]) -> 0

