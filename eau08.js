const inputNbr = process.argv[2];

if(!inputNbr){
    console.log("erreur d'argument");
    process.exit(1)
}

const regex = /^\d+$/;
const onlyNbr = regex.test(inputNbr);

console.log(onlyNbr);
