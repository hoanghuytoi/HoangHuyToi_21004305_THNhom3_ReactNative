function calcAverageHumanAge(ages) {
    // Step 1: Convert dog ages to human ages
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    
    // Step 2: Exclude dogs that are less than 18 human years old
    const adultDogs = humanAges.filter(humanAge => humanAge >= 18);
    
    // Step 3: Calculate the average human age of all adult dogs
    const averageHumanAge = adultDogs.length > 0 
        ? adultDogs.reduce((sum, age) => sum + age, 0) / adultDogs.length 
        : 0; // Return 0 if no dogs are left
    
    return averageHumanAge;
}

// Test data 1
const data1 = [5, 2, 4, 1, 15, 8, 3];
const average1 = calcAverageHumanAge(data1);
console.log(`Average human age for dataset 1: ${average1}`); // Output average for data1

// Test data 2
const data2 = [16, 6, 10, 5, 6, 1, 4];
const average2 = calcAverageHumanAge(data2);
console.log(`Average human age for dataset 2: ${average2}`); // Output average for data2
