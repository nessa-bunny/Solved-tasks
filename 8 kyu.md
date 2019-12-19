# Solved-tasks
## Beginner - Lost Without a Map
https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript
```javascript
function maps(arr){
  let arr1 = arr.map(function (x) {
  return x * 2;
  }
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
## Sum The Strings
https://www.codewars.com/kata/5966e33c4e686b508700002d
```javascript
function sumStr(a,b) {
    return String(+(a) + +(b));  
}
```
## Do I get a bonus?
https://www.codewars.com/kata/56f6ad906b88de513f000d96
```javascript
function bonusTime(salary, bonus) {
  return !!bonus ? "\u00A3" + (salary * 10) : "\u00A3" + salary;
}
```