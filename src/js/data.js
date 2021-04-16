export default class Data {
  constructor() {
  this.lines = {};
  this.currentId = 0;
  }

  assignId() {
    this.currentId++;
    return this.currentId;
  }

  //addLine(line) {
    // this.id = this.assignId();
    // this.lines[line.id] 
  //}
}