import { Solar } from "../src/galactic.js"

describe('Solar class', () => {
  let mySolar;
  beforeEach(() => {
    mySolar = new Solar()
  })
  
  test('Solar class should exist', () => {
    expect(mySolar).toBeDefined();
  })

  test('Solar should have age property', () => {
    expect(mySolar.age).toBeUndefined();
  })

  test('Solar should haved lifeExpectancy property', () => {
    expect(mySolar.lifeExpectancy).toBeUndefined();
  })

  test('Solar should have a yearsLeft property', () => {
    expect(mySolar.yearsLeft).toBeDefined();
  })

  test('Solar has getEarthYears method', () => {
    expect(mySolar.getEarthYears).toBeDefined();
  })
})

