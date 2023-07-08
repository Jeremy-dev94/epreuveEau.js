function capitalizeWord(sentence){
    var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
    var word = words[i]
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return words.join(' ');
}
var inputString = process.argv.slice(2).join(' ');

    if(!inputString){
      console.log("erreur")
      process.exit(1);
}
var result = capitalizeWord(inputString);
console.log(result);

