// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num * 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, parameter) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(parameter(array[i]));
  }
  return output;
}

const addTwo = input => input + 2;


// console.log(mapWith([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, parameter) {
  const arr = [];
  for (let n of array) {
    parameter(arr.push(n));
  }
  return arr;
}
// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
  return forEach(array, callback);
}


// Challenge 6
//const nums = [4, 1, 3];

function reduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

const add = (a, b) => a + b;
reduce(nums, add, 0);

// Challenge 7
const arrOfArr = [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]];

function intersection(arrays) {
  return arrays.reduce((acc, curr) => {
    return curr.filter(el => acc.includes(el));
  });
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {

}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {

  const returnObject = {};

  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      returnObject[array1[i]] = array2[i];
    }
  }
  return returnObject;

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const retObj = {};

  for (let i = 0; i < arrVals.length; i++) {
    for (let j = 0; j < arrCallbacks.length; j++) {
      retObj[arrVals[i]] = [];
      retObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
    }
  }

  return retObj;
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
  const key = Object.keys(obj);
  const value = Object.values(obj);
  const retObj = {};
  for (let i = 0; i < key.length; i++) {
    if (callback(key[i]) === value[i]) {
      retObj[key[i]] = value[i];
    }
  }
  return retObj;
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;
  for (let el of array) {
    if (callback(el)) {
      trueCount++;
    }
    else {
      falseCount++;
    }
  }
  return !(trueCount == falseCount);
}

// /*** Uncomment these to check your work! ***/
const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
  const trueArr = [];
  const falseArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      trueArr.push(array[i]);
    }
    else {
      falseArr.push(array[i]);
    }
  }
  const conArr = trueArr.concat(falseArr);
  return conArr;
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
  const returnObject = {};
  for (let el of array) {
    if (returnObject.hasOwnProperty(callback(el))) {
      returnObject(callback(el))++;
    }
    else {
      returnObject[callback(el)] = 0;
    }
  }
  return returnObject;
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
  const returnObject = {};
  for (let i = 0; i < array.length; i++) {
    const callbackValue = callback(array[i]);
    if (returnObject.hasOwnProperty(callbackValue)) {
      returnObject[callbackValue].push(array[i]);
    }
    else {
      returnObject[callbackValue] = [];
      returnObject[callbackValue].push(array[i]);
    }
  }

  return returnObject;
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
  returnArr = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (callback(obj[keys[i]])) {
      returnArr.push(keys[i]);
    }
  }
  return returnArr;
}

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
// Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).
function commutative(func1, func2, value) {
  const output1 = func1(value);
  const output2 = func2(value);
  return func2(output1) === func1(output2) ? true : false;
}

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
  const retObj = {};
  keys = Object.keys(obj);
  for (let n of keys) {
    if (callback(n) == obj[n]) {
      retObj[n] = obj[n];
    }
  }

  return retObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
  let accurate = 0;
  for (let i = 0; i < arrOfFuncs.length; i++) {
    if (arrOfFuncs[i](value) == true){
      accurate++;
    }
  }
  return (accurate/arrOfFuncs.length)*100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
  for(let i = 0; i < arrOfFuncs.length; i++){
    value = arrOfFuncs[i](value);
  }

  return value;
}

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
// Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.
function highestFunc(objOfFuncs, subject) {
  keys = Object.keys(objOfFuncs);
  let value = objOfFuncs[keys[0]](subject);
  let j = 0;

  for (let i = 1; i < keys.length; i++) {
    let returnValue = objOfFuncs[keys[i]](subject);
    if (returnValue > value) {
      j++;

    }
    value = returnValue;
  }
  return keys[j];
}

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {

  for (let i = 0; i < arrOfFuncs.length; i++) {
    startVal = arrOfFuncs[i](startVal);
  }

  return startVal;

}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      return i;
    }
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function myForEachV2(array, callback) {
  for (let n of array) {
    callback(n);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

const nums = [1, 2, 3];
myForEach(nums, addToSum);
console.log(sum); // Should output 6
