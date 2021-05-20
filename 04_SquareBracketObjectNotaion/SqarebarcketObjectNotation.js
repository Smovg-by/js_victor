// Для определения значения переменной в качестве КЛЮЧА пары ключ-значения в оъект можно использовать
// квадратные скобки(sqare brackets object notation). Также выражение, вписанное в квадратные
// скобки будет выполнено как обычный код.

let id1 = '9yf307hrfipheiowughieirg'
let id2 = 'wekjhleibcu9ph3849054u0jfipd'

let task1 = {
  [id1]: 'String 1',
  [id2]: 'String 2'
}

//вывод: task1

// {
// 9yf307hrfipheiowughieirg: "String 1",
// wekjhleibcu9ph3849054u0jfipd: "String 2"
// }

// -----------------------------------------------------

let obj1 = {
  [3 + 2]: 'string1'
}

//Вывод: obj1

// {
//   5: 'string1'
// }

const tlID_1 = 'dqwd0032r923fjd23d'
const tlID_2 = '12e09jf0923jf90j23'

const tasks = {
  [tlID_1] : [
    {name: "HTML", isDone: true},
    {name: "Redux", isDone: false},
  ],
  [tlID_2] : [
    {name: "Beer", isDone: true},
    {name: "Fish", isDone: false},
  ],
}

// доступ к элементам

tasks[tlID_1][0].name
