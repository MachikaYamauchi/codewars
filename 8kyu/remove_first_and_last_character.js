// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Parameter: more than two characters, string
// return

function removeChar(str){
    return str.slice(1, str.length - 1);
};

// removeChar("cat") -> "a"
// removeChar("country") -> "ountr"