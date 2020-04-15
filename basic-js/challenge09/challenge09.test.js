const sut = require('./challenge09.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut(["swedrfsd","arrayOfStrings","short"])).toBe(1)
        })

     
        test("if invalid", ()=>{
            expect(sut(["uhh"])).toBe(0)
        })
    

    })