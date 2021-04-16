export default class Pesron {
  constructor(name, age) {
    this.name = name;
    this.earthAge = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  calculateMercuryAge() {
    const mercuryAge = this.earthAge * .24;
    this.mercuryAge = mercuryAge;
    return mercuryAge;
  }

}