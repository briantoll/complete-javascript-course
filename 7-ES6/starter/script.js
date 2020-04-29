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

let firstName = 'Brian';
let lastName = 'Toll';
const yearOfBirth = 1984;
function calcAge(year) {
    return 2020 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + 
    lastName + '. He was born in ' + 
    yearOfBirth + '. Today, he is ' + 
    calcAge(yearOfBirth) + ' years old.');

//ES6 - template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('B'));
console.log(n.endsWith('l'));
console.log(n.includes('an To'));
console.log(`${firstName} `.repeat(5));