let students = [
  {
    name: 'Bob',
    age: 51,
    isMarried: true,
    scores: 85
  },

  {
    name: 'Fanny',
    age: 37,
    isMarried: false,
    scores: 102
  },

  {
    name: 'Emma',
    age: 16,
    isMarried: true,
    scores: 166
  },

  {
    name: 'Alex',
    age: 45,
    isMarried: false,
    scores: 33
  },
  {
    name: 'Denn',
    age: 21,
    isMarried: false,
    scores: 121
  },
  {
    name: 'Candy',
    age: 13,
    isMarried: false,
    scores: 165
  }
]

let users = {
  name: 'Bob',
  age: 51,
  firends: ['Mike', 'John', 'Stan']
}

// 1. Сделайте поверхностную копию объекта users
console.log('// 1. Сделайте поверхностную копию объекта users')
let newUsers = { ...users }
console.log(users)

//2. Проверка равенства
console.log('//2. Проверка равенства')
console.log(users === newUsers) //FALSE
console.log(users.firends === newUsers.firends) //TRUE, т.к. копируется ссылка

//3. Полная глубокая копия объекта user
console.log('//3. Полная глубокая копия объекта user')
let deepCopyUser = JSON.parse(JSON.stringify(users))
console.table(deepCopyUser)

//4. Проверка глубокой копии
console.log('//4. Проверка глубокой копии')
console.log(users === deepCopyUser) //FALSE
console.log(users.firends === deepCopyUser.firends) //FALSE, т.к. у поверхностной копии копируется ссылка, в данном случае создается новый объект.

//5. Глубокая копия массива Studets (map)
console.log('//5. Глубокая копия массива Studets (map)')
let deepCopyStudents = students.map(item => item)

// deepCopyStudents = JSON.parse(JSON.stringify(students))
console.table(deepCopyStudents)

//6. Сортировка по алфавиту копии deepCopyStudents
console.log('//6. Сортировка по алфавиту копии deepCopyStudents')
let sortByNames = JSON.parse(JSON.stringify(students))
sortByNames = sortByNames.sort((a, b) => (a.name < b.name ? -1 : 1))
console.table(sortByNames)

//7. Сортировка по успеваемости
console.log('//7. Сортировка по успеваемости')
let sortByScores = JSON.parse(JSON.stringify(students))
sortByScores = sortByScores.sort((a, b) => b.scores - a.scores)
console.table(sortByScores)

//8. Сформировать массива студентов, у которых более 100 баллов
console.log('//8. Сформировать массива студентов, у которых более 100 баллов')
let bestStudents = JSON.parse(JSON.stringify(students))
bestStudents = bestStudents.filter(item => {
  return item.scores > 100
})
console.table(bestStudents)

//9. Получите массив (splice) из трех лучших студентов из массива deepCopyStudents (splice)
console.log(
  '//9. Получите массив (splice) из трех лучших студентов из массива deepCopyStudents (splice)'
)
let topStudents = deepCopyStudents
  .sort((a, b) => b.scores - a.scores)
  .splice(0, 3)
console.table(topStudents)
console.table(deepCopyStudents)

//10. Объедините массива студентов так, чтобы получилась исходная версия
console.log(
  '//10. Объедините массива студентов так, чтобы получилась исходная версия'
)
let newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.table(newDeepCopyStudents)

//11. Сформируйте массив холостых студентов
console.log('//11. Сформируйте массив холостых студентов')
let notMarriedStudents = newDeepCopyStudents.filter(item => !item.isMarried)
console.table(notMarriedStudents)

//12. Сформируйте массив имен студентов
console.log('//12. Сформируйте массив имен студентов')
let studentsNames = newDeepCopyStudents.map(item => item.name)
console.table(studentsNames)

//13. Сформируйте строку из имен студентов, разделеных: запятой, пробелом
console.log(
  '//13. Сформируйте строку из имен студентов, разделеных: запятой, пробелом'
)
let namesWithSpaces = studentsNames.join(' ')
let namesWithCommas = studentsNames.join(', ')
console.log(namesWithSpaces)
console.log(namesWithCommas)

//14. Добавьте каждому студенту свойство  isStudent со значение "true"
console.log(
  '//14. Добавьте каждому студенту свойство  isStudent со значение "true"'
)
let trueStudents = students.map(item => ({ ...item, isStudent: true }))
console.table(trueStudents)

//15. Alex женился, измените массив соответствующим образом через map
console.log(
  '//15. Alex женился, измените массив соответствующим образом через map'
)
let studentsWithMarriesAlex = students.map(item =>
  item.name === 'Alex' ? { ...item, isMarried: true } : { ...item }
)
console.table(studentsWithMarriesAlex)

//16. Вывести студента emma в отдельную переменную
console.log('//16. Вывести студента emma в отдельную переменную')
let emma = students.find(item => item.name === 'Emma')
console.log(emma)

//17. Найти студента с самым высоким баллом
console.log('//17. Найти студента с самым высоким баллом')
let bestStudent = students.reduce((acc, item) =>
  acc > item.scores ? acc : item.scores
)
console.log(bestStudent)

//18. Найти сумму баллов всех студентов
console.log('//18. Найти сумму баллов всех студентов')
let scoresSum = students.reduce((acc, currentValue) => {
  return (acc += currentValue.scores)
}, 0)
console.log(scoresSum)

//18. Написать функцию addStudent, которая принимает параметром массив студентов
// и добавляет каждому из них свойство "friends"
// значением которых является массив ИМЕН всех остальных студентов, за исключением имени
// самого студента

const addFriends = (students) => {
  return students.map(st => {
    return {
      ...st,
      friends: students.map(st => st.name).filter(name => name !== st.name)
    }
  })
}

console.log(addFriends(students))
//code
