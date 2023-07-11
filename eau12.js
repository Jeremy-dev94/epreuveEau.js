const array = [ 1, 2, 3, 4, 5, 6, 7,];

for let i = 0; i < array.length; i++) {
    for j = i + 1; j < array.length; j++) {
        console.log(array[i] + array[j]);
    }
}