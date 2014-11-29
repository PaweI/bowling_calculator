function BowlingCalculator() {

};

var frames = {
              1: {roll1: null, roll2: null, result: null},
              2: {roll1: null, roll2: null, result: null},
              3: {roll1: null, roll2: null, result: null},
              4: {roll1: null, roll2: null, result: null},
              5: {roll1: null, roll2: null, result: null},
              6: {roll1: null, roll2: null, result: null},
              7: {roll1: null, roll2: null, result: null},
              8: {roll1: null, roll2: null, result: null},
              9: {roll1: null, roll2: null, result: null},
             10: {roll1: null, roll2: null, result: null}
            };

BowlingCalculator.prototype.shots = function(frame, shot1, shot2) {
  shot1 = typeof shot1 !== 'undefined' ? shot1 : 0;
  shot2 = typeof shot2 !== 'undefined' ? shot2 : 0;
  frames[frame]["roll1"] = shot1
  frames[frame]["roll2"] = shot2
  frames[frame]["result"] = shot1+shot2
  if(frame-1>0) {

    if(frame-2>0) {
      if(frames[frame-1]["roll1"] === 10 && frames[frame-2]["roll1"] === 10) {
        frames[frame-2]["result"] += shot1
        // frames[frame-1]["result"] += shot1+shot2
      };
    };

    if(frames[frame-1]["roll1"] === 10 ) {
      frames[frame-1]["result"] += shot1+shot2
    };

    if((frames[frame-1]["roll1"] + frames[frame-1]["roll2"] === 10) && frames[frame-1]["roll2"] !== 0) {
      frames[frame-1]["result"] += shot1
    };
  };

  if(frame-1>0) {
    frames[frame]["result"] += frames[frame-1]["result"]
  };

  return frames[frame]["result"]
};


