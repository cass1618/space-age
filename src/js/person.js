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
    this.lifeExpectency = 0;
    this.yearsLeftEarth = 0;
    this.yearsLeftMercury = 0;
    this.yearsLeftVenus = 0;
    this.yearsLeftMars = 0;
    this.yearsLeftJupiter = 0;
  }

  initialize() {
    this.calculateMercuryAge();
    this.calculateVenusAge();
    this.calculateMarsAge();
    this.calculateJupiterAge();
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
    let lifeExpectency = demographics[this.getDemRow()][this.getDemIndex()] + this.earthAge;
    this.lifeExpectency = lifeExpectency;
    return this.lifeExpectency;
  }
  
  roundTwo(number) {
    return Math.round(number*100)/100;
  }

  calcYearsLeftEarth() {
    this.yearsLeftEarth = this.roundTwo(this.lifeExpectency - this.earthAge);
    return this.roundTwo(this.lifeExpectency - this.earthAge);
  }

  calcYearsLeftMercury() {
    const yearsLeftMercury = this.roundTwo((this.lifeExpectency * .24) - this.mercuryAge); 
    this.yearsLeftMercury = yearsLeftMercury;
    return yearsLeftMercury;
  }

  calcYearsLeftVenus() {
    const yearsLeftVenus = this.roundTwo((this.lifeExpectency * .62) - this.venusAge); 
    this.yearsLeftVenus = yearsLeftVenus;
    return yearsLeftVenus;
  }

  calcYearsLeftMars() {
    const yearsLeftMars = this.roundTwo((this.lifeExpectency * 1.88) - this.marsAge); 
    this.yearsLeftMars = yearsLeftMars;
    return yearsLeftMars;
  }

  

}

