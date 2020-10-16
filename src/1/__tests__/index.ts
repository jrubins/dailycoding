import { doNumbersAddToK, doNumbersAddToKNaive } from '..'

test('naive solution works', () => {
  expect(doNumbersAddToKNaive([10, 15, 3, 7], 17)).toEqual(true)
  expect(doNumbersAddToKNaive([10, 15, 3, 7], 24)).toEqual(false)
})

test('fast solution works', () => {
  expect(doNumbersAddToK([10, 15, 3, 7], 17)).toEqual(true)
  expect(doNumbersAddToK([10, 15, 3, 7], 24)).toEqual(false)
})
