// Simple, remove the spaces from the string, then return the resultant string.

// Parameter: string, "", " " -> no expectation, "ac jd jd";
// return string

function noSpace(x) {
    // trim()
    return x.split(" ").join();
}

// noSpace("a b c ") -> "abc"
// noSpace(" a bc") -> "abc"