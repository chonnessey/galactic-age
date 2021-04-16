export class SolarAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.earthDays = 365;
    this.yearsLeft = this.lifeExpectancy - this.age;
  }

  // getMecruryAge() 
}