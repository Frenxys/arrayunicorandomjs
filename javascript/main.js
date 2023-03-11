var numbers = [];
for (let i = 0; i < 20; i++) {
  let n;
  do{
    n = Math.floor(Math.random() * 49) + 1;
  }while(numbers.includes(n))
  numbers.push(n);
}
numbers.forEach(number=>document.write(number+"<br>"));
console.log(numbers);