<<<<<<< HEAD
var numbers = []
=======
var numbers = [];
>>>>>>> d34bfc2798a14d0208a901e536b8a5e64a5c4122
for (let i = 0; i < 20; i++) {
  let a = true,n;
  while(a) {
    n = Math.floor(Math.random() * 49) + 1;
    a = numbers.includes(n);
  }
  numbers.push(n);
}
numbers.forEach(number=>document.write(number+"<br>"));
console.log(numbers);