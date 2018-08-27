/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (strs) {

    // 1 sort each word's letters to enable matching
    // alph will be, e.g.: ['aet', 'aet', 'ant' ...]
    var alph = strs.map(word => word.split('').sort().join(''));

    // 2 create groups of indices of identical sorted words
    // locations will be, e.g.: { 'aet': [0, 1, 3], 'ant': [...] }
    var locations = {};
    for (var i = 0; i < alph.length; i++) {
        if (!locations[alph[i]]) {
            locations[alph[i]] = [i];
        } else {
            locations[alph[i]].push(i);
        }
    }
    console.log(locations);

    // 3 transform groups of indices into groups of original words
    // e.g. for 'aet', map [0, 1, 3] to words at those indices in strs
    var output = [];
    for (var word in locations) {
        output.push(locations[word].map(idx => strs[idx]));
    }
    return output;
};
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)