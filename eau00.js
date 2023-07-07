for(let i = 0; i <= 9; i++){
    for(let j = i + 1; j <= 9; j++){
        for(let k = j + 1; k <= 9; k++){
            if( i !== j && j !== i && k !== i){
                console.log(`${i}${j}${k}`);
            }
        }
    }
}