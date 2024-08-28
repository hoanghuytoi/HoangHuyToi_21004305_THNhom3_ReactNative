const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // 1. Loop over the game.scored array and print each player name with goal number
  game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
  });
  
  // 2. Calculate the average odd and log it to the console
  const odds = Object.values(game.odds);
  const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
  console.log('Average odd:', averageOdd);
  
  // 3. Print the 3 odds in a nicely formatted way
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
  }
  
  // 4. Bonus: Create an object called 'scorers'
  const scorers = {};
  
  game.scored.forEach(player => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  
  console.log(scorers);
  