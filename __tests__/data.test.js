import Data from "../src/js/data.js";

describe("Data", () => {
  let data = {};

  beforeEach(() => {
    data = new Data();
  });
  test("should correctly create an empty Data object", () => {
    expect(data);
    expect(data.lines).toEqual({});
    expect(data.currentId).toEqual(0);
  });

  test("should correctly assign an id", () => {
    expect(data.assignId()).toEqual(1);
  });
});