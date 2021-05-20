// Метод массива REDUCE

// acc хранит в себе результат всех return колл-бек функции
// можно передавать стартовое значение, например 0

let numbers = [1, 5, 9]

// ниже выводим сумму элементов

console.log(
  numbers.reduce((acc, el) => {
    return acc + el
  }, 0)
) // ноль это стартовое значение

// ниже выводим наибольшее занчение из массива

console.log(
  numbers.reduce((acc, el) => {
    return acc > el ? acc : el
  }, 0)
) // ноль это стартовое значение

//Задача: найти и вывести объект студента с именем Alex

let students = [
  {
    name: 'Bob',
    age: 51,
    scores: 85
  },

  {
    name: 'Stan',
    age: 37,
    scores: 102
  },

  {
    name: 'Mike',
    age: 22,
    scores: 85
  },

  {
    name: 'Alex',
    age: 16,
    scores: 115
  }
]

function findAlex (acc, el) {
  if (el.name === 'Alex') {
    acc = el
  }
  return acc
}

students.reduce(findAlex, null)

//Задача: создать массив со студентами, у которых баллы больше 100

getBestStudents.reduce(function getBestStudents (acc, el) {})

//Задача: найти судентов, у которых score больше 100 балоов

function bestStudents (acc, el) {
  if (el.scores > 100) {
    acc.push(el)
  }
  return acc
}

students.reduce(bestStudents, [])

//Задача: добавить каждому студенту по 10 баллов
// здесь надо копировать свойства объекта, иначе изменится исходный объект.
// но можно сначала скопировать объект, затем его изменять.

function addTenPoints (acc, el) {

  acc.push({ ...el, scores: el.scores + 10 })
  return acc
}

students.reduce(addTenPoints, [])
