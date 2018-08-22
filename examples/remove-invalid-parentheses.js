function openBrace(s) {
    return ['('].includes(s)
}

function closeBrace(s) {
    return [')'].includes(s)
}

function removeInvalidParentheses(s) {
    let queue = new Set([s]);
    while (queue.size) {
        const next = new Set();
        for (let v of queue) {
            if (isValid(v)) {
                return [...queue].filter(isValid);
            }

            for (let i = 0; i < v.length; i++) {
                next.add(v.slice(0, i) + v.slice(i + 1));
            }
        }
        queue = next;
    }
    return [''];
}

function isValid(str) {
    let bal = 0;
    for (let ch of str) {
        if (ch === '(') {
            bal++;
        } else if (ch === ')') {
            bal--;
        }
        if (bal < 0) {
            return false;
        }
    }
    return bal === 0;
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses2 = function (s) {
    let dict = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    let stack = [];
    let input = s.split('');

    function closesMostRecentBrace(char) {
        console.log(s[s.length - 1])
        return (s[s.length - 1] === char);
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        //​# If the character is an opening brace, we push it onto the stack:​
        if (openBrace(char)) {
            stack.push(char);
            console.log('open', s.length);
        }
        //​# If the character closes the most recent opening brace,​
        else if (closeBrace(char)) {
            //Pop from stack
            if (closesMostRecentBrace(char)) {
                stack.pop();
                console.log('closed');
            } else {
                //# if the character does NOT close the most recent opening brace​
                console.log('the character does NOT close the most recent opening brace​');

            }
        }
    }
    console.log(stack);
    console.log(input);
};

console.log(removeInvalidParentheses("(b)(c))"));
console.log(removeInvalidParentheses2("(b)(c))"));
//console.log(removeInvalidParentheses("()())()"));