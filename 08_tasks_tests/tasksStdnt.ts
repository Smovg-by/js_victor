// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму.

export function sum (...nums: Array<any>): number {
  //...здесь пишем код.
  const sum = nums.reduce((acc, item) => {
    return acc + item
  })
  // В return стоит "заглушка", чтоб typescript не ругался
  return sum
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType (a: number, b: number, c: number): string {
  //...здесь пишем код.

  if (a === b && b === c) {
    return '10'
  } else if (
    (a === b || b === c || a === c) &&
    a + b > c &&
    b + c > a &&
    a + c > b
  ) {
    return '01'
  } else if (a + b > c && b + c > a && a + c > b) {
    return '11'
  } else {
    return '00'
  }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum (number: number): number {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  let res = number
    .toString()
    .split('')
    .map(item => Number(item))
    .reduce((acc, item) => {
      return acc + item
    })
  return res
}

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  //...здесь пишем код.

  let evenSumm = arr
    .filter((item, index) => index % 2 === 0)
    .reduce((acc, item) => acc + item)

  let oddSumm = arr
    .filter((item, index) => index % 2 !== 0)
    .reduce((acc, item) => acc + item)

  return evenSumm > oddSumm
  // В return стоит "заглушка", чтоб typescript не ругался
}

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг не будет выступать за пределы
// квадрата и false в противном случае. Центры фигур совпадают.

export function isSquareGreater (areaCr: number, areaSq: number): boolean {
  //...здесь пишем код.
  let circDiam = Math.sqrt(areaCr / Math.PI) * 2
  let SqSideLength = Math.sqrt(areaSq)

  if (circDiam <= SqSideLength) {
    return true
  } else {
    return false
  }

  // В return стоит "заглушка", чтоб typescript не ругался
  // return true
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList (amountOfMoney: number): Array<number> {
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
  let resArr = []
  let money = amountOfMoney

  for (let i = 0; i < banknotes.length; i++) {
    while (money >= banknotes[i]) {
      money = money - banknotes[i]
      resArr.push(banknotes[i])
    }
  }
  return resArr
}
