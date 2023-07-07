if(process.argv.length < 4){
    console.log("erreur");
    process.exit(1);
}
for(let i = process.argv.length -1; i >= 2; i--){
    console.log(process.argv[i]);
}