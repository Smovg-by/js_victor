import { addFriends, calc, rest, StudentType, sum } from './tasks'

test('Summ should be 5', () => {
  //1. Тестовые данные
  const a: number = 2
  const b: number = 3
  //2. Выполнение тестового кода с тестовыми данными
  const result = sum(a, b)
  //3. Ожидание определенного результата
  expect(result).toBe(5)
})

test('Summ should be 18', () => {
  expect(rest(3, 5)).toBe(8)
  expect(rest(4, 2, 1)).toBe(7)
  expect(rest(1, 2, 3, 4)).toBe(10)
})

test('Sum of 3 and 5 should be 8', () => {
  expect(calc(3, 5, { type: 'sum' })).toBe(8)
  expect(calc(3, 5, { type: 'sub' })).toBe(-2)
  expect(calc(3, 5, { type: 'mult' })).toBe(15)
  expect(calc(15, 5, { type: 'div' })).toBe(3)
})

const students: Array<StudentType> = [
  { name: 'John', isStudent: true, friends: [] },
  { name: 'Stan', isStudent: false, friends: [] },
  { name: 'Mike', isStudent: true, friends: [] }
]
const stundetsWithFriends: Array<StudentType> = [
  { name: 'John', isStudent: true, friends: ['Stan', 'Mike'] },
  { name: 'Stan', isStudent: false, friends: ['John', 'Mike'] },
  { name: 'Mike', isStudent: true, friends: ['John', 'Stan'] }
]

test('Add friends to students', () => {
  expect(addFriends(students)).toEqual(stundetsWithFriends)
})
