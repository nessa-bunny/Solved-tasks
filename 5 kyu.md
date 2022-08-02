#Solved tasks 5 kyu:
## Simple parenthesis removal
https://www.codewars.com/kata/5a3bedd38f27f246c200005f/train/javascript
```javascript
function changeSign(sign) {
    return (sign == '-') ? '+' : '-';
}

function solve(s) {
    let res = '';
    let signs = ['+'];
    for (let i = 0; i < s.length; ++i) {
        let sign = signs[signs.length - 1];
        if (i > 0 && s[i - 1] == '-') sign = changeSign(sign);
        switch (s[i]) {
            case '(': {
                signs.push(sign);
                break;
            }
            case ')':
                signs.pop();
                break;
            case '-':
                break;
            case '+':
                break;
            default: {
                if (res === '' && sign === '+') res += s[i];
                else res += sign + s[i];
                break;
            }
        }
    }
    return res;
}
```