function findEvenNumber(n) {
  if (n % 2 !== 0) return -1;
  let temp = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      //   console.log(i);
      temp.push(i);
    }
  }
  //   for (let j = 0; j < temp.length; j++) {
  //     console.log(temp[j]);
  //   }
  return temp;
}
console.log(findEvenNumber(9));
