// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 1000;
const persent = 15;
const result = 2000;

let count = 0

while (count < 20) {
  sum = sum + sum * (persent / 100)
  count = count + 1
}

console.log(sum, count)