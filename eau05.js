if(process.argv.length > 4 ){
    console.log("erreur");
    process.exit(1);
}

const str1 = process.argv[2];
const str2 = process.argv[3];

const result = str1.includes(str2);
console.log(result);

