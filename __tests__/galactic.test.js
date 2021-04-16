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

  test('SolarAge should have lifeExpectancy property', () => {
    expect(mySolarAge.lifeExpectancy).toBeUndefined();
  })

  test('SolarAge should have a yearsLeft property', () => {
    expect(mySolarAge.yearsLeft).toBeDefined();
  })

  test('SolarAge should have earthDays property', () => {
    expect(mySolarAge.earthDays).toBeDefined();
  })

  test('SolarAge should have getMercuryAge method', () => {
    expect(mySolarAge.getMercuryAge).toBeDefined();
  })

  test('getMercuryAge method should return users age in mercury', () => {
    const mercuryDays = 88
    expect(mySolarAge.getMercuryAge()).toBeDefined(mercuryAge);
  })

})

