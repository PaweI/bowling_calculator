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
                 {roll1: null, roll2: null, roll3: null, total: null}];
}

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
  this.frames[frame].roll1 = 10;
  this.frames[frame].total = 10;
  if(frame>0 && this.frames[frame-1].roll1 === 10) {
    this.frames[frame-1].total += this.frames[frame].total;
  }
};

BowlingCalculator.prototype.spare = function(frame, roll1, roll2) {
  this.frames[frame].roll1 = roll1;
  this.frames[frame].roll2 = roll2;
  this.frames[frame].total = 10;
};

BowlingCalculator.prototype.normalGame = function(frame, roll1, roll2) {
  this.frames[frame].roll1 = roll1;
  this.frames[frame].roll2 = roll2;
  this.frames[frame].total = roll1 + roll2;

  if (frame>1 && this.frames[frame-2].roll1 === 10) {

    if(this.frames[frame-1].roll1 === 10) {
      this.frames[frame-2].total += roll1;
    }

  }
  
  else if (frame>0 && this.frames[frame-1].roll1 === 10) {
    this.frames[frame-1].total += this.frames[frame].total;
  } 


  else if (frame>0 && this.frames[frame-1].total === 10) {
    this.frames[frame-1].total += roll1;
  } 
  
};






