const analyze = input => {
    let min;
    let max;
    let total = 0;
    for(let i = 0; i < input.length; i++){
        if(min && max){
            if(min > input[i]){
                min = input[i];
            }else if(max < input[i]){
                max = input[i];
            }
        }else{
            min = input[i];
            max = input[i];
        }
        total += input[i];
    }
    let average = total / input.length;
    return {
        average: average,
        min: min,
        max: max,
        length: input.length
    }
}
module.exports = analyze;