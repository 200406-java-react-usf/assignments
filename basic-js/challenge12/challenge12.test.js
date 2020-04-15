

const sut = require('./challenge12.js');


describe("test", () =>{
        test("if x win h",() =>{
            expect(sut(3)).toBe(2)
        })

    }, 
        test("if invalid"), ()=>{
            expect(sut("uhh")).toBe(1)
        }
    , test("if x win h",() =>{
        expect(sut(3)).toBe(2)
    })

)









