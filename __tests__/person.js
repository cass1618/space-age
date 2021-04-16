import Person from "../src/js/person.js";
describe("Person", () => {
  test("should correctly create a Person object with name and age", () => {
    const person = new Person("name",);
    expect(person);
    expect(person.name).toMatch("name");
  });
});