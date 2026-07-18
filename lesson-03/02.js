// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
  if (num % 2 === 0) {
    let a = true
    return a
  } else {
    let b = false
    return b
  }
}
let status = isEven(22)
console.log(status)