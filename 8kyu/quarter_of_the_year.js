// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// My Solution

const quarterOf = (month) => {
    let monthNum = parseInt(month);
    if(monthNum >= 1 && monthNum <= 3) {
      return 1;
    }
    else if (monthNum >=4 && monthNum <= 6) {
        return 2;
    }
    else if (monthNum >=7 && monthNum <= 9) {
        return 3;
    }
    else if(monthNum >=10 && monthNum <= 12) {
        return 4;
    }
}
