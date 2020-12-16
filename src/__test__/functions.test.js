import { sum, sayHello } from '../functions'

test('sum can add two numbers', () => {
  const result = sum(5, 5)
  expect(result).toBe(10)
})

test('sum can add a number and a number that is a string', () => {
  const result = sum('2', 5)
  expect(result).toBe(7)
})

test('sum notifies user if invalid data is provided', () => {
  const result = sum('Billy', 9)
  expect(result).toBe('Data is invalid')
})

test('sayHello does not say goodbye', () => {
  expect(sayHello()).not.toBe('goodbye')
})

test('sayHello says hello', () => {
  expect(sayHello()).toBe('hello')
})
