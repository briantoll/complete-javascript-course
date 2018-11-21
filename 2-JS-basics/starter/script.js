/**************************/
// Variables and data types
/**************************/

// var firstName = 'Brian';
// console.log(firstName);
//
// var lastName = 'Toll';
// var age = 34;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Developer'
// console.log(job);

/*************************************/
// Variable mutation and type coercion
/*************************************/

// var firstName = 'Brian';
// var age = 34;
//
// // Type coercion
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'Developer';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// // Variable Mutation
// age = 'thirty four';
// job = 'Manager';
//
// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/*************************************/
// Basic Operators
/*************************************/

// var now, yearBrian, yearKaterina;
// now = 2018;
// ageBrian = 34;
// ageKaterina = 25;
//
// // Math operators
// yearBrian = now - 34;
// yearKaterina = now - 25;
//
// console.log(yearKaterina);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);
//
// // Logical operators
// var brianOlder = ageBrian > ageKaterina;
// console.log(brianOlder);
//
// // typeof operator
// console.log(typeof brianOlder);
// console.log(typeof ageBrian);
// console.log(typeof 'Brian is older than Katerina');
// var x;
// console.log(typeof x);

/*************************************/
// Operator precedence
/*************************************/

// var now = 2018;
// var yearBrian = 1984;
// var fullAge = 21;
//
// var isFullAge = now - yearBrian >= fullAge; // true
// console.log(isFullAge);
//
// var ageBrian = now - yearBrian;
// var ageKaterina = 25;
// var average = (ageBrian + ageKaterina) / 2;
// console.log(average);
//
// Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 26
// console.log(x, y);
//
// // More Operators
//
// x *=2;
// console.log(x);
// x += 10;
// console.log(x);
// x--;
// console.log(x);

/*************************************/
// CODING CHALLENGE 1
/*************************************/

// var brianMass, katerinaMass, brianHeight, katerinaHeight;
//
// brianMass = 68.0389;
// katerinaMass = 47.6272;
// brianHeight = 1.75;
// katerinaHeight = 1.65;
//
// function BMI (mass, height) {
//   return mass / (height*height);
// }
//
// brianBMI = BMI(brianMass, brianHeight);
// katerinaBMI = BMI(katerinaMass, katerinaHeight);
//
// console.log(brianBMI, katerinaBMI);
// console.log('Is Katerina\'s BMI higher than Brian\'s?', katerinaBMI > brianBMI);

/*************************************/
// If / Else Statement
/*************************************/

// var firstName = 'Brian';
// var civilStatus = 'divorced';
//
// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is not married.');
// }
//
// var isMarried = false;
//
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' is not married.');
// }
//
// var brianMass, katerinaMass, brianHeight, katerinaHeight;
//
// brianMass = 68.0389;
// katerinaMass = 47.6272;
// brianHeight = 1.75;
// katerinaHeight = 1.65;
//
// function BMI (mass, height) {
//   return mass / (height*height);
// }
//
// brianBMI = BMI(brianMass, brianHeight);
// katerinaBMI = BMI(katerinaMass, katerinaHeight);
//
// if (katerinaBMI > brianBMI) {
//   console.log('Katerina\'s BMI is higher than Brian\'s.');
// } else {
//   console.log('Brian\'s BMI is higher than Katerina\'s.');
// }

/*************************************/
// Boolean Logic
/*************************************/

// var firstName = 'Brian';
// var age = 25;
//
// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20){
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30){
//   console.log(firstName + ' is a young man.');
// }
// else {
//   console.log(firstName + ' is a man.');
// }

/*******************************************/
// The Ternary Operator and Switch Statement
/*******************************************/

// var firstName = 'Brian';
// var age = 34;

// Ternary Operator
// age >= 21 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//
// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// Switch Statement

// var job = 'developer';
// switch(job) {
//   case 'teacher':
//     console.log(firstName + ' is a teacher.');
//     break;
//   case 'driver':
//     console.log(firstName + ' is a driver.');
//     break;
//   case 'designer':
//     console.log(firstName + ' is a designer.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
// }

// var age = 25;
//
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man.');
//     break;
//   default:
//     console.log(firstName + ' is a man.');
// }

/************************************************/
// Truthy and Falsy values and equality operators
/************************************************/

// falsy values: undefined, null, 0, '', NaN
// truthy values: anything NOT falsy

// var height = 23;
//
// if (height || height === 0 || height === '') {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined');
// }
//
// // Equality operators
// if (height == '23') {
//   console.log('The == operator does type coercion!');
// }

/*************************************/
// CODING CHALLENGE 2
/*************************************/

// var averageScoreBrian, averageScoreKaterina;
//
// averageScoreBrian = (89 + 120 + 103) / 3;
// averageScoreKaterina = (116 + 94 + 123) / 3;
//
// switch (true) {
//   case averageScoreBrian === averageScoreKaterina:
//     console.log('It\'s a tie');
//     break;
//   case averageScoreBrian > averageScoreKaterina:
//     console.log('Brian\'s team wins');
//     break;
//   case averageScoreBrian < averageScoreKaterina:
//     console.log('Katerina\'s team wins');
//     break;
// }
//
// averageScoreBrian = (105 + 120 + 103) / 3;
// averageScoreKaterina = (116 + 94 + 96) / 3;
//
// switch (true) {
//   case averageScoreBrian === averageScoreKaterina:
//     console.log('It\'s a tie');
//     break;
//   case averageScoreBrian > averageScoreKaterina:
//     console.log('Brian\'s team wins');
//     break;
//   case averageScoreBrian < averageScoreKaterina:
//     console.log('Katerina\'s team wins');
//     break;
// }
//
// averageScoreBrian = (105 + 120 + 103) / 3;
// averageScoreKaterina = (105 + 120 + 103) / 3;
//
// switch (true) {
//   case averageScoreBrian === averageScoreKaterina:
//     console.log('It\'s a tie');
//     break;
//   case averageScoreBrian > averageScoreKaterina:
//     console.log('Brian\'s team wins');
//     break;
//   case averageScoreBrian < averageScoreKaterina:
//     console.log('Katerina\'s team wins');
//     break;
// }

/*************************************/
// Functions
/*************************************/

// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }
//
// var ageBrian = calculateAge(1984);
// var ageKaterina = calculateAge(1992);
// var ageJulia = calculateAge(1993);
//
// console.log(ageBrian, ageKaterina, ageJulia);
//
// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   retirement > 0 ? console.log(firstName + ' retires in ' + retirement + ' years.') : console.log(firstName + ' is already retired.');
// }
//
// yearsUntilRetirement(1984, 'Brian');
// yearsUntilRetirement(1992, 'Katerina');
// yearsUntilRetirement(1993, 'Julia');
// yearsUntilRetirement(1946, 'Mike');

/*************************************/
// Function Statements and Expressions
/*************************************/

// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches coding';
//     case 'driver':
//       return firstName + ' drives for Lyft';
//     case 'designer':
//       return firstName + ' designs websites';
//     default:
//       return firstName + ' does something else';
//   }
// }
//
// console.log(whatDoYouDo('teacher', 'Brian'));
// console.log(whatDoYouDo('driver', 'Katerina'));
// console.log(whatDoYouDo('retired', 'Mike'));

/*************************************/
// Arrays
/*************************************/

// var names = ['Brian', 'Katerina', 'Julia'];
// var years = new Array(1984, 1992, 1993);
//
// console.log(names[2]);
// console.log(names.length);
//
// names[1] = 'Chris';
// names[names.length] = 'David';
// console.log(names);
// console.log(names.length);
//
// var brian = ['Brian', 'Toll', 1984, 'developer', false];
//
// brian.push('black');
// brian.unshift('Mr.');
// console.log(brian);
//
// brian.pop();
// brian.pop();
// brian.shift();
// console.log(brian);
//
// console.log(brian.indexOf(1984));
//
// var isDesigner = brian.indexOf('designer') === -1 ? 'Brian is not a designer' : 'Brian is a designer';
//
// console.log(isDesigner);

/*************************************/
// CODING CHALLENGE 3
/*************************************/

// function tipCalculator(bill) {
//   var tipPercentage;
//   if (bill < 50) {
//     tipPercentage = .2;
//   } else if (bill >= 50 && bill <= 200) {
//     tipPercentage = .15;
//   } else {
//     tipPercentage = .1;
//   }
//   return tipPercentage*bill;
// }
//
// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
//
// var totalBills = [bills[0]+tips[0],
//                   bills[1]+tips[1],
//                   bills[2]+tips[2]];
//
// console.log(tips);
// console.log(totalBills);

/*************************************/
// Objects and properties
/*************************************/

// var brian = {
//   firstName: 'Brian',
//   lastName: 'Toll',
//   birthYear: 1984,
//   family: ['Katerina', 'Julia,', 'Schwenk'],
//   job: 'developer',
//   isMarried: false
// };
// console.log(brian.firstName);
// console.log(brian['lastName']);
// var x = 'birthYear';
// console.log(brian[x]);
//
// brian.job = 'designer';
// brian['isMarried'] = true;
// console.log(brian);
//
// var katerina = new Object();
// katerina.firstName = 'Katerina';
// katerina.birthYear = 1984;
// katerina['lastName'] = 'Patouhas';
// console.log(katerina);

/*************************************/
// Objects and methods
/*************************************/

// var brian = {
//   firstName: 'Brian',
//   lastName: 'Toll',
//   birthYear: 1984,
//   family: ['Katerina', 'Julia,', 'Schwenk'],
//   job: 'developer',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };
//
// brian.calcAge();
// console.log(brian);

/*************************************/
// CODING CHALLENGE 4
/*************************************/

// var brian = {
//   firstName: 'Brian',
//   lastName: 'Toll',
//   mass: 68.0389,
//   height: 1.75,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height*this.height);
//     return this.BMI;
//   }
// };
//
// var schwenk = {
//   firstName: 'Chris',
//   lastName: 'Schwenk',
//   mass: 79.3787,
//   height: 1.78,
//   calcBMI: function() {
//     this.BMI = this.mass / (this.height*this.height);
//     return this.BMI;
//   }
// };
//
// if (brian.calcBMI() > schwenk.calcBMI()) {
//   console.log(brian.firstName + brian.BMI + ' and ' + schwenk.firstName + schwenk.BMI);
// } else if (brian.BMI === schwenk.BMI) {
//   console.log('SAME' + brian.BMI + schwenk.BMI);
// } else {
//   console.log(schwenk.firstName + schwenk.BMI + ' and ' + brian.firstName + brian.BMI);
// }

/*************************************/
// Loops and iteration
/*************************************/

// for loop
// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// }
//
// var brian = ['Brian', 'Toll', 1984, 'developer', false];
// for (var i = 0; i < brian.length; i++) {
//   console.log(brian[i]);
// }
//
// while loop
// var i = 0;
// while (i < brian.length) {
//   console.log(brian[i]);
//   i++;
// }

// continue and break statements
// var brian = ['Brian', 'Toll', 1984, 'developer', false];
// for (var i = 0; i < brian.length; i++) {
//   if (typeof brian[i] !== 'string') continue;
//   console.log(brian[i]);
// }
//
// for (var i = 0; i < brian.length; i++) {
//   if (typeof brian[i] !== 'string') break;
//   console.log(brian[i]);
// }

// var brian = ['Brian', 'Toll', 1984, 'developer', false];
// for (var i = brian.length - 1; i >= 0; i--) {
//   console.log(brian[i]);
// }

/*************************************/
// CODING CHALLENGE 5
/*************************************/

var brian = {
  fullName: 'Brian Toll',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

var katerina = {
  fullName: 'Katerina Patouhas',
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .1;
      } else {
        percentage = .25;
      }

      // Add results to the corresponding arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum+=tips[i];
  }
  return sum / tips.length;
}

brian.calcTips();
katerina.calcTips();

brian.average = calcAverage(brian.tips);
katerina.average = calcAverage(katerina.tips);

console.log(brian, katerina);
