
//Iteration: 

function summ(num) {
      let total = 0;
      for (let i = 0; i < num.length; i++) {
            total += num[i];
      }
      return num;
}

//Recursion:

function summ(num) {
      if (num.length === 1) {
            return num[0];
      } else {
            return num[0] + summ(num.slice(1));
      }
}

//FACCTORIAL:

function iterativeFactorial(n) {
      let product = 1;
      while (n > 0) {
            product *= n;
            n--;
      }
      return product;
}

function recursiveFactorial(n) {
      if (n === 0) return 1;
      return n * recursiveFactorial(n - 1);
}


function iterativeFibonacci(n) {
      let younger = 0;
      let older = 1;
      let sum;
      for (let i = 1; i < n; i++) {
            sum = younger + older;
            younger = older;
            older = sum;
      }
      return sum;
}


function recursiveFibonacci(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
      return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

const wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map reduce filter
// Concatenate two arrays into a new single array
function concat(array1, array2) {
      return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
      return array.length;
}

// Return the first item in an array
function head(array) {
      return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
      return array.slice(1);
}

function filter(predicateFn, array) {
      if (length(array) === 0) return [];
      const firstItem = head(array);
      const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
      return concat(filteredFirst, filter(predicateFn, tail(array)));
}

function isEven(n) {
      return n % 2 == 0 ? true : false;
}

const odds = filter(n => {
      return n % 2 ? true : false;
}, wholes)

greaterThanFour = filter(n => {
      return n > 4
}, wholes);

function isPrime(n) {
      if (n >= 2) {
            for (let i = 2; i <= Math.sqrt(n); i++) {
                  if (n % i == 0) return false;
            }
            return true;
      }
}

function map(fn, array) {
      if (length(array) === 0) return [];
      return [fn(head(array))].concat(map(fn, tail(array)));
}

fizzBuzz = map(n => {
      if (n % 3 == 0) return "fizz";
      if (n % 5 == 0) return "buzz";
      if (n % 3 == 0 && n % 5 == 0) return "fizzbuzz";
      else return n;
}, wholes)

function reduce(reducerFn, initialValue, array) {
      if (length(array) === 0) return initialValue;
      const newInitialValue = reducerFn(initialValue, head(array));
      return reduce(reducerFn, newInitialValue, tail(array));
}
summm = reduce((acc, value) => {
      return acc + value;
}, 0, wholes);

max = reduce((acc, value) => {
      if (value < acc) {
            value = acc;
      }
      return value;
}, undefined, [7, 1, 3, 5, 6, 2, 8, 10, 0, 4, 9]);

//closure

function signMessageWith(salutation) {
      return (str) => {
            return str + `${salutation}`;
      }
}

function makeSignature(salutation, name) {
      return (str) => {
            return str + ` ${salutation}` + ` ${name}`;
      }
}

const curriedQuote = (author) => {
      return (year) => {
            return (quote) => {
                  return author + ' ' + year + ' ' + quote;
            }
      }
}

quoteCrockford = curriedQuote('Doug Crockford');

quoteDijkstra = curriedQuote('Edsger Dijkstra');

quoteDijkstra75 = quoteDijkstra(1975);

curriedQuote('Guido van Rossum')(2001)("Don't you hate code that's not properly indented?");
quoteCrockford(2005)('There are no good texts on JavaScript programming.');
quoteCrockford(2008)('JavaScript is an astonishing language, in the very worst sense.');
quoteDijkstra(1978)('Object oriented programming is an exceptionally bad idea which could only have originated in California.');
quoteDijkstra75('By claiming that they can contribute to software engineering, the soft scientists make themselves even more ridiculous.');
quoteDijkstra75("Besides a mathematical inclination, an exceptionally good mastery of one's native tongue is the most vital asset of a competent programmer.");
quoteDijkstra75("The irony of my self-contradiction is lost on me. [Just kidding, he didn't actually say this one - making it all the more true!]");

//FUNCTION COMPOSITION

function pipeline(...functions) {
      
      return function (input) {
            
      };
}
pluralize = singularWord => singularWord + 's'
heart = word => "I ❤️ " + word
exclaim = sentence => sentence + "!"

showSomeLove = pipeline(pluralize, heart, exclaim);
pipelineLove = showSomeLove('pipeline')
functionLove = showSomeLove('pure function')
coffeeLove = showSomeLove('coffee break')

loveSomeShow = pipeline(exclaim, heart, pluralize)
wrongOrder = loveSomeShow('pipeline')

composedPipe = pipeline(pluralize, pipeline(heart, exclaim))
compositionLove = composedPipe('composition') // should be equivalent to: showSomeLove('composition')