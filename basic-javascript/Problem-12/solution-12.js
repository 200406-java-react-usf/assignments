//input = 3x3 matrix
//let testInput = [
//  ["A1", "A2", "A3"],
//  ["B1", "B2", "B3"],
//  ["C1", "C2", "C3"],
//];
const ticTacToe = (input) => {
  let xWins = false,
    oWins = false,
    hasBlanks = false;

  //Win condition
  let A1 = input[0][0],
    A2 = input[0][1],
    A3 = input[0][2];
  let B1 = input[1][0],
    B2 = input[1][1],
    B3 = input[1][2];
  let C1 = input[2][0],
    C2 = input[2][1],
    C3 = input[2][2];

  //Checking for blank spots on the game board.
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      //Checking board for nothing else but an X O or a " "
      if (input[i][j] !== "X" && input[i][j] !== "O" && input[i][j] !== " ") {
        throw Error("Invaild Charater on board.");
      }
      if (input[i][j] === "") {
        hasBlanks = true;
      }
    }
  }

  //Check for win coditions
  //Top Row
  if (A1 == A2 && A2 == A3) {
    if (A1 === "X") {
      xWins = true;
    } else if (A1 == "O") {
      oWins = true;
    }
  }
  //Middle Row
  if (B1 == B2 && B2 == B3) {
    if (B1 === "X") {
      xWins = true;
    } else if (B1 == "O") {
      oWins = true;
    }
  }
  //Bottom Row
  if (C1 == C2 && C2 == C3) {
    if (C1 === "X") {
      xWins = true;
    } else if (C1 == "O") {
      oWins = true;
    }
  }
  //Column Left
  if (A1 == B1 && B1 == C1) {
    if (A1 === "X") {
      xWins = true;
    } else if (A1 == "O") {
      oWins = true;
    }
  }
  //Column middle
  if (A2 == B2 && B2 == C2) {
    if (A2 === "X") {
      xWins = true;
    } else if (A2 == "O") {
      oWins = true;
    }
  }
  //Column right
  if (A3 == B3 && B3 == C3) {
    if (A3 === "X") {
      xWins = true;
    } else if (A3 == "O") {
      oWins = true;
    }
  }
  //Diagonal right conor to bottom left conor
  if (A3 == B2 && B2 == C1) {
    if (A3 === "X") {
      xWins = true;
    } else if (A3 == "O") {
      oWins = true;
    }
  }
  //Diagonal left conor to bottom right conor
  if (A1 == B2 && B2 == C3) {
    if (A1 === "X") {
      xWins = true;
    } else if (A1 == "O") {
      oWins = true;
    }
  }

  //Game outcomes
  //invalid, tie, in progress, x wins, or o wins
  if (oWins && xWins) {
    return "Invalid game result!";
  } else if (!oWins && !xWins && hasBlanks) {
    return "Game in progress...no winner yet";
  } else if (!oWins && !xWins && !hasBlanks) {
    return "It is a cats game!";
  } else if (oWins) {
    return "O is the winner";
  } else if (xWins) {
    return "X is the winner";
  } else {
    return "The condition does not exist";
  }
};
module.exports = {
  ticTacToe,
};

//userBoard = [
//  ["X", "O", "X"],
//  ["O", "X", "O"],
//  ["O", "X", "O"],
//];
//console.log(ticTacToe(userBoard));
