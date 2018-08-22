/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let result = 0;
    if(needle === ""){
      return result;
    }
    let index = haystack.indexOf(needle);
    return index >= -1 ? index : result;
  };