const calculator = require('./calculator');
test("Test if calculator adds two numbers", ()=>{
    expect(calculator.add(2,3)).toEqual(5)
})
test("Test if calculator subtracts", ()=>{
    expect(calculator.subtract(5,2)).toEqual(3)
})
test("Test if calculator multiplies two numbers", ()=>{
    expect(calculator.multiply(5,3)).toEqual(15)
})
test("Test if calculator can divide", ()=>{
    expect(calculator.divide(100,10)).toEqual(10)
})