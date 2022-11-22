// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My Solution
// Parameter: whole number, 0, non-negative number, no float
// return in the array

function digitize(n) {
    // first put the parameter into array -> Array.from (i)
    // chaneg the order to reversed -> reverse()
    return Array.from(String(n), Number).reverse();
}

// digitize(1, 2, 3, 4, 5) -> [5, 4, 3, 2, 1]
// digitize(3, 4, 8) -> [8, 4, 3]:
// digitize(0) -> [0]