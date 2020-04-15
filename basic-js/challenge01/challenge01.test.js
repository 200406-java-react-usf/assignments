//jest test goes here i guess

const sut = require('./challenge01.js');


describe("test leapyear", () =>{
    test("If multiple of 4 is passed",() =>{
        expect(sut(2020)).toBe("It's a leap year!")
    })

 
    test("If not a multiple of 4 is false", ()=>{
        expect(sut(2001)).toBe("It is not a leap year")
    })


})

    
