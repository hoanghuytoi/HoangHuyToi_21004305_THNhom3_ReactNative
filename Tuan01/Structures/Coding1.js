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
  
  // 1. Access Player Arrays from the game object
  const players1 = game.players[0];
  const players2 = game.players[1];
  
  // 2. Goalkeeper and Field Players
  const [gk, ...fieldPlayers] = players1;
  console.log('Goalkeeper:', gk); // 'Neuer'
  console.log('Field Players:', fieldPlayers); // Remaining field players for Bayern Munich
  
  // 3. All Players
  const allPlayers = [...players1, ...players2];
  console.log('All Players:', allPlayers); // Array with all 22 players
  
  // 4. Adding Substitute Players
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log('Final Players1:', players1Final); // Array with original team1 players + substitutes
  
  // 5. Extract Odds from the game object
  const { team1, x: draw, team2 } = game.odds;
  console.log('Odds:', team1, draw, team2); // 1.33, 3.25, 6.5
  
  // 6. Print Goals Function
  function printGoals(...players) {
    console.log(`${players.length} goals were scored.`);
    for (const player of players) {
      console.log(player);
    }
  }
  
  // Test the function with both given players and the `game.scored` array
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);
  
  // 7. Determine the Likely Winner
  team1 < team2 && console.log('Team 1 is more likely to win');
  team2 < team1 && console.log('Team 2 is more likely to win');
  