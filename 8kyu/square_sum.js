// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// My Solution

// parameter: array, whole number, positive num, empty
// return 

function squareSum(numbers){
    // map()
    // reduce()
    return numbers.map(num => num * num).reduce((accumulator, current) => accumulator + current, 0);
}

// squareSum([1, 2, 3]) -> 12
// squareSum([0, 2, 3]) -> 13
// squareSum([]) => 0