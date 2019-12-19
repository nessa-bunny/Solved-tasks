#Solved tasks 6 kyu:
## Tortoise racing
https://www.codewars.com/kata/55e2adece53b4cdcb900006c
```javascript
function race(v1, v2, g) {
  if (v1 >= v2) return null;
    let t = g / (v2 - v1); // hour
    let time = t * 3600;
    let hour = Math.trunc(time / 3600);
    let min = Math.trunc((time - hour * 3600) / 60); // minutes
    let sec = Math.trunc(time - hour * 3600 - min * 60);
    return [hour, min, sec]
}
```
## Unique In Order
https://www.codewars.com/kata/54e6533c92449cc251001667
```javascript
var uniqueInOrder=function(iterable){
  if (iterable == '') return [];
  let arr = [];
  arr.push(iterable[0])
  for (let i = 1; i < iterable.length; ++i) {
    if (iterable[i] !== iterable[i - 1])
    arr.push(iterable[i]);
  }
  return arr;
}
```