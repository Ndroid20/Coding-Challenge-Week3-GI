"use strict";

//EASY
const todayExercise = (e) => {
  const exercise = (e) => {
    return `Today's exercise: ${e}`;
  };
  return exercise;
};
const run = todayExercise();
const swim = todayExercise();
console.log(swim("swimming"));
console.log(run("running"));

//MEDIUM
const pizzaCutter = (pizzaSlices) => {
  const sharePizza = (numofPeople) => {
    return `Each person gets ${pizzaSlices / numofPeople} slices of pizza`;
  };
  return sharePizza;
};

const pizza = pizzaCutter(8);
console.log(pizza(2));
console.log(pizza(3));

//HARD
const secured = () => {
  const retrieve = () => {
    const pii = {
      name: "Anthony",
      ssn: 123456789,
      getName: function () {
        return this.name;
      },
    };
    return pii.getName();
  };
  return retrieve();
};

const nameOnly = secured();
console.log(nameOnly);

//VERY HARD
