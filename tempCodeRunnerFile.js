// app.js

// Import functions from game.js
const { selectPlayerName, selectOpponents, takeBets, cashOut } = require('./game.js');

// app.js

// Import setupBalances function from bank.js
const { setupBalances } = require('./bank.js');

// Testing purposes
const testOpponents = ["Tricia", "Burr", "Anomalisa"];

// Set up balances
const [opponentsBalance, playerBalance] = setupBalances(testOpponents);
console.log("Starting Balance:");
console.log("Player:", playerBalance);
console.log("Opponents:", opponentsBalance);


// Set up balance

// Test betting
const testPlayerInput = "lowblind";
const testOpponentInput = ["lowblind", "allin", "bigblind"];

const [testPlayerBalance2, testOpponentBalance2, testpot2] = takeBets(testPlayerInput, testOpponentInput, playerBalance, opponentsBalance);
console.log("betted balance");
console.log(testpot2);
console.log(testPlayerBalance2);
console.log(testOpponentBalance2);

// Test cashing out
const testPlayerWin = false;
const testOpponentWin = [false, true, false];

const [testPlayerBalance3, testOpponentBalance3, testpot3] = cashOut(testPlayerBalance2, testOpponentBalance2, testpot2, testPlayerWin, testOpponentWin);
console.log("final result");
console.log(testpot3);
console.log(testPlayerBalance3);
console.log(testOpponentBalance3);

// Call functions from game.js to start the game
(async () => {
    const playerName = await selectPlayerName();
    console.log('Player name:', playerName);
    
    selectOpponents();
})();
