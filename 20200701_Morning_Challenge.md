# Morning Challenge 20200701

## Conways Game of Life

Good morning ladies and gents, do we have a treat for you today. 

The rules are simple. You are presented with 2d array, containing 1's and 0's. 1's represent live cells, 0's represent dead cells.

Your task is to find what the next generation of the 2d array looks like based on the following rules:

   - If a living cell has fewer than 2 neighbours, it dies.

   - If a living cell has 2 or 3 neighbours, it continues to live.

   - If a living cell has greater than 3 neighbours, it dies.

   - If a dead cell has exactly 3 neighbours, it comes to life.


Good luck and have fun!

Note that a cell can have up to 8 neighbours (diagonal cells are neighbours!)

## Test Criteria

```javascript
const conwaysGameOfLife = require('./conwaysGameOfLife').conwaysGameOfLife;

describe("Conway's Game Of Life", function () {
  describe("Testing One Generation", function () {
    it("Should correctly return the next generation of the game", function () {
      let game = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 0]
      ]
      expect(conwaysGameOfLife(game)).toEqual([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0]
      ])
    })
  })
})
```

## My solution

```javascript
function conwaysGameOfLife(game) {
  // Initialise a new 2D for storage of the value of the next generation
  let nextGeneration = [];
  for (let i = 0; i < game.length; i++) {
    let row = [];
    for (let j = 0; j < game[0].length; j++) {
      row.push(0);
    }
    nextGeneration.push(row);
  }

  // Iterate through all locations in game square (main logic controller)
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game.length; j++) {
      //   find list of neighbouring cells
      let neighbourList = findNeighbours([i, j]);
      // count number of neighbours
      let neighbourCount = neighbourValueCounter(neighbourList);

      //Based on the number of neighbours, set the value of the cell position
      nextGeneration[i][j] = liveOrDie(game[i][j], neighbourCount);
    }
  }

  // Accepts array of two values and produces an array of 'neighbours'
  function findNeighbours(location) {
    let output = [];
    neighbourRange = [-1, 0, 1];

    // Map the number range by nesting each dimension
    // Map the row
    neighbourRange.map((neighbourI) => {
      let i = location[0];
      if (i + neighbourI >= 0) {
        // map the poisition in the row
        neighbourRange.map((neighbourJ) => {
          let j = location[1];
          //  Keep the values within the game squares
          if (
            j + neighbourJ >= 0 &&
            j + neighbourJ < game[i].length &&
            i + neighbourI >= 0 &&
            i + neighbourI < game.length
          ) {
            // Add the location if it is a neighbour of the location, but not the location itself
            if (
              (i + neighbourI != i && j + neighbourJ != j) ||
              (i + neighbourI === i && j + neighbourJ != j) ||
              (i + neighbourI != i && j + neighbourJ === j)
            ) {
              output.push([i + neighbourI, j + neighbourJ]);
            }
          }
        });
      }
    });
    return output;
  }

  // Accepts array of two values 'neighbour' and produces a value from the 'neighbour' in the game
  function cellValue(location) {
    let i = location[0];
    let j = location[1];
    return game[i][j];
  }

  // Accepts an array of locations and returna count of the neighbours
  function neighbourValueCounter(neighbourList) {
    let neighbourCount = 0;
    neighbourList.forEach((neighbour) => {
      if (cellValue(neighbour) === 1) {
        neighbourCount++;
      }
    });
    return neighbourCount;
  }

  //   Accepts the value of the cell and a value of number of neighbours and applies Conway's Game of Life rules to toggle whether the postion lives or dies
  function liveOrDie(cellValue, neighbourCount) {
    //  If a living cell has fewer than 2 neighbours, it dies
    if (neighbourCount < 2) {
      return 0;
    }
    // If a living cell has 2 or 3 neighbours, it continues to live
    if (cellValue === 1 && (neighbourCount === 2 || neighbourCount === 3)) {
      return 1;
    }
    // If a living cell has greater than 3 neighbours, it dies
    if (cellValue === 1 && neighbourCount > 3) {
      return 0;
    }
    // If a dead cell has exactly 3 neighbours, it comes to life
    if ((cellValue === 0) & (neighbourCount === 3)) {
      return 1;
    } else {
      return cellValue;
    }
  }
  // Final output of hte next genration of the game
  return nextGeneration;
}
```

## Console Output

Console Output was gained by using the below addition to the solution to run locally with node.js as the interpreter

```javascript
let game = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0],
];

console.log(game);
console.log(conwaysGameOfLife(game));

```

```terminal
$ node 20200701_Morning_Challenge.js
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0 ],
  [ 0, 1, 1, 0, 0 ],
  [ 0, 0, 1, 0, 1 ],
  [ 0, 0, 1, 0, 0 ]
]
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 0 ],
  [ 0, 1, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 1, 0 ]
]
```