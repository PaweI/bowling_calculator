function BowlingCalculator() {
  this.frame1 = {roll1: null, roll2: null, total: null};

};

BowlingCalculator.prototype.gutterGame = function() {
  this.frame1.roll1 = 0;
  this.frame1.roll2 = 0;
  this.frame1.total = 0;
};



