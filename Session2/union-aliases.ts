type Combine = number | string; // union type
type ConversionDescriptor = 'as-number' | 'as-text'; // union type

function combine(
    input1: Combine, 
    input2: Combine, 
    resultConversion: ConversionDescriptor
) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    } 
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}

const combineAges = combine(20, 30, 'as-number');
console.log(combineAges);  

const combineStringAges = combine('20', '30', 'as-number');
console.log(combineStringAges);  


const combineNames = combine('woong', 'kim', 'as-text');
console.log(combineNames);  
