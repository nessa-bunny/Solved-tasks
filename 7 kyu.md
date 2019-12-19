#Solved tasks 7 kyu:
## Breaking chocolate problem
https://www.codewars.com/kata/breaking-chocolate-problem/train/javascript
```javascript
function breakChocolate(n,m) { 
  if (m == 0 || n == 0) return 0;
  return m * n - 1;
}
```
## The wheat/rice and chessboard problem
https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem/javascript
```javascript
function squaresNeeded(grains){
  let x = 1;
  let square = 0;
  let s = 0
  while (s < grains) {
    s += x;
    x *= 2;
    ++square;
  }
  return square;
}
```
