import Line from "../src/js/line.js";
describe("Line", () => {
  let line;

  beforeEach(() => {
    line = new Line(50,50,50,50,50,50,50,50,50,50,50,50,50);
  });
  test("should correctly create a Line object with 13 ages", () => {
    expect(line);
    expect(line.age).toEqual(50);
    expect(line.allAll).toEqual(50);
    expect(line.hispanicAll).toEqual(50);
    expect(line.whiteAll).toEqual(50);
    expect(line.blackAll).toEqual(50);
    expect(line.allMale).toEqual(50);
    expect(line.hispanicMale).toEqual(50);
    expect(line.whiteMale).toEqual(50);
    expect(line.blackMale).toEqual(50);
    expect(line.allFemale).toEqual(50);
    expect(line.hispanicFemale).toEqual(50);
    expect(line.whiteFemale).toEqual(50);
    expect(line.blackFemale).toEqual(50);
  });

});