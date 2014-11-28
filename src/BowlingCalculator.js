function BowlingCalculator() {

};

BowlingCalculator.prototype.knocks = function(shot1, shot2) {
  roll1 = typeof shot1 !== 'undefined' ? shot1 : 0;
  roll2 = typeof shot2 !== 'undefined' ? shot2 : 0;
  return roll1 + roll2;
};


var frames = {
              1 : {roll1 : null, roll2 : null},
              2 : {roll1 : null, roll2 : null},
              3 : {roll1 : null, roll2 : null}
              4 : {roll1 : null, roll2 : null}
              5 : {roll1 : null, roll2 : null}
              6 : {roll1 : null, roll2 : null}
              7 : {roll1 : null, roll2 : null}
              8 : {roll1 : null, roll2 : null}
              9 : {roll1 : null, roll2 : null}
              10 : {roll1 : null, roll2 : null}
            };

BowlingCalculator.prototype.shots = function(frame) {
  frames[shot][roll1]


};
