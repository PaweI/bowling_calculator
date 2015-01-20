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




