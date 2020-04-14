const sut = require('./challenge06.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut("Test")).toBe("This String has 1 vowels")
        })

    }, ()=>{
        test("if invalid"), ()=>{
            expect(sut("LR")).toBe("No vowels here")
        }
    }

)