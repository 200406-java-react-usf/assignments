const sut = require("./solution-12");

describe("Testing for all possible results", () => {
  test("testing invalid error", () => {
    let userBoard = [
      ["A", "B", "C"],
      ["D", "E", "F"],
      ["G", "H", "I"],
    ];
    expect(() => {
      sut.ticTacToe(userBoard);
    }).toThrow();
  });
  test("Cats game (tie)", () => {
    let userBoard = [
      ["X", "O", "X"],
      ["O", " ", "O"],
      ["O", "X", "O"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("It is a cats game!");
  });
  test("Cats game (tie)", () => {
    let userBoard = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("It is a cats game!");
  });
  test("Cats game (tie)", () => {
    let userBoard = [
      ["X", "O", "X"],
      ["O", "O", "O"],
      ["X", "X", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("Invalid game result!");
  });
  test("X is the winner (row 1)", () => {
    let userBoard = [
      ["X", "X", "X"],
      ["O", " ", "O"],
      ["X", "O", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("X is the winner");
  });
  test("X is the winner (row 2)", () => {
    let userBoard = [
      ["O", "X", "O"],
      ["X", "X", "X"],
      ["O", "O", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("X is the winner");
  });
  test("X is the winner (row 3)", () => {
    let userBoard = [
      [" ", " ", "O"],
      ["O", "O", "X"],
      ["X", "X", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("X is the winner");
  });
  test("X is the winner (across 1)", () => {
    let userBoard = [
      ["X", "O", "O"],
      ["O", "X", "X"],
      ["X", "O", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("X is the winner");
  });
  test("O is the winner (across 2)", () => {
    let userBoard = [
      ["X", "X", "O"],
      ["X", "O", "X"],
      ["O", "O", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("O is the winner");
  });
  test("O is the winner (column 1)", () => {
    let userBoard = [
      ["O", " ", "O"],
      ["O", " ", "X"],
      ["O", "X", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("O is the winner");
  });

  test("O is the winner (column 2)", () => {
    let userBoard = [
      ["X", "O", "O"],
      ["X", "O", "X"],
      ["O", "O", "X"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("O is the winner");
  });
  test("O is the winner (column 3)", () => {
    let userBoard = [
      ["O", " ", "O"],
      ["X", "X", "O"],
      ["O", "X", "O"],
    ];
    expect(sut.ticTacToe(userBoard)).toBe("O is the winner");
  });
});
