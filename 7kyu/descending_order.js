// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// My Solution
function descendingOrder(n){
    // let digits = n.toString().split('');
    // let realDigits = digits.map(Number);
    // let sortDigits = realDigits.sort((a,b)=>b-a);
    // let finalDigits = Number(sortDigits.join(""));

    let digits = Number(n.toString().split('').map(Number).sort((a,b)=>b-a).join(""));
    return digits;
  }

