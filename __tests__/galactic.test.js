import { SolarAge } from "../src/galactic.js"

describe('SolarAge class', () => {
  let mySolarAge;
  beforeEach(() => {
    mySolarAge = new SolarAge(25, 100)
  })

  
  test('SolarAge class should exist', () => {
    expect(mySolarAge).toBeDefined();
  })

  test('SolarAge should have age property with age of 25', () => {
    expect(mySolarAge.age).toEqual(25);
  })

  test('SolarAge should have lifeExpectancy property of 100', () => {
    expect(mySolarAge.lifeExpectancy).toEqual(100);
  })

  test('SolarAge should have a yearsLeft property equal to 75', () => {
    expect(mySolarAge.yearsLeft).toEqual(75);
  })

  test('SolarAge should have earthDays property equal to ', () => {
    expect(mySolarAge.earthDays).toEqual(9125);
  })

  test('SolarAge should have getMercuryAge method', () => {
    expect(mySolarAge.getMercuryAge).toBeDefined();
  })

  test('getMercuryAge method should return users age in mercury and how much time they have left/have lived past', () => {
    const mercuryDays = 88
    expect(mySolarAge.getMercuryAge()).toBeDefined(mercuryAge);
  })

})

