// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// My solution
// P: negative, 0, float
// P: return

function makeNegative(num) {
    // conditional num <= 0 return num, num > 1 retrun negative
    // return -num
    // codition ? true:false
    if(num <= 0) {
        return num;
    } else {
        return -num
    }


}

// makeNegative(1) // -> -1
// makeNegative(-10) // return -10
// makeNegative(0) // return 0
// makeNegative(0.21) // return -0.21