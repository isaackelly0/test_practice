const cipher = require('./cipher');
test("test if cipher handles basic chars", ()=>{
    expect(cipher("abc")).toEqual("def");
})
test("test case sensitivity", ()=>{
    expect(cipher("DEF")).toBe("GHI");
})
test("test wrapping from z to a", ()=>{
    expect(cipher("Z")).toBe("C");
})
test("test punctuation", ()=>{
    expect(cipher(",;&*!3a")).toEqual(",;&*!3d");
})