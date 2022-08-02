## Solved tasks 7 kyu:
#### Breaking chocolate problem
https://www.codewars.com/kata/breaking-chocolate-problem/train/javascript
```javascript
function breakChocolate(n,m) { 
  if (m == 0 || n == 0) return 0;
  return m * n - 1;
}
```
#### The wheat/rice and chessboard problem
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
#### Beginner Series #3 Sum of Numbers
https://www.codewars.com/kata/55f2b110f61eb01779000053
```javascript
function getSum( a,b ){
  let sum = 0;
  if (a < b) {
  for (let i = a; i <= b; ++i) {
    sum += i;
    }
  } else {
    for (let i = b; i <= a; ++i) {
      sum += i;
    }
  }
  return sum;
}
```
#### You're a square!
https://www.codewars.com/kata/54c27a33fb7da0db0100040e
```javascript
function isSquare(n){
  return Math.sqrt(n)%1===0 ? true : false; 
}
```
#### Filter the number
https://www.codewars.com/kata/55b051fac50a3292a9000025
```javascript
function FilterString(value) {
  let str = "";
  for (let i = 0; i < value.length; ++i) {
    if (isNaN(value[i]) === false)
    str += value[i]
  }
  return +str;
}
```
#### Powers of 3
https://www.codewars.com/kata/57be674b93687de78c0001d9
```javascript
function largestPower(n){
  let k = 0;
  while (3 ** k < n) {
    ++k;
  }
  return k - 1;
}
```
#### Squares sequence
https://www.codewars.com/kata/5546180ca783b6d2d5000062
```javascript
function squares(x, n) {
  let arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push(x)
    x = Math.pow(x, 2)
  }
  return arr;
}
```
#### Calculate Two People's Individual Ages
https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1
```javascript
function getAges(sum,difference){
  if (sum - difference < 0 || difference < 0) return null;
  return [(sum + difference) / 2, (sum - difference) /2];
};
```
#### Square Every Digit
https://www.codewars.com/kata/546e2562b03326a88e000020
```javascript
function squareDigits(num){
  num += '';
  let sum = '';
  for (let i = 0; i < num.length; ++i) {
  sum += Math.pow(num[i], 2);
  }
  return +sum;
}
```
#### Factorial
https://www.codewars.com/kata/57a049e253ba33ac5e000212
```javascript
function factorial(n){
let m = 1;
  for (let i = 1; i <= n; ++i) {
  m *= i;
  }
  return m;
}
```
#### Return the closest number multiple of 10
https://www.codewars.com/kata/58249d08b81f70a2fc0001a4
```javascript
const closestMultiple10 = num => Number((num / 10).toFixed(0)) * 10;

const closestMultiple10 = num => Math.round(num / 10) * 10;
```
#### Discover The Original Price 
https://www.codewars.com/kata/552564a82142d701f5001228
```javascript
function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / ((100 - salePercentage) / 100)) .toFixed(2);
}
```
#### Power of two
https://www.codewars.com/kata/534d0a229345375d520006a0
```javascript
function isPowerOfTwo(n){
  while (n % 2 === 0 && n != 0) {
     n /= 2;
     }
  return n == 1;  
}

function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
}
```
#### Sum of angles
https://www.codewars.com/kata/5a03b3f6a1c9040084001765
```javascript
function angle(n) {
 return 180 * (n - 2);
}
```
#### Sum of the first nth term of Series
https://www.codewars.com/kata/555eded1ad94b00403000071
```javascript
function SeriesSum(n) {
  let sum = 0;
  let denominator = 1;
  for (let i = 1; i <= n; ++i) {
    sum += 1 / denominator;
    denominator += 3;
  }
  return sum.toFixed(2);
}
```
#### Find the next perfect square!
https://www.codewars.com/kata/56269eb78ad2e4ced1000013
```javascript
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
```
#### Difference Of Squares
https://www.codewars.com/kata/558f9f51e85b46e9fa000025
```javascript
function differenceOfSquares(n){
  let sumOfTheSquares = 0;
  let sum = 0;
  for (i = 1; i <= n; ++i) {
    sum += i;
    sumOfTheSquares += i ** 2;
  }
  sum = sum ** 2;
  return sum - sumOfTheSquares;
}
```
#### Is this a triangle?
https://www.codewars.com/kata/56606694ec01347ce800001b
```javascript
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && b + c > a;
}
```
#### Formatting decimal places #1
https://www.codewars.com/kata/5641c3f809bf31f008000042
```javascript
function twoDecimalPlaces(number) {
  return Math.trunc(number * 100) / 100 ;
}
```
### How many times should I go?
https://www.codewars.com/kata/57efcb78e77282f4790003d8
```javascript
function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice / individualPrice);
}
```
### Binary Addition
https://www.codewars.com/kata/551f37452ff852b7bd000139
```javascript
function addBinary(a,b) {
  return (a + b).toString(2);
}
```
### What is type of variable?
https://www.codewars.com/kata/57293671c98f77e84b000065
```javascript
function type(value) {
  let str = {}.toString.call(value).toLowerCase();
  return str.substring(8, str.length-1)
}
```
### Is every value in the array an array?
https://www.codewars.com/kata/582c81d982a0a65424000201
```javascript
function arrCheck (value) {
  for (let i = 0; i < value.length; ++i) {
  if (Array.isArray(value[i]) == false) return false;
  }
  return true;
}
```
### Divide and Conquer
https://www.codewars.com/kata/57eaec5608fed543d6000021
```javascript
function divCon(x){
  let sum = 0, sumOfStr = 0;
  for (let i = 0; i < x.length; ++i) {
    if (typeof x[i] == 'number')
    sum += x[i];
    else if (typeof x[i] == 'string')
    sumOfStr += +x[i];
  }
  return sum - sumOfStr;
}
```
### Odd or Even?
https://www.codewars.com/kata/5949481f86420f59480000e7
```javascript
function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return sum % 2 === 0 ? 'even' : 'odd';
}
```
### Sum of Odd Cubed Numbers
codewars.com/kata/580dda86c40fa6c45f00028a
```javascript
function cubeOdd(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (isNaN(Math.pow(arr[i], 3))) return undefined;
    if (arr[i] % 2 != 0)
    sum += Math.pow(arr[i], 3);
  }
  return sum;
}
```
### Squares sequence
https://www.codewars.com/kata/5546180ca783b6d2d5000062
```javascript
function squares(x, n) {
  let arr = [];
  for (let i = 0; i < n; ++i) {
    arr.push(x)
    x = Math.pow(x, 2)
  }
  return arr;
}
```
### Remove the minimum
https://www.codewars.com/kata/563cf89eb4747c5fb100001b
```javascript
function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}
```
### Find the divisors!
https://www.codewars.com/kata/544aed4c4a30184e960010f4
```javascript
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; ++i) {
    if (integer % i === 0) arr.push(i);
  }
  return arr.length == 0 ? `${integer} is prime` : arr;
}
```
### Who is the killer?
https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
```
function includesAll(set, subSet) {
  for( let el of subSet) {
    if (!set.includes(el)) return false;
  }
  return true;
}

function killer(suspectInfo, dead) {
  for (const [suspect, victims] of Object.entries(suspectInfo)) {
    if (includesAll(victims, dead)) 
      return suspect;
  }
}
```












