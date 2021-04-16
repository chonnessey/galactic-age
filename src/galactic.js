export class Solar {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft = this.lifeExpectancy - this.age
  }
}