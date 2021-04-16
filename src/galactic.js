export class SolarAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.earthDays = 365 * this.age;
    this.yearsLeft = this.lifeExpectancy - this.age;
  }

  getMercuryAge() {
    const mercuryDays = 88
    let myMercuryAge = (this.earthDays/mercuryDays)
    return myMercuryAge;
  }
}
