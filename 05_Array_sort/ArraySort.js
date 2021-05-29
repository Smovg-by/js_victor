// -----BUBBLE SORT

const array = [45, 34, 99, 17, 2, 55, 84]

//при одном проходе цикла всплывает в конец массива самое больше число.
// нам нужно сделать arr.length проходов по масиву, но внутренний цикл можно уменить на k, т.к.
// массив правее индекса k уже отсортирован

function bubbleSort (arr) {
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - 1 - k; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]] //использование квадратных скобок
        // ниже устаревший синтаксис переприсваивания переменной. Выше современный
        // let temp = arr[i]
        // arr[i] = arr[i + 1]
        // arr[i + 1] = temp
      }
    }
  }
  return arr
}

let bubbleSortedArray = bubbleSort(array)

console.log(bubbleSortedArray)

// -----METHOD SORT

// сам array.sort() сортирует согласно таблице по возрастанию

// если нужно сделать сортировку по ВОЗРАСТАНИЮ

let increasingArray = array.sort((a, b) => a - b)

console.log(increasingArray)

// если нужно сделать сортировку по УБЫВАНИЮ

let decreasingArray = array.sort((a, b) => b - a)

console.log(decreasingArray)

// сортируем МАССИВ ОБЪЕКТОВ

let items = [
  { name: 'Cindy', age: 23 },
  { name: 'Ashan', age: 44 },
  { name: 'Bobb', age: 2 },
  { name: 'Dan', age: 99 },
  { name: 'Eatn', age: 19 }
]

let itemsSort1 = [...items]
itemsSort1 = itemsSort1.sort((a, b) => (a.name < b.name ? -1 : 1))

console.log(itemsSort1)

let itemsSort2 = [...items]
itemsSort2 = itemsSort2.sort((a, b) => a.age - b.age)

console.log(itemsSort2)
let itemsSort3 = [...items]
itemsSort3 = itemsSort3.sort((a, b) => b.age - a.age)

console.log(itemsSort3)
