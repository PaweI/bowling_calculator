describe("BowlingCalculator", function() {

  describe("calculates", function() {
    describe("one frame", function(){
      it("if player knocks less the 10 pins", function() {
        var bowling = new BowlingCalculator
        expect(bowling.knocks(2,3)).toBe(5)
      });

      it("if player knocks 10 pins in first roll", function() {
        var bowling = new BowlingCalculator
        expect(bowling.knocks(10)).toBe(10)
      });

      // it("if player knocks 10 pins in first frame in roll one, and than 2 in each roll in second frame", function() {
      //   var bowling = new BowlingCalculator
      //   bowling.knocks(10)
      //   bowling.knocks(2,2)
      //   expect(bowling.shots(1)).toBe(14)
      // });

    });

    describe("shows results", function() {
      it("of shots being done", function() {
        var bowling = new BowlingCalculator
        bowling.knocks(10)
        // bowling.knocks(2,2)
        expect(bowling.frames(1)).toBe("10")
      });
    });

  });


});