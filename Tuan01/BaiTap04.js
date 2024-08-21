// Coding Challenge #4

//Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is
//between 50 and 300. If the value is different, the tip is 20%
//1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement
let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value was " + (bill + tip));

//2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: "The bill was 275, the tip was 41.25, and the total value was 316.25"

