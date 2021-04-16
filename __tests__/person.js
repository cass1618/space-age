import Person from "../src/js/person.js";
describe("Person", () => {
  let person = "";

  beforeEach(() => {
    person = new Person("Name");
  });

  test("should correctly create a Person object with name", () => {
    expect(person);
    expect(person.name).toMatch("Name");
    expect(person.mercuryAge).toEqual(0);
    expect(person.venusAge).toEqual(0);
    expect(person.marsAge).toEqual(0);
    expect(person.jupiterAge).toEqual(0);
  });
});