function fibonacci(n) {
  let a = 0, b = 1, c;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
const n = parseInt(process.argv[2]);

if(n < 0){
    console.log("-1");
    process.exit(1);
}
const result = fibonacci(13);
console.log(result);
