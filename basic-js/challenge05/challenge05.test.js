const sut = require('./challenge05.js');


describe("test", () =>{
        test("shifts positive",() =>{
            expect(sut("A",1)).toBe("B")
        })

     
        test("shifts negative", ()=>{
            expect(sut("B",-1)).toBe("A")
        })
    

    })