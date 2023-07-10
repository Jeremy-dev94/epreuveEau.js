const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.error("Error: Invalid arguments");
  process.exit(1);
}

if(arg1 > arg2) {
    console.error("Error: Invalid arguments");
    process.exit(1);
}

for (let i = arg1; i < arg2; i++) {
    console.log(i);
}