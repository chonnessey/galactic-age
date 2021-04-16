import { Solar } from "../src/galactic.js"

describe('Solar class', () => {

  test('Solar class should exist', () => {
    let mySolar = new Solar()
    expect(mySolar).toBeDefined();
  })

  test('Solar should have age property', () => {
    let mySolar = new Solar()
    expect(mySolar.age).toBeUndefined();
  })
})

