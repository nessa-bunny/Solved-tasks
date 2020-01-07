## Solved tasks 8 kyu:
#### Beginner - Lost Without a Map
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
#### Remove String Spaces
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
#### Sum The Strings
https://www.codewars.com/kata/5966e33c4e686b508700002d
```javascript
function sumStr(a,b) {
    return String(+(a) + +(b));  
}
```
#### Do I get a bonus?
https://www.codewars.com/kata/56f6ad906b88de513f000d96
```javascript
function bonusTime(salary, bonus) {
  return !!bonus ? "\u00A3" + (salary * 10) : "\u00A3" + salary;
```
#### A wolf in sheep's clothing
https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
```javascript
function warnTheSheep(queue) {
    let i = queue.length - queue.indexOf("wolf") - 1;
    return i === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
}
`