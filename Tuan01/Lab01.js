// Coding Challenge #1
//1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
// let markMass = 95;
// let markHeight = 1.88;
// let johnMass = 85;
// let johnHeight = 1.76;

//2. Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

//3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
let markHigherBMI = markBMI > johnBMI;
console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

// Coding Challenge #2
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
//2. Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// Coding Challenge #3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

//1. Calculate the average score for each team, using the test data below
dolphins = [96, 108, 89];
koalas = [88, 91, 110];

let averageDolphins = dolphins.reduce((a, b) => a + b, 0) / dolphins.length;
let averageKoalas = koalas.reduce((a, b) => a + b, 0) / koalas.length;

console.log("Average score of Dolphins: " + averageDolphins);
console.log("Average score of Koalas: " + averageKoalas);

//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that 
//as well (draw means they have the same average score)
if(averageDolphins > averageKoalas){
    console.log("Dolphins win the trophy!");
}else if(averageDolphins < averageKoalas){
    console.log("Koalas win the trophy!");
}else{
    console.log("It's a draw!");
}
//3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a 
//score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
if(averageDolphins > averageKoalas && averageDolphins >= 100){
    console.log("Dolphins win the trophy!");
}else if(averageDolphins < averageKoalas && averageKoalas >= 100){
    console.log("Koalas win the trophy!");
}else{
    console.log("No team wins the trophy!");
}


//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
//Test data:
//§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
//§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
//§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

