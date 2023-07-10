if (process.argv.length <3) {
    console.log("Nombre d'argument insuffisant");
    process.exit(1);
}

var elementRecherche = process.argv[process.argv.length -1];
var tableau = process.argv.slice(2, process.argv.length -1);

var index = tableau.indexOf(elementRecherche);

if (index !== -1){
    console.log(index)
} else {
    console.log(-1)
}