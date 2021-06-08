export function sum (a: number, b: number): number {
  return a + b
}

//оператор rest, означает, что может быть много чисел, без точного количества
export function rest (...numbers: Array<number>) {
  return numbers.reduce((acc, item) => acc + item, 0)
}

export type ActionType = { type: 'sum' | 'sub' | 'mult' | 'div' }

export function calc (a: number, b: number, action: ActionType) {
  switch (action.type) {
    case 'sum':
      return a + b
    case 'sub':
      return a - b
    case 'mult':
      return a * b
    case 'div':
      return a / b

    default:
      break
  }
}

export type StudentType = {
  name: string
  isStudent: boolean
  friends: Array<string>
}

export const addFriends = (
  students: Array<StudentType>
): Array<StudentType> => {
  return students.map(st => {
    return {
      ...st,
      friends: students.map(st => st.name).filter(name => name !== st.name)
    }
  })
}
