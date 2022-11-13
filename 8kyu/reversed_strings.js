// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// My Solution
// P: not Number, only string, not array
// P: return string

function solution(str) {
    // conditinal to check the str does not have "", space
    // str.reverse()
    // return the result
    if(str === '') {
        return "";
    } else if(str.length === 1) {
        return str;
    } else if(str.length > 1) {
        return str.split("").reverse().join("");
    }
};

console.log("str".split(''));

reverseString("aos") // "soa"
reverseString("aaa") // "aaa"
reverseString(" "); // ""
reverseString("h"); // h