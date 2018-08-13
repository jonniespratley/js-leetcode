/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs && strs.length === 0) {
        return '';
    }
    strs.sort((prev, next) => prev.length - next.length)
    shortestStr = strs[0]
    length = shortestStr && shortestStr.length
    if (!length) {
        return ''
    }
    for (let i = length; i > 0; i--) {
        const searchStr = shortestStr.substr(0, i);
        flag = strs.every((item) => item && item.startsWith && item.startsWith(searchStr))
        if (flag) {
            return searchStr
            break;
        }
    }
    return ''
};