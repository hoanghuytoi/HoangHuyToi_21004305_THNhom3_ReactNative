const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
  // 1. Create an array 'events' of the different game events (no duplicates)
  const events = [...new Set(gameEvents.values())];
  console.log(events); // ["⚽ GOAL", "🔁 Substitution", "🔶 Yellow card", "🔴 Red card"]
  
  // 2. Remove the unfair yellow card from minute 64
  gameEvents.delete(64);
  console.log(gameEvents); // Yellow card at minute 64 is removed
  
  // 3. Compute and log "An event happened, on average, every 9 minutes"
  const time = [...gameEvents.keys()].pop(); // Get the last event time (e.g., 92)
  const average = time / gameEvents.size;
  console.log(`An event happened, on average, every ${average.toFixed(2)} minutes`);
  
  // 4. Loop over 'gameEvents' and log each element, marking whether it's in the first half or second half
  for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
  }
  