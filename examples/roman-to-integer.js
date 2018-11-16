// Roman numerals are represented by seven different symbols: I, V, X, L, C, D
// and M.
//
// Symbol       Value I             1 V             5 X             10 L     50
// C             100 D             500 M             1000
//
// For example, two is written as II in Roman numeral, just two one's added
// together. Twelve is written as, XII, which is simply X + II. The number
// twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is
// written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There
// are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9. X can be placed
// before L (50) and C (100) to make 40 and 90. C can be placed before D (500)
// and M (1000) to make 400 and 900.
//
// Given a roman numeral, convert it to an integer. Input is guaranteed to be
// within the range from 1 to 3999.
//
// Example 1:
//
// Input: "III" Output: 3
//
// Example 2: git Input: "IV" Output: 4
//
// Example 3:
//
// Input: "IX" Output: 9
//
// Example 4:
//
// Input: "LVIII" Output: 58 Explanation: C = 100, L = 50, XXX = 30 and III = 3.
//
// Example 5:
//
// Input: "MCMXCIV" Output: 1994 Explanation: M = 1000, CM = 900, XC = 90 and IV
// = 4.

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let prevNum = 0;
    let sum = 0;

    for (let c of s) {
        const num = map[c];

        sum = prevNum >= num
            ? sum + num
            : sum + num - prevNum * 2;

        prevNum = num;
    }

    return sum;
}

//console.log(romanToInt(12));
console.log(romanToInt('X'));
/**
 * Code Explanation:
- We start off by creating two arrays with default conversion with matching indices. These are called decimalValue and romanNumeral. We also create an empty string variable, romanized, which will house the final roman number.
- Using a for loop, we loop through the indicies of the decimalValue array. We continue to loop until while the value at the current index will fit into num.
- Next, we add the roman numeral and decrease num by the decimal equivalent.
- Finally, we return the value of romanized.
 * @param {*} num 
 */
function toRoman(num) {
    let result = '';
    const decimals = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ];
    const romans = [
        "M",
        'CM',
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];
    for (let i = 0; i <= decimals.length; i++) {
        // looping over every element of our arrays
        while (num % decimals[i] < num) {
            // keep trying the same number until we need to move to a smaller one
            result += romans[i];
            // add the matching roman number to our result string
            num -= decimals[i];
            // subtract the decimal value of the roman number from our number
        }
    }
    return result;
}

const solution = (number) => {};

console.log(toRoman(8));
console.log(toRoman(1));
console.log(toRoman(6));
console.log(toRoman(123));
console.log(toRoman(1223));
console.log(toRoman(2004));
console.log(toRoman(231)); //CCXXXI