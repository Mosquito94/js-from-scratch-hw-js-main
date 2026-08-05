/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let g = 0; g < array2.length; g++) {
      console.log(array1[i] + " " + array2[g])
      if (array2[g] === array1[i]) {
        console.log(array1[i])
        result.push(array1[i])
      }
    }
  }
  return result
}

// function findCommonElement(array2, value) {
//   for (let g = 0; g < array2.length; g++) {
//     if (array2[g] === value) {
//       return true
//     }
//   }
//   return false
// }

findCommonElements([1, 2, 3], [2, 3, 4])
