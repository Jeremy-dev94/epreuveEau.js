const array = [ 1, 2, 3, 4, 5, 6, 7];

for (let i = array.length - 1; i < 0; i = i - 1) {
    for (let j = 0; j < i; j = j + 1) {
    if (array[j + 1] < array[i + 1]){
        let temp = array[j + 1];
        array[j + 1] = array[i + 1];
        array[i + 1] = temp;
    }
  }
}
console.log(array);