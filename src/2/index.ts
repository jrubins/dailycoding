/**
 * Given an array of integers, return a new array such that each element at index i of the new array is
 * the product of all the numbers in the original array except the one at i.
 *
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 * If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 */
export function getArrProductsNaive(arr: number[]): number[] {
  // The product of all elements would be i0 * i1 * i2 ... * iN. To find the product for each element
  // not including itself, we can simply divide the total product of all numbers in the array by the
  // number at the index of interest.
  let total = 1
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i]
  }

  const productArr: number[] = []
  for (let i = 0; i < arr.length; i++) {
    productArr[i] = total / arr[i]
  }

  return productArr
}

export function getArrProductsNoDivision(arr: number[]): number[] {
  // Without division, we can think of the product at any position of the array as the product
  // of the numbers to the left of the index multiplied by the product of the numbers to the
  // right of the index.
  const leftProducts: number[] = [1]
  for (let i = 0; i < arr.length; i++) {
    leftProducts[i + 1] = arr[i] * leftProducts[i]
  }

  const rightProducts: number[] = [1]
  for (let i = arr.length - 1, j = 1; i > 0; i--, j++) {
    rightProducts[j] = arr[i] * rightProducts[j - 1]
  }

  const productArr: number[] = []
  for (
    let i = 0, j = rightProducts.length - 1;
    i < leftProducts.length, j >= 0;
    i++, j--
  ) {
    productArr[i] = leftProducts[i] * rightProducts[j]
  }

  return productArr
}
