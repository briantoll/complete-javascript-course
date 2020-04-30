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

