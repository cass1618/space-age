import Person from "../src/js/person.js";

describe("Person", () => {
  let person = "";

  beforeEach(() => {
    person = new Person("Name",33,"other","other");
    person.initialize();
  });

  test("should correctly create a Person object with name", () => {
    expect(person);
    expect(person.name).toMatch("Name");
    expect(person.earthAge).toEqual(33);
    expect(person.mercuryAge).toEqual(7.92);
    expect(person.venusAge).toEqual(20.46);
    expect(person.marsAge).toEqual(62.04);
    expect(person.jupiterAge).toEqual(391.38);
    expect(person.race).toMatch("other");
    expect(person.gender).toMatch("other");
    expect(person.lifeExpectancy).toEqual(77.6);
    expect(person.yearsLeftEarth).toEqual(0);
    expect(person.yearsLeftMercury).toEqual(0);
    expect(person.yearsLeftVenus).toEqual(0);
    expect(person.yearsLeftMars).toEqual(0);
    expect(person.yearsLeftJupiter).toEqual(0);
  });

  test("should correctly calculate person's age in mercury years", () => {
    expect(person.calculateMercuryAge()).toEqual(.24*person.earthAge);
  });

  test("should correctly calculate person's age in venus years", () => {
    expect(person.calculateVenusAge()).toEqual(.62*person.earthAge);
  });

  test("should correctly calculate person's age in mars years", () => {
    expect(person.calculateMarsAge()).toEqual(1.88*person.earthAge);
  });

  test("should correctly calculate person's age in jupiter years", () => {
    expect(person.calculateJupiterAge()).toEqual(11.86*person.earthAge);
  });
  
  test("should correctly provide a row number based on age", () => {
    expect(person.getDemRow()).toEqual(7);
  }); 

  test("should correctly calculate years left to live on earth", () => {
    expect(person.calcYearsLeftEarth()).toEqual(44.6)
  });

  test("should correctly determine life expectancy based on demographic row and column", () => {
    expect(person.getLifeExpectancy()).toEqual(77.6);
  });

 

  test("should correctly round number to 2 decimal places", () => {
  expect(person.roundTwo(1.234567)).toEqual(1.23);
  });

  test("should correctly determine years left to live on Mercury", () => {
    expect(person.calcYearsLeftMercury()).toEqual(10.7);
  });

  test("should correctly determine years left to live on Venus", () => {
    expect(person.calcYearsLeftVenus()).toEqual(27.65);
  });

  test("should correctly determine years left to live on Mars", () => {
    expect(person.calcYearsLeftMars()).toEqual(83.85);
  });

  test("should correctly determine years left to live on Jupiter", () => {
    expect(person.calcYearsLeftJupiter()).toEqual(528.96);
  });
});

describe("getDemIndex()", () => {
  const testPeople = [
    ['Name1', 5, "other", "other", 0],
    ['Name2', 10, "other", "male", 1],
    ['Name3', 15, "other", "female", 2],
    ['Name4', 20, "hispanic", "other", 3],
    ['Name5', 25, "hispanic", "male", 4],
    ['Name6', 30, "hispanic", "female", 5],
    ['Name7', 35, "white", "other", 6],
    ['Name8', 40, "white", "male", 7],
    ['Name9', 45, "white", "female", 8],
    ['Name10', 50, "black", "other", 9],
    ['Name11', 55, "black", "male", 10],
    ['Name12', 60, "black", "female", 11],
    ['Name12', 60, "none", "female", undefined],
  ];

  let i = -1;
  test.each(testPeople)("should correctly determine array index based on race and gender", () => {
    i++;
    let person1 = new Person(testPeople[i][0], testPeople[i][1], testPeople[i][2], testPeople[i][3]);
    expect(person1.getDemIndex()).toEqual(testPeople[i][4]);
  });
});

describe("Person past life expectancy", () => {
let person = "";
  beforeEach(() => {
    person = new Person("Name",150,"other","other");
    person.initialize();
    // console.log(person);
  });

  test("should correctly calculate years over life expectancy person is on Earth", () => {
  expect(person.calcYearsLeftEarth()).toEqual(58.2);  
  });

  test("should correctly calculate years over life expectancy person is on Mercury", () => {
    expect(person.calcYearsLeftMercury()).toEqual(13.97);  
    });

    test("should correctly calculate years over life expectancy person is on Venus", () => {
      expect(person.calcYearsLeftVenus()).toEqual(36.08);  
      });


});


