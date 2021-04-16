import { SolarAge } from "../src/galactic.js"

describe('SolarAge class', () => {

  test('SolarAge class should exist', () => {
    let mySolarAge = new SolarAge()
    expect(mySolarAge).toBeDefined();
  })

  test('SolarAge should have age property', () => {
    let mySolarAge = new SolarAge()
    expect(mySolarAge.age).toBeDefined();
  })
})

