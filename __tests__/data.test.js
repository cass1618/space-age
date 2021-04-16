import Data from "../src/js/data.js";
import Line from "../src/js/line.js";

describe("Data", () => {
  let data = {};
  let line;

  beforeEach(() => {
    data = new Data();
    line = new Line(50,50,50,50,50,50,50,50,50,50,50,50,50);
  });
  test("should correctly create an empty Data object", () => {
    expect(data);
    expect(data.lines).toEqual({});
    expect(data.currentId).toEqual(0);
  });

  test("should correctly return an id", () => {
    expect(data.assignId()).toEqual(1);
  });

  test("should correctly add line to Data object", () => {
    expect(data.addLine(line));
      expect(data.lines).toEqual({'1': line});
  }); 
});