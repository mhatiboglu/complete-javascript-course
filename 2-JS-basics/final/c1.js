/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

var johnMass, johnHeight, markMass, markHeight;
//John's info
johnMass = 80;
johnHeight = 1.7;
//Mark's info
markMass = 95;
markHeight = 1.85;
//Function for Calculate BMI(Body Mass Index)
function bmiCalculate(mass, height) {
  return mass / (height * height);
}

var johnBmi = bmiCalculate(johnMass, johnHeight);
var markBmi = bmiCalculate(markMass, markHeight);

console.log(`Is Mark's BMI higher than John's? ${johnBmi < markBmi}`);
