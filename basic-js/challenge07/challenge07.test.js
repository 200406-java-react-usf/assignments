const sut = require('./challenge07.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut(3)).toBe(2)
        })

    }, ()=>{
        test("if invalid"), ()=>{
            expect(sut("uhh")).toBe(1)
        }
    }

)