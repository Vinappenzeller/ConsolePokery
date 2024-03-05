// game.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let playerName;
let selectedOpponents = [];
let roundActive = true;
let playerActive = true;
let opponentHands;
let playerHand;
let winner;

function selectPlayerName() {
    return new Promise((resolve, reject) => {
        rl.question('Please enter your name: ', (name) => {
            resolve(name);
        });
    });
}

function selectOpponents() {
    const historicFigures = ['Abraham Lincoln', 'Cleopatra', 'Napoleon Bonaparte', 'Joan of Arc', 'Albert Einstein'];
    console.log("Select your opponents from historic figures:");

    for (let i = 0; i < historicFigures.length; i++) {
        console.log(`${i + 1}. ${historicFigures[i]}`);
    }

    let opponentCount;
    rl.question("Enter the number of opponents you want to play against: ", (count) => {
        opponentCount = parseInt(count);
        if (isNaN(opponentCount) || opponentCount < 1 || opponentCount > historicFigures.length) {
            console.log("Invalid input. Please enter a valid number.");
            selectOpponents(); // Ask again for valid input
            return;
        }

        // Randomly select opponents
        for (let i = 0; i < opponentCount; i++) {
            let randomIndex = Math.floor(Math.random() * historicFigures.length);
            selectedOpponents.push(historicFigures[randomIndex]);
            historicFigures.splice(randomIndex, 1);
        }

        console.log(`Selected opponents: ${selectedOpponents.join(', ')}`);
        rl.close();
    });
}

module.exports = {
    selectPlayerName,
    selectOpponents
};
