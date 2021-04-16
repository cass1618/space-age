import LifeExpectancy from "../src/js/lifeExpectancy.js";
describe("LifeExpectancy", () => {
  let lifeExpectancy = 0;

  beforeEach(() => {
    lifeExpectancy = new LifeExpectancy("gender","race");
  });
  test("should correctly create a LifeExpectancy object with gender and race", () => {
    expect(lifeExpectancy);
    expect(lifeExpectancy.gender).toMatch("gender");
  });

});