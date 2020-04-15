const sut = require('./challenge08.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut([1,2],[1,2,3])).toStrictEqual([ 2, 4, 3 ])
        })

    
        test("if invalid", ()=>{
            expect(sut("uhh")).toBe("PLease give me 2 arrays")
        })
    

    })