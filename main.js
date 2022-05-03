"use strict";

// //EASY
// const todayExercise = (e) => {
//   const exercise = (e) => {
//     return `Today's exercise: ${e}`;
//   };
//   return exercise;
// };
// const run = todayExercise();
// const swim = todayExercise();
// console.log(swim("swimming"));
// console.log(run("running"));

// //MEDIUM
// const pizzaCutter = (pizzaSlices) => {
//   const sharePizza = (numofPeople) => {
//     return `Each person gets ${pizzaSlices / numofPeople} slices of pizza`;
//   };
//   return sharePizza;
// };

// const pizza = pizzaCutter(8);
// console.log(pizza(2));
// console.log(pizza(3));

// //HARD
// const secured = () => {
//   const retrieve = () => {
//     const pii = {
//       name: "Anthony",
//       ssn: 123456789,
//       getName: function () {
//         return this.name;
//       },
//     };
//     return pii.getName();
//   };
//   return retrieve();
// };

// const nameOnly = secured();
// console.log(nameOnly);

//VERY HARD

let Person = function (name, job, age) {
  this.name = name;
  this.job = job;
  this.age = age;
};
Person.prototype.exercise = function () {
  console.log("Running is fun! - said no one ever");
};
Person.prototype.fetchJob = function () {
  console.log(`${this.name} is a ${this.job}!`);
};

let human = new Person("Anthony", "Student", 20);

console.log(human.fetchJob());

let Programmer = function (name, job, age, languages, busy) {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = busy;
};

// Programmer.prototype.completeTask

let myProgrammer = new Programmer("Carley", "Manager", 27, "Spanish", true);

Programmer.prototype = Object.create(Person.prototype);

console.log(myProgrammer);
