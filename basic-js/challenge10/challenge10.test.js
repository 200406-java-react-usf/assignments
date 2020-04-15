const sut = require('./challenge10.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut("Alfred")).toBe("A")
        })

     
        test("if invalid", ()=>{
            expect(sut("Baatman")).toBe("B")
        })
    

})