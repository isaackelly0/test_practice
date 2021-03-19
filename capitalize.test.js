const cap = require('./capitalize');
test('capitalizes first letter in a string', () => {
    expect(cap("string")).toEqual("String");
    expect(cap("string")).not.toBe("string");

});