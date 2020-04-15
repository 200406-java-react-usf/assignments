
const sut = require('./challenge02.js');


describe("email validation", () =>{
        test("if valid",() =>{
            expect(sut('Someone@gmail.com')).toBe(true)
        })

    
        test("if invalid", ()=>{
            expect(sut("willnotgiveyouanemail,@(^)&.6$5you")).toBe(false)
        })
    
    })