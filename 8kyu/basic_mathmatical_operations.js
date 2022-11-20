// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// My Solution
// Parameter: (operator-> string, val1 -> whole positive number, val2 -> whole positive number)
// return number

function basicOp(operation, value1, value2)
{
    let result = "";
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        default:
            return null;
    }
    return result
}

// basicOp("-", 15, 18) -> -3
// basicOp("/", 15, 3) -> 5
// basicOp("+", 6, 3) -> 9
// basicOp("*", 6, 3) -> 18

