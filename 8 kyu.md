# Solved-tasks
## Beginner - Lost Without a Map
https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript
```javascript
function maps(arr){
  let arr1 = arr.map(function (x) {
  return x * 2;
})
  return arr1;
}


function maps(x){
  return x.map(n => n *2);
}
```
## Remove String Spaces
https://www.codewars.com/kata/57eae20f5500ad98e50002c5
```javascript
function noSpace(x){
let arr = [];
for (let i = 0; i < x.length; ++i) {
if (x[i] != ' ') arr += x[i];
}
return arr;
}
```