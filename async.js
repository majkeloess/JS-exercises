/* CHALLENGE 1 */

function sayHowdy() {
      console.log('Howdy');
}

function testMe() {
      setTimeout(sayHowdy, 0);
      console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
      setTimeout(() => console.log("welcome"), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
      console.log('hello');
      setTimeout(() => console.log('good bye'), 2000);
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
      setInterval(() => {
            console.log("hi again")
      }, 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
      let count = 0;
      let id = setInterval(() => {
            console.log("hi for now");
            count++
            if (count >= 5) {
                  clearInterval(id)
            }
      }, 1000)
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
      let counter = 0;
      let inter = setInterval(() => {
            func();
            counter++;
            if (counter >= duration / interval) {
                  clearInterval(inter);
            }
      }, interval * 1000)
}
// Uncomment the following lines to check your work!
function theEnd() {
      console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */
//Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

//When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

function delayCounter(target, wait) {

      function call() {
            let counter = 1;
            let inter = setInterval(() => {
                  console.log(counter);
                  counter++;
                  if (target < counter) {
                        clearInterval(inter);
                  }
            }, wait)

      }
      return call;

}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  resolve(val);

                  const error = new Error("Error!");
                  reject(error);
            }, 1000)
      });
}

