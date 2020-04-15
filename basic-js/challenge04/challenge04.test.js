const sut = require('./challenge04.js');


describe("test", () =>{
        test("test",() =>{
            expect(sut("exam")).toBe("exam test")
        })

    
        test("if invalid", ()=>{
            expect(sut("test")).toBe("test")
        })
    

    })