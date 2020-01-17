function sum(...numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function avg(...numbers) {
    console.log(sum(...numbers) / numbers.length);
    return sum(...numbers) / numbers.length;
    
}

export default avg;