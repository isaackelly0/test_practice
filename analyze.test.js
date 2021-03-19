const analyze = require('./analyze');
test("Analysis of a number array's qualities", ()=>{
    const object = analyze([1,2,3,4,5]);
    object == {
        average: 3,
        min: 1,
        max: 5,
        length: 5
    }
})
test("Let's try with negatives", ()=>{
    const object = analyze([-5,-10,-15]);
    object == {
        average: -10,
        min: -15,
        max: -5,
        length: 3
    }
})
test("Variety of numbers this time", ()=>{
    const object = analyze([4, 76, 90, 100, 2, 12, 555, -2200, -1]);
    object == {
        average: -151.3,
        min: -2200,
        max: 555,
        length: 9
    }
})