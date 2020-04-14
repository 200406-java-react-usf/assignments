
const sut = require('./challenge03.js');


describe("if a letter is a space instead", () =>{
        test("if valid",() =>{
            expect(sut("Hello","H")).toBe(" ello")
        })

    }, ()=>{
        test("if invalid"), ()=>{
            expect(sut("Hello","e")).toBe("H llo")
        }
    }

)