const sut = require('./challenge10');


let testing = [`CTesting this string`, "ATesting this string",
    "hTesting this string", "nTesting this string",
    "329043248320234", 329043248320234, ['a', 'e', 'i', 'o', 'u']
];

let expectations = ["B", 'A', 'C', 'D', 'E', "Please input a valid String data type",
    "Please input a valid String data type"
]
for (let i = 0; i < testing.length; i++) {
    test("will output A, B, C, D, E depending on criteria", () => {
        expect(sut.firstCharacter(testing[i])).toBe(expectations[i]);
    })
}