// Lecture: let & const

// ES5
// var name5 = 'Brian Toll';
// var age5 = '36';
// name5 = 'Brian David Toll';
// console.log(name5);

// // ES6
// const name6 = 'Brian Toll';
// let age6 = 36;
// //name6 = 'Brian David Toll';
// console.log(name6);

//ES5
// function driversLicence5(passedTest) {

//     if (passedTest) {
//         var firstName = 'Brian';
//         var yearOfBirth = 1984;

//         console.log(firstName + yearOfBirth);
//     }

// }

//driversLicence5(true);

//ES6
// function driversLicence6(passedTest) {

//     //console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1984;

//     if (passedTest) {
//         firstName = 'Brian';
//         console.log(firstName + yearOfBirth);
//     }

// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {

//     console.log(i);

// }

// console.log(i);

// let and const are block scoped
// var is function scope




// Lecture: Blocks and IIFEs

//ES6
// {
//     const a = 1;
//     let b = 2;
    
//     // Not Block scoped so it can be accessed from outside the block
//     var c = 3;
// }

//console.log(a + ' ' + b)
// console.log(c);

// // ES5 IIFE
// (function() {
//     var c = 3;
// })();

//console.log(c);





//Lecture: Strings

// let firstName = 'Brian';
// let lastName = 'Toll';
// const yearOfBirth = 1984;
// function calcAge(year) {
//     return 2020 - year;
//}

//ES5
// console.log('This is ' + firstName + ' ' + 
//     lastName + '. He was born in ' + 
//     yearOfBirth + '. Today, he is ' + 
//     calcAge(yearOfBirth) + ' years old.');

//ES6 - template literals
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('B'));
// console.log(n.endsWith('l'));
// console.log(n.includes('an To'));
// console.log(`${firstName} `.repeat(5));




//Lecutre: Arrow Functions

// const years = [1984, 1992, 1993, 1996];

// //ES5
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(ages5);


// //ES6
// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index+1}: ${2020-el}.`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index+1}: ${age}.`
// });
// console.log(ages6);



//Lecture: Lexical 'this' Keyword

//ES5 
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function() {
//       var str = 'This is a number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     });
//   }
// }

//box5.clickMe();

//ES6

// const box6 = {
//   color: 'blue',
//   position: 2,
//   clickMe: function() {
//     document.querySelector('.blue').addEventListener('click', () => {
//       var str = 'This is a number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// }

//box6.clickMe();

// const box66 = {
//   color: 'blue',
//   position: 2,
//   clickMe: () => { // another arrow function here will break it since i changes the lexical
//     // this scope to the global document
//     document.querySelector('.blue').addEventListener('click', () => {
//       var str = 'This is a number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     });
//   }
// }

// box66.clickMe();


// function Person(name) {
//   this.name = name;
// }

// //ES5
// Person.prototype.myFriends5 = function(friends) {

//   var arr = friends.map(function(el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));

//   console.log(arr);

// }

// var friends = ['Katerina', 'Julia', 'Chris'];
// new Person('Brian').myFriends5(friends);

// //ES6
// Person.prototype.myFriends6 = function(friends) {

//   var arr = friends.map(el => `${this.name} is friends with ${el}`);
//   console.log(arr);

// }

// new Person('Brian').myFriends6(friends);




//Lecture: Destructuring

//ES5
// var brian = ['Brian', 36];
// var name = john[0];
// var age = john[1];

//ES6
// const [name, age] = ['Brian', 36];
// console.log(name);
// console.log(age);

// const obj = {
//   firstName: 'Brian',
//   lastName: 'Toll'
// };

// const {firstName: a, lastName: b} = obj;
// console.log(a + b);



// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1984);
// console.log(age);
// console.log(retirement);


// Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

// //ES5

// // var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxesArr5.forEach(function(cur) {
// //     cur.style.backgroundColor = 'dodgerblue';
// // });

// //ES6
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// //ES5
// // for(var i = 0; i < boxesArr5.length; i++) {

// //     if(boxesArr5[i].className === 'box blue') {
// //         continue;
// //     }

// //     boxesArr5[i].textContent = 'I changed to blue!';
// // }

// //ES6
// for (const cur of Array.from(boxes)) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!';
// }


// //ES5
// var ages = [12, 17, 8, 21, 14, 11];

// // var fullAge = ages.map(function(cur) {
// //     return cur >= 18;
// // });
// // console.log(fullAge);

// // console.log(fullAge.indexOf(true));
// // console.log(ages[fullAge.indexOf(true)]);


// //ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));



// Lecture: Spread Operator

// function addFourAges (a, b, c, d) {
//     return a+b+c+d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);

// console.log(sum2);


// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);


// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// console.log(all);

// Array.from(all).forEach(cur => cur.style.color = 'purple');


// Lecture: REST Parameters

//ES5
// function isFullAge5() {
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     console.log(argsArr);
//     argsArr.forEach(function(cur) {
//         console.log((2020 - cur) >= 18);
//     });
// }

// isFullAge5(1984, 1992, 1993, 2001, 2004);


//ES6
// function isFullAge6(...years) {
//     console.log(years);
//     years.forEach(cur => console.log((2020-cur) >= 18));
// }

// isFullAge6(1984, 1992, 1993, 2001, 2004);


//ES5
// function isFullAge5(limit) {
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     console.log(argsArr);
//     argsArr.forEach(function(cur) {
//         console.log((2020 - cur) >= limit);
//     });
// }

// isFullAge5(21, 1984, 1992, 1993, 2001, 2004);


//ES6
// function isFullAge6(limit, ...years) {
//     console.log(years);
//     years.forEach(cur => console.log((2020-cur) >= limit));
// }

// isFullAge6(21, 1984, 1992, 1993, 2001, 2004);




// Lecture: Default parameters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'american' : nationality = nationality;
    
//     this.firstName = firstName;
//     this.lastname = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


//ES6

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american' ) {
//     this.firstName = firstName;
//     this.lastname = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');




// Lecture: Maps

// New Key - Value data structure in ES6
// Any primitive can be key or even function or objects as keys


// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer!');
// question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)) {
//     console.log('has works');
// }

//question.clear();

//question.forEach((value, key) => console.log(`${key}: ${value}`));

// for (let [key, value] of question.entries()) {

//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
    
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));




// Lecture: Classes

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var brian5 = new Person5('Brian', 1984, 'strategist');


// //ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hello');
//     }
// }

// const brian6 = new Person6('Brian', 1984, 'strategist');

// Person6.greeting();




// Lecture: Classes with Subclasses

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var brianAthlete5 = new Athlete5('Brian', 1984, 'basketball', 4, 4);

// brianAthlete5.calculateAge();
// brianAthlete5.wonMedal();


// //ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }

}

const brianAthlete6 = new Athlete6('Brian', 1984, 'basketball', 4, 4);

brianAthlete6.calculateAge();
brianAthlete6.wonMedal();