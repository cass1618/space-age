export default class Data {
  constructor() {
  this.lines = {};
  this.currentId = 0;
  }

  assignId() {
    this.currentId++;
    return this.currentId;
  }

  addLine(line) {
    line.id = this.assignId();
    this.lines[line.id] = line;
  }
}

// function Data() {
//   this.lines = {};
//   this.currentId = 0;
//   }


//   Data.prototype.assignId = function() {
//     this.currentId++;
//     return this.currentId;
//   }
//   Data.prototype.addLine = function(line) {
//     line.id = this.assignId();
//     this.lines[line.id] = line;
//   }

//   let data = new Data();

