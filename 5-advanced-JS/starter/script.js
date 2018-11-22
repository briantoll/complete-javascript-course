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

var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var brian = Object.create(personProto);
brian.name = 'Brian';
brian.yearOfBirth = 1984;
brian.job = 'manager';

var jane = Object.create(personProto,
{
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
