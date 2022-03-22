function printArray(n) {
  let numbers = [];
  for (let i = 0; i < n; i++) {
    do {
      let num = Math.floor(Math.random() * n) + 1;
      p = numbers.includes(num);
      if (!p) {
        numbers.push(num);
      }
    } while (p);
  }
  for (let j = 1; j <= numbers.length; j++) {
    console.log(numbers[j - 1]);
  }
}

printArray(100);
