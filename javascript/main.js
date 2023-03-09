var numbers = [];

for (let i = 0; i < 8; i++) {
  let a = true,
      n;
  while(a) {
    n = Math.floor(Math.random() * 100) + 1;
    a = numbers.includes(n);
  }
  numbers.push(n);
}
numbers.forEach(number=>document.write(number+"<br>"));
console.log(numbers);