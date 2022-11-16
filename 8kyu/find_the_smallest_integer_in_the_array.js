// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Parameter array, no empty array, no string, no number, inside the array -> the element has only number, negative and positive
// return only number

class SmallestIntegerFinder {
    findSmallestInt(args) {
        // change the array to element = number -> spread syntax
        // return Math.min()
        return Math.min(...args);
    }
}

// findSmallestInt([-1, 0, 4, 5]) -> -1
// findSmallestInt([99, 100, 76, 108]) -> 76