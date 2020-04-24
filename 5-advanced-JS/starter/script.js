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
//This is the callback function
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

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Brian');

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

// (function(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(4);

// Closures

// function retirement(retirementAge) {
//   var a = ' years left until retirement.'
//   return function(yearOfBirth) {
//     var age = 2020 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1984);
// retirementGermany(1984);
// retirementIceland(1984);
// retirement(66)(1984);

// function interviewQuestion(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//       console.log('What subject do you teach, ' + name + '?');
//     } else {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Brian');

// var teacherQuestion = interviewQuestion('teacher')('Katerina');

// Bind, call, and apply

// var brian = {
//   name: 'Brian',
//   age: 36,
//   job: 'strategist',
//   presentation: function(style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' 
//       + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//     } else if (style === 'friendly') {
//       console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' 
//       + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay);
//     }
//   }
// };

// var katerina = {
//   name: 'Katerina',
//   age: 27,
//   job: 'manager'
// };

// brian.presentation('formal','morning');
// brian.presentation.call(katerina, 'friendly', 'afternoon');

//Apply Example - first argument is 'this' and then an array of the rest
//Won't work for presentation method since it is not expecting an array
//brian.presentation.apply(katerina, ['friendly', 'afternoon']);

// var brianFriendly = brian.presentation.bind(brian, 'friendly');
// brianFriendly('evening');
// brianFriendly('afternoon');

// var katerinaFormal = brian.presentation.bind(katerina, 'formal');
// katerinaFormal('evening');
// katerinaFormal('morning');

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// //This is the callback function
// function calculateAge(el) {
//   return 2018 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// (function() {

//   'use strict';

  
//   //Question Constructor
//   var Question = function(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   }

//   Question.prototype.displayQuestion =
//   function() {
//     console.log(this.question);
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' +this.answers[i]);
//     }
//   }

//   Question.prototype.checkAnswer =
//   function(answer) {
//     if (answer === this.correctAnswer) {
//       console.log('Correct!');
//     } else {
//       console.log('Wrong. Try Again');
//     }
//   }

//   var question1 = new Question('Question 1', ['Wrong', 'Wrong', 'Correct'], 2);
//   var question2 = new Question('Question 2', ['Wrong', 'Correct', 'Wrong'], 1);
//   var question3 = new Question('Question 3', ['Correct', 'Wrong', 'Wrong'], 0);

//   var questions = [question1, question2, question3];

//   var questionIndex = Math.floor(Math.random() * questions.length);

//   questions[questionIndex].displayQuestion();

//   var answer = parseInt(prompt('Enter an answer'));

//   questions[questionIndex].checkAnswer(answer);

// }());

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {

  'use strict';

  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.displayQuestion =
  function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' +this.answers[i]);
    }
  }

  Question.prototype.checkAnswer =
  function(answer, callback) {
    var score;
    if (answer === this.correctAnswer) {
      console.log('Correct!');
      score = callback(true);
    } else {
      console.log('Wrong. Try Again');
      score  = callback(false);
    }

    this.displayScore(score);
  }

  Question.prototype.displayScore =
  function(score) {
    console.log('Score = ' + score);
  }

  var question1 = new Question('Question 1', ['Wrong', 'Wrong', 'Correct'], 2);
  var question2 = new Question('Question 2', ['Wrong', 'Correct', 'Wrong'], 1);
  var question3 = new Question('Question 3', ['Correct', 'Wrong', 'Wrong'], 0);
  var questions = [question1, question2, question3];

  function score() {
    var userScore = 0;
    return function(correct) {
      if (correct) {
        userScore++;
      }
      return userScore;
    }
  }

  var keepScore = score();

  function nextQuestion() {

    var questionIndex = Math.floor(Math.random() * questions.length);

    questions[questionIndex].displayQuestion();

    var answer = prompt('Enter an answer');

    if(answer !== 'exit') {
      questions[questionIndex].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();

}());
