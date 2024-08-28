// Test data with current food portions
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Calculate recommended food portion and add it to each dog object
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Find Sarah's dog and log whether it's eating too much or too little
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const sarahEatingHabit = sarahDog.curFood > sarahDog.recommendedFood * 1.1
    ? 'too much' 
    : sarahDog.curFood < sarahDog.recommendedFood * 0.9 
    ? 'too little' 
    : 'okay';

console.log(`Sarah's dog is eating ${sarahEatingHabit}.`);

// 3. Create arrays for owners of dogs eating too much and too little
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach(dog => {
    if (dog.curFood > dog.recommendedFood * 1.1) {
        ownersEatTooMuch.push(...dog.owners);
    } else if (dog.curFood < dog.recommendedFood * 0.9) {
        ownersEatTooLittle.push(...dog.owners);
    }
});

// 4. Log messages for each array
console.log(`${[...new Set(ownersEatTooMuch)].join(' and ')}'s dogs eat too much!`);
console.log(`${[...new Set(ownersEatTooLittle)].join(' and ')}'s dogs eat too little!`);

// 5. Check for any dog eating exactly the recommended amount
const isEatingExactlyRecommended = dogs.some(dog => 
    dog.curFood === dog.recommendedFood
);
console.log(isEatingExactlyRecommended); // true or false

// 6. Check for any dog eating an okay amount
const isEatingOkayAmount = dogs.some(dog => {
    return dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9;
});
console.log(isEatingOkayAmount); // true or false

// 7. Create an array of dogs eating an okay amount
const okayDogs = dogs.filter(dog => {
    return dog.curFood <= dog.recommendedFood * 1.1 && dog.curFood >= dog.recommendedFood * 0.9;
});

console.log(okayDogs); // Array of dogs eating an okay amount

// 8. Create a shallow copy and sort by recommended food portion
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs); // Sorted array of dogs by recommended food portion
