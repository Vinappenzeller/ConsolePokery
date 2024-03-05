// Import functions from game.js
const { selectPlayerName, selectOpponents, takeBets, cashOut } = require('./game.js');

// Import setupBalances function from bank.js
const { setupBalances } = require('./bank.js');

// Testing purposes
const testOpponents = ["Tricia", "Burr", "Anomalisa"];

// Set up balances
const [opponentsBalance, playerBalance] = setupBalances(testOpponents);
console.log("Starting Balance:");
console.log("Player:", playerBalance);
console.log("Opponents:", opponentsBalance);

// Call functions from game.js to start the game
(async () => {
    // Select player name
    const playerName = await selectPlayerName();
    console.log('Welcome, ' + playerName + '!');

    // Select opponents
    const selectedOpponents = await selectOpponents(testOpponents);
    console.log('You will be playing against:', selectedOpponents);

    // Test betting
    const testPlayerInput = "lowblind";
    const testOpponentInput = ["lowblind", "allin", "bigblind"];

    const [testPlayerBalance2, testOpponentBalance2, testpot2] = takeBets(testPlayerInput, testOpponentInput, playerBalance, opponentsBalance);
    console.log("Betted balance:");
    console.log("Pot:", testpot2);
    console.log("Player Balance:", testPlayerBalance2);
    console.log("Opponents Balance:", testOpponentBalance2);

    // Test cashing out
    const testPlayerWin = false;
    const testOpponentWin = [false, true, false];

    const [testPlayerBalance3, testOpponentBalance3, testpot3] = cashOut(testPlayerBalance2, testOpponentBalance2, testpot2, testPlayerWin, testOpponentWin);
    console.log("Final result:");
    console.log("Pot:", testpot3);
    console.log("Player Balance:", testPlayerBalance3);
    console.log("Opponents Balance:", testOpponentBalance3);
})();
