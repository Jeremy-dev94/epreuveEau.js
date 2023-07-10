if(process.argv.length < 3) {
    console.log(error);
    process.exit(1)
}

const numbers = process.argv.slice(2).map(arg => {
    const num = parseFloat(arg);
    if(isNaN(num)) {
        console.log("l'argument n'est pas un nombres");
        process.exit(1);
    }
    return num;
});

let minDiff = Infinity;

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        const diff = Math.abs(numbers[i] - numbers[j])
        if(diff < minDiff){
            minDiff = diff;
        }
    }
}
console.log(minDiff);