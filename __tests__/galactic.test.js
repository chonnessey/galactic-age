import { SolarAge } from "../src/galactic.js"

describe('SolarAge class', () => {
  let mySolarAge;
  beforeEach(() => {
    mySolarAge = new SolarAge()
  })
  
  test('SolarAge class should exist', () => {
    expect(mySolarAge).toBeDefined();
  })

  test('SolarAge should have age property', () => {
    expect(mySolarAge.age).toBeUndefined();
  })

  test('SolarAge should haved lifeExpectancy property', () => {
    expect(mySolarAge.lifeExpectancy).toBeUndefined();
  })

  test('SolarAge should have a yearsLeft property', () => {
    expect(mySolarAge.yearsLeft).toBeDefined();
  })

  test('SolarAge should have earthDays property equal to 365', () => {
    expect(mySolarAge.earthDays).toEqual(365);
  })

  test('SolarAge should have getMercuryAge method', () => {
    expect(mySolarAge.getMercuryAge).toBeDefined();
  })

})

