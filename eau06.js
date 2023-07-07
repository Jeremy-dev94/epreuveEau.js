const inputString = process.argv[2];

if (!inputString) {
  console.log("error");
  process.exit(1);
}

const outputString = inputString.replace(/[a-zA-Z]/g, (match, index) => {
  return index % 2 === 0 ? match.toUpperCase() : match.toLowerCase();
});

console.log(outputString);
