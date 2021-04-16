import Person from "../src/js/person.js";
describe("Person", () => {
  let person = "";

  beforeEach(() => {
    person = new Person("Name",33);
  });

  test("should correctly create a Person object with name", () => {
    expect(person);
    expect(person.name).toMatch("Name");
    expect(person.earthAge).toEqual(33);
    expect(person.mercuryAge).toEqual(0);
    expect(person.venusAge).toEqual(0);
    expect(person.marsAge).toEqual(0);
    expect(person.jupiterAge).toEqual(0);
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
  
  // test("should correctly calulate years person has left to live on each planet", () => {
  //   expect(person.yearsLeftToLive("earth")).toEqual(72.6-person.earthAge);
  // });
});