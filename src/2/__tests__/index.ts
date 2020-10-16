import { getArrProductsNaive, getArrProductsNoDivision } from '..'

test('naive solution works', () => {
  expect(getArrProductsNaive([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
})

test('fast solution works', () => {
  expect(getArrProductsNoDivision([1, 2, 3, 4, 5])).toEqual([
    120,
    60,
    40,
    30,
    24,
  ])
  expect(getArrProductsNoDivision([3, 5, 2, 2, 2])).toEqual([
    40,
    24,
    60,
    60,
    60,
  ])
})
