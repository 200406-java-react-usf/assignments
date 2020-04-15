const sut = require('./challenge11.js');


describe("test", () =>{
        test("if valid",() =>{
            expect(sut([1,2,3,5,6,7],[2,1,3,7,6,5])).toBe(true)
        })


        test("if invalid", ()=>{
            expect(sut([1,2,3,5,6,7],[2,1,3,7,6])).toBe(false)
        })
    

})