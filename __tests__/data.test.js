import Data from "../src/js/data.js";

describe("Data", () => {
  let data = 0;

  beforeEach(() => {
    data = new Data();
  });
  test("should correctly create an empty Data object", () => {
    expect(data);
    expect(data.lines).toEqual({});
  });
});