const sut = require('./challenge06.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut("Test")).toBe(1)
        })

    
        test("if invalid", ()=>{
            expect(sut("LR")).toBe(0)
        })


    })