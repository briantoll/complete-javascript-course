// Function constructor

// var brian = {
//   name: 'Brian',
//   yearOfBirth: 1984,
//   job: 'manager'
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// };
//
// Person.prototype.lastName = 'Smith';
//
// var brian = new Person('Brian', 1984, 'manager');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// brian.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
//
// console.log(brian.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);




// Object.create

// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };
//
// var brian = Object.create(personProto);
// brian.name = 'Brian';
// brian.yearOfBirth = 1984;
// brian.job = 'manager';
//
// var jane = Object.create(personProto,
// {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' }
// });



// Primitives vs objects

// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b); //mutation doesn't persist to var b
//
// var obj1 = {
//   name: 'Brian',
//   age: 34
// }
// var obj2 = obj1;
// obj1.age = 35;
// console.log(obj1.age);
// console.log(obj2.age); //mutation persists to obj2
//
// // Functions
// var age = 26;
// var obj = {
//   name: 'Katerina',
//   city: 'Athens'
// }
//
// function change(a, b) {
//   a = 24;
//   b.city = 'Philadelphia'
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);



//Passing functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2018 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(rates);

//Functions returings functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log('What subject do you teach, ' + name + '?');
//     }
//   } else {
//     return function(name) {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('John');
// designerQuestion('Brian');
//
// var teacherQuestion = interviewQuestion('teacher')('Katerina');

//IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(4);

// function retirement(retirementAge) {
//   var a = ' years left until retirement.'
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
//
// retirementUS(1984);
// retirementGermany(1984);
// retirementIceland(1984);
//retirement(66)(1984);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Brian');

var teacherQuestion = interviewQuestion('teacher')('Katerina');
