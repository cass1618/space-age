import Person from "../src/js/person.js";
describe("Person", () => {
  let person = "";

  beforeEach(() => {
    person = new Person("Name",33,"other","other");
  });

  test("should correctly create a Person object with name", () => {
    expect(person);
    expect(person.name).toMatch("Name");
    expect(person.earthAge).toEqual(33);
    expect(person.mercuryAge).toEqual(0);
    expect(person.venusAge).toEqual(0);
    expect(person.marsAge).toEqual(0);
    expect(person.jupiterAge).toEqual(0);
    expect(person.race).toMatch("other");
    expect(person.gender).toMatch("other");
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

  test("should correctly determine column number based on race and gender", () => {
    expect(person.getDemIndex()).toEqual(0);
  })




});