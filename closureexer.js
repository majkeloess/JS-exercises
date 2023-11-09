// CHALLENGE 1
function createFunction() {
      function log() {
            console.log("Hello!");
      }
      return log;
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
      function log(input) {
            console.log(input);
      }
      return log;
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
      let counter = 0; // this variable is outside incrementCounter's scope
      function incrementCounter() {
            counter++;
            console.log('counter', counter);
      }
      return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
      function fun(value) {
            return x + value;
      }

      return fun;
}

// /*** Uncomment these to check your work! ***/
// const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
//Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
function once(func) {
      let output;

      function callOnce(x) {
            if (output > 0) {
                  return output;
            } else {
                  output = func(x)
                  return output;
            }
      }
      return callOnce;
}

// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
      let counter = 1;
      function call() {
            if (counter >= count) {
                  return func();
            } else {
                  counter++;
            }
      }
      return call;
}
// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
//Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
function delay(func, wait, ...params) {
      setTimeout(() => {
            func(...params)
      }, wait)
}

// Testing Challenge 6 (tests were not included in the exercise for this challenge)
const cb = function (...params) { console.log("called!", ...params) };
//delay(cb, 1000); // "called!" printed after 1000 ms
//delay(cb, 2000, "param1", "param2"); // "called! param1 param2" printed after 2000 ms

// CHALLENGE 7
function rollCall(names) {
      let counter = 0;
      function call() {
            if (names.length > counter) {
                  console.log(names[counter]);
                  counter++;
            } else {
                  console.log("Everyone accounted for");
            }
      }
      return call;
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
//Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

function saveOutput(func, magicWord) {
      const retObj = {};
      function call(param) {
            if (param == magicWord) {
                  return retObj;
            } else {
                  let output = func(param);
                  retObj[param] = output;
                  return output;
            }
      }
      return call;
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
      let counter = 0;
      function retFun() {
            if (counter == array.length) {
                  counter = 0;
                  console.log(array[counter]);
            } else {
                  console.log(array[counter]);
                  counter++;
            }

      }
      return retFun;
}
// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
//Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function
function defineFirstArg(func, arg) {
      function retFun(...args) {
            let output = func(arg, ...args);
            return output;
      }
      return retFun;
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
//Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.
function dateStamp(func) {
      const returnObject = {};
      let today = new Date();
      function call(...args) {
            returnObject.date = today.toDateString();
            returnObject.output = func(...args);
            return returnObject;
      }
      return call;
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
//Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).
function censor() {

      function call(...args) {
            if (args.length == 2) {

            } else if (args.length == 1) {

            } else {
                  return;
            }

      }
      return call;
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
      const retObj = {};
      retObj.setSecret = function (secret) {
            return secret;
      }


      return retObj;
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2

