export class SolarAge {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 100;
    this.earthDays = 365 * this.age;
    this.yearsLeft = this.lifeExpectancy - this.age;
  }

  getMercuryAge() {
    const mercuryDays = 88
    let myMercuryAge = (this.earthDays/mercuryDays)
    let myMercuryLife = (this.lifeExpectancy/myMercuryAge)
    let mercuryTimeLeft = (myMercuryLife - myMercuryAge)
    if (mercuryTimeLeft >= 1) {
      return `On Mercury you are ${myMercuryAge} years old and you have ${mercuryTimeLeft} days left to live!`
    } else {
      return `On Mercury you are ${myMercuryAge} years old and you have lived past your life expectancy by ${-3.69 * mercuryTimeLeft} days!`
    }
  }
}
