
var rotate = function(nums, k) {
    nums.unshift.apply(nums,nums.splice(nums.length-k,k))
  
};
//console.log(rotate([-1], 2))
//console.log(rotate([1,2,3], 4))

/**
 * Given an input string, reverse the string word by word.

Example:  

Input: "the sky is blue",
Output: "blue is sky the".
 */

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let output = [];
    let words = str.split(' ');
    for (let index = words.length - 1; index > -1; index--) {
        let word = words[index];
        if(word){
            //console.log(word);
            output.push(word);
        }
    }
    return output.join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords(' the sky is blue '));


/**
 
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * @param {*} str 
 */
var reverseWords2 = function(str) {
    let output = [];
    let words = str.split(' ');
    for (let index = 0; index < words.length; index++) {
        let word = words[index];
        let temp = [];
        for (let index = word.length - 1; index > -1; index--) {
            let w = word[index];
            temp.push(w);
        }
        output.push(temp.join(''));
    }
    return output.join(' ');
};



/**
 * Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/



console.log(reverseWords2("Let's take LeetCode contest"));