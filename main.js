//EASY
const todayExercise = (exercise) => `Today's exercise: ${exercise}`;
console.log(todayExercise("running"));
console.log(todayExercise("swimming"));

//MEDIUM
const cutPizzaSlices = 8;

const sharePizza = (numofPeople) =>
  `Each person gets ${cutPizzaSlices / numofPeople} slices of pizza`;

console.log(sharePizza(2));
console.log(sharePizza(3));
