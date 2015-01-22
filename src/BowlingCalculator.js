function BowlingCalculator() {
  this.frames = [{roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, total: null},
                 {roll1: null, roll2: null, roll3: null, total: null}]
};

BowlingCalculator.prototype.gutterGame = function() {
  this.frames.forEach(function(frame) {
    frame.roll1 = 0;
    frame.roll2 = 0;
    frame.total = 0;
  });
};

BowlingCalculator.prototype.perfectGame = function() {
  this.frames.forEach(function(frame) {
    frame.roll1 = 10;
    frame.total = 10; 
  });
  this.frames[9].total = 300;
};

BowlingCalculator.prototype.strike = function(frame) {
  frame.roll1 = 10;
  frame.total = 10;
};




