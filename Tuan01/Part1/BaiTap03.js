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
if(averageDolphins > averageKoalas && averageDolphins >= 100){
    console.log("Dolphins win the trophy!");
}else if(averageDolphins < averageKoalas && averageKoalas >= 100){
    console.log("Koalas win the trophy!");
}else if(averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
    console.log("It's a draw!");
}else{
    console.log("No team wins the trophy!");
}