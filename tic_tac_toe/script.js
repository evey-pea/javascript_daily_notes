/*   ***Global Variables***   */

// Player Data
let player = "X";

// Game Data

// Disables game interactivity when true; default false
let gameOver = false;

// Rows with block 'id' fields for checking for winner
const rowScoringIds = [
    [ "block_0", "block_1", "block_2" ],
    [ "block_3", "block_4", "block_5" ],
    [ "block_6", "block_7", "block_8" ],
    [ "block_0", "block_3", "block_6" ],
    [ "block_1", "block_4", "block_7" ],
    [ "block_2", "block_5", "block_8" ],
    [ "block_0", "block_4", "block_8" ],
    [ "block_6", "block_4", "block_2" ]
];
// Storing values from within blocks
let blockContents = {
    "block_0" : null,
    "block_1" : null,
    "block_2" : null,
    "block_3" : null,
    "block_4" : null,
    "block_5" : null,
    "block_6" : null,
    "block_7" : null,
    "block_8" : null,
};

// document references
const gameAnnounce = document.getElementById("winner");
const allBlocks = Object.keys(blockContents)


/*   ***Helper Methods***   */

// Check if any properties of an object is null
const hasNull = (target) => {
    for (let member in target) {
        if (target[member] === null)
        return true;
    }
    return false;
}

// Append element class names
const addBlockClass = (block, classDesc) => {
    document.getElementById(`${block}`).className += ` ${classDesc}`;
};


/*   ***Game Functions***   */

// Switches the player's value between "X" and "O"
const togglePlayer = (played) => {
    if (played === "X") {
        player = "O";
    } else {
        player = "X";
    }
    gameAnnounce.innerHTML = `Player ${player}'s turn...`
    return player;
};

// Sets a value for a block in the game board, updates record and checks for a winner
const setBlock = (blockId, value) => {
    if (blockContents[blockId] === null && gameOver === false) {
        let block = document.getElementById(blockId);
        addBlockClass(blockId, "occupied");
        block.innerHTML = `${value}`;
        blockContents[blockId] = `${value}`;
        checkRows();
    } else if (gameOver === false) {
        alert("That block is taken! Please pick a different one.. ")
    };    
};

// checks the contents of the blocks against the 2D array of rows to see if there is a winner
const checkRows = () => {
    // Iterate through row
    for (let row of rowScoringIds) {
        // Create an array of values mapped from the blockContent object 
        const rowContent = row.map(block => blockContents[`${block}`]); 
        //Initialise an object to record the score
        const rowScoring = {"X": 0, "O": 0};
        // Iterate through the row of values and increment the score of "X" and "O" values
        for (content of rowContent) {
            if (content === "X") {
                rowScoring["X"] += 1;
            } else if (content === "O") {
                rowScoring["O"] += 1;
            } else {
                continue;
            }
        }
        // Check if the row has a score of '3' and declare a winner
        if (rowScoring["X"] === 3){
            winnerDeclare("Player X", row);
            return;
        } else if (rowScoring["O"] === 3) {
            winnerDeclare("Player O", row);
            return;
        } else {
            // If neither X or O scored '3' then move to the next row
            continue;
        }
    };
    // Check if there are any blocks unmarked remaining
    if (hasNull(blockContents)) {
        // If some block are unoccupied, toggle player and keep playing
        togglePlayer(player);
    } else {
        // If all block occupied and no winner, declare no one wins
        winnerDeclare("No one", []);
    }
};

// Declare the winner or if none has won
const winnerDeclare = (player, winningRow) => {
    gameOver = true;
    gameAnnounce.innerHTML = `${player} wins!`;
    resetBlockClass();
    // Set all non-winning blocks to gray out
    let nonWinningBlocks = allBlocks.filter(block => !winningRow.includes(block));;
    nonWinningBlocks.forEach(block => {
        addBlockClass(block,"noWin");
    }); 
    
    // Set winning row blocks to highlight
    winningRow.forEach(block => {
        addBlockClass(block," win");
    });
};

// I dunno what this does, to be safe, just dont touch it...
const resetGame = () => {
    // Reset the div 'block' contents on the page 
    allBlocks.forEach(blockId => {
        const block = document.getElementById(`${blockId}`)
        block.className = "block available"
        block.innerHTML = null;        
    });
    // Reset the winner declaration
    gameAnnounce.innerHTML = `Player ${player} goes first... `;
    // Reset the blockContents index to prevent data seeping from one game to the next
    blockContents = {
        "block_0" : null,
        "block_1" : null,
        "block_2" : null,
        "block_3" : null,
        "block_4" : null,
        "block_5" : null,
        "block_6" : null,
        "block_7" : null,
        "block_8" : null,
    };
    gameOver = false;
}

const resetBlockClass = () => {
    allBlocks.forEach(blockId => {
        document.getElementById(`${blockId}`).className = "block";
    })
}

/*   ***Event Listners***   */

// Add event listener to reset button
document.getElementById("reset").addEventListener('click', event => {
    event.stopPropagation();
    event.preventDefault();
    resetGame();
})

// Add event listeners once page loads fully
window.addEventListener('load', (event) => {
    // Uses global variable to find all elements that are blocks in the game
    allBlocks.forEach(blockId => {
        const block = document.getElementById(`${blockId}`)
        // Adds a listener to each one
        block.addEventListener('click', event => {
            // Prevent unwated side effects
            event.preventDefault();
            event.stopPropagation();
            // Function executed upon event
            setBlock(`${block.id}`, player)
        });
    });
});

