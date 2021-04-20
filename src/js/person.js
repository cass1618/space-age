import {demographics} from "./demographics.js"
export default
 class Person {
  constructor(name, age, race, gender) {
    this.name = name;
    this.earthAge = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.race = race;
    this.gender = gender;
    this.lifeExpectancy = 0;
    this.yearsLeftEarth = 0;
    this.yearsLeftMercury = 0;
    this.yearsLeftVenus = 0;
    this.yearsLeftMars = 0;
    this.yearsLeftJupiter = 0;
    this.pastLifeExpectancy = false;
    this.yearsPastEarth = 0;
    this.yearsPastMercury = 0;
    this.yearsPastVenus = 0;
    this.yearsPastMars = 0;
    this.yearsPastJupiter = 0;
  }

  initialize() {
    this.calculateMercuryAge();
    this.calculateVenusAge();
    this.calculateMarsAge();
    this.calculateJupiterAge();
    this.determineIfPastExpectancy();
    this.getLifeExpectancy();
  }

  calculateMercuryAge() {
    const mercuryAge = this.earthAge * .24;
    this.mercuryAge = mercuryAge;
    return mercuryAge;
  }

  calculateVenusAge() {
    const venusAge = this.earthAge * .62;
    this.venusAge = venusAge;
    return venusAge;
  }

  calculateMarsAge() {
    const marsAge = this.earthAge * 1.88;
    this.marsAge = marsAge;
    return marsAge;
  }

  calculateJupiterAge() {
    const jupiterAge = this.earthAge * 11.86;
    this.jupiterAge = jupiterAge;
    return jupiterAge;
  }

  determineIfPastExpectancy() {
    this.getDemRow();
    const lifeExpectancyFor85 = demographics[17][this.getDemIndex()] + 85;
    if (this.earthAge > lifeExpectancyFor85) {
      this.pastLifeExpectancy = true;
      return true;
    } else {
      return false;
    }
  }

  getDemRow() {
    return Math.floor(this.earthAge/5) +1;
  }

  getDemIndex() {
    switch(this.race) {
      case ("other"):
        switch(this.gender) {
          case ("other"):
            return 0;
          case ("male"):
            return 1;
          case ("female"):
            return 2;
        }
      case ("hispanic"):
        switch(this.gender) {
          case ("other"):
            return 3;
          case ("male"):
            return 4;
          case ("female"):
            return 5;
        }
      case ("white"): 
      switch(this.gender) {
        case ("other"):
          return 6;
        case ("male"):
          return 7;
        case ("female"):
          return 8;
      }
      case ("black"):
        switch(this.gender) {
          case ("other"):
            return 9;
          case ("male"):
            return 10;
          case ("female"):
            return 11;
        }
      default:
        return undefined;
    }
  } 

  getLifeExpectancy() {
    if (this.pastLifeExpectancy === false) {
    let lifeExpectancy = demographics[this.getDemRow()][this.getDemIndex()] + this.earthAge;
    this.lifeExpectancy = lifeExpectancy;
    return this.lifeExpectancy;
    } else {
      let lifeExpectancy = demographics[17][this.getDemIndex()] + 85;
      this.lifeExpectancy = lifeExpectancy;
      return this.lifeExpectancy;
    }
  }
  
  roundTwo(number) {
    return Math.round(number*100)/100;
  }

  calcYearsLeftEarth() {
    if (this.pastLifeExpectancy === false) {
    this.yearsLeftEarth = this.roundTwo(this.lifeExpectancy - this.earthAge);
    return this.yearsLeftEarth;
    } else {
      this.yearsPastEarth = this.roundTwo(this.earthAge - this.lifeExpectancy);
    return this.yearsPastEarth;
    }
  }

  calcYearsLeftMercury() {
    if (this.pastLifeExpectancy === false) {
    const yearsLeftMercury = this.roundTwo((this.lifeExpectancy * .24) - this.mercuryAge); 
    this.yearsLeftMercury = yearsLeftMercury;
    return yearsLeftMercury;
    } else {
      const yearsPastMercury = this.roundTwo(this.mercuryAge - (this.lifeExpectancy * .24));
      this.yearsPastMercury = yearsPastMercury;
      return yearsPastMercury;
    }
  }

  calcYearsLeftVenus() {
    if (this.pastLifeExpectancy === false) {
    const yearsLeftVenus = this.roundTwo((this.lifeExpectancy * .62) - this.venusAge); 
    this.yearsLeftVenus = yearsLeftVenus;
    return yearsLeftVenus;
    } else {
      const yearsPastVenus = this.roundTwo(this.venusAge - (this.lifeExpectancy * .62));
      this.yearsPastVenus = yearsPastVenus;
      return yearsPastVenus;
    }
  }

  calcYearsLeftMars() {
    const yearsLeftMars = this.roundTwo((this.lifeExpectancy * 1.88) - this.marsAge); 
    this.yearsLeftMars = yearsLeftMars;
    return yearsLeftMars;
  }

  calcYearsLeftJupiter() {
    const yearsLeftJupiter = this.roundTwo((this.lifeExpectancy * 11.86) - this.jupiterAge); 
    this.yearsLeftJupiter = yearsLeftJupiter;
    return yearsLeftJupiter;
  }

  

}

