const sut = require('./challenge12');
const testCase = [
    [
        // testing that game is a tie 1
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'O']

    ],
    [
        // test middle column win 2
        ['', 'X', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'O']

    ],
    [
        // test right column win 3

        ['X', '', 'O'],
        ['O', 'X', 'O'],
        ['O', 'X', 'O']

    ],
    [
        // test game hasn't finished 4
        ['X', 'O', 'X'],
        ['O', '', 'X'],
        ['O', '', 'O']

    ],
    [
        // test column left 5
        ['O', 'X', 'X'],
        ['O', '', 'O'],
        ['O', 'X', 'X']

    ],
    [
        // test middle row 6
        ['X', '', 'X'],
        ['O', 'O', 'O'],
        ['O', 'X', 'O']
    ],
    [
        // test top row 7

        ['X', 'X', 'X'],
        ['O', 'X', 'O'],
        ['O', '', 'O']
    ],
    [
        // test bottom row 8
        ['X', 'O', 'X'],
        ['O', '', 'X'],
        ['O', 'O', 'O']
    ],
    [
        // cross test 9
        ['X', 'X', 'O'],
        ['O', 'O', 'X'],
        ['O', 'X', 'O']
    ],
    [
        //cross test 10
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X']
    ]
]

const resultCase = ['It was a tie', 'X is the winner', 'O is the winner', "Game in progress, no winner yet", 'O is the winner', 'O is the winner', 'X is the winner',
    'O is the winner', 'O is the winner', 'X is the winner'
]


describe('Testing the tic tac toe function for each result that could be returned', () => {

    for (let i = 0; i < testCase.length; i++) {
        test('testing for a tie', () => {
            expect(sut.ticTacToe(
                testCase[i])).toBe(resultCase[i]);
        });
    }
});