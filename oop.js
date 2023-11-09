/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
      const retObj = {};
      retObj.name = name;
      retObj.age = age;

      return retObj;
}

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
      greet: () => console.log('hello'),
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
      person.name = name;
      person.age = age;

      return person;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 4 ***/

personStore.introduce = function () { console.log(`Hi my name is ${person.name}`) };

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/
//Challenge 5
//Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
// Challenge 6
// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
// Challenge 7
// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

/*** CHALLENGE 5 ***/

function PersonConstructor() {
      this.greet = function () { console.log('hello') };
}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
      const person = new PersonConstructor();
      person.name = name;
      person.age = age;
      person.introduce = function () { console.log(`Hi my name is ${person.name}`) };
      return person;
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 7 ***/
PersonConstructor.prototype.introduce = function () {
      console.log(`Hi, my name is ${this.name}`);
}

// mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/
//Challenge 8
// Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.
// Challenge 9
// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
class DeveloperClass extends PersonClass {
      constructor(name, age) {
            super(name);
            this.age = age;
      }

      introduce() {
            console.log(`Hello World, my name is ${this.name}`)
      }
}


// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
// george.greet(); // -> Logs 'hello'



/*** CHALLENGE 9 ***/
class DeveloperClass {
      constructor() {
            obj = new PersonClass;
            return obj;
      }
      introduce() { console.log(`Hi my name is ${this.name}`) }
}

// add code here


// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

// Challenge 10
// Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.
// Challenge 11
// Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.
// Challenge 12
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.
// Challenge 13
// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over

const userFunctionStore = {
      sayType: function () {
            console.log("I am a " + this.type);
      }
}

function userFactory(name, score) {
      let user = Object.create(userFunctionStore);
      user.type = "User";
      user.name = name;
      user.score = score;
      return user;
}

/*** CHALLENGE 10 ***/

const adminFunctionStore = Object.create(userFunctionStore);

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
      // add code here
}

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
      constructor() {
            this.legs = 4;
      }
      speak() {
            console.log('Woof!');
      }
}

const robotMixin = {
      skin: 'metal',
      speak: function () { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"

