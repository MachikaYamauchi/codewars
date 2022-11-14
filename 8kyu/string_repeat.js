// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Parameter n => whole number, positive  s=> *, "hi "
// return 

function repeatStr (n, s) {
    // let repeatStr = "";
    // for loop -> for (let i = 0; i < n; i++)
    // return repeatStr;
    let repreatStr = "";
    for(let i = 0; i < n; i++) {
        repreatStr += s;
    }
    return repreatStr;
}

// repeatStr(3, "*") -> "***"
// repeatStr(4, "hi ") -> "hi hi hi hi "