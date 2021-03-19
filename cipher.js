const cipher = input => {
    let output = ''
    let amount = 3
    for(let i = 0; i < input.length; i++){
        let c = input[i];
        if(c.match(/[a-z]/i)){
            let code = input.charCodeAt(i)
            //uppercase letters
            if(code >= 65 && code <= 90){
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }
            //lowercase letters
            else if(code >= 97 && code <= 122){
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        output += c
    }
    return output;
}
module.exports = cipher;