describe("BowlingCalculator", function() {

  var bowling

  beforeEach(function() {
    bowling = new BowlingCalculator;
  });

  describe("calculates", function() {
    it("Gutter game, when player didn't hit any pin at any frame", function() {
      bowling.gutterGame();
      expect(bowling.frames[0].roll1).toBe(0)  
      expect(bowling.frames[0].roll2).toBe(0)  
      expect(bowling.frames[0].total).toBe(0)  
      expect(bowling.frames[9].total).toBe(0)  
    });

    it("Gutter game, when player hit all pins in all frames", function() {
      bowling.perfectGame();
      expect(bowling.frames[0].roll1).toBe(10)
      expect(bowling.frames[2].roll1).toBe(10)
      expect(bowling.frames[4].roll1).toBe(10)
      expect(bowling.frames[6].roll1).toBe(10)
      expect(bowling.frames[9].roll1).toBe(10)
      expect(bowling.frames[9].total).toBe(300)
    });

    it("Strike, when player hit all pins in first roll", function() {
      bowling.strike(bowling.frames[0]);
      expect(bowling.frames[0].roll1).toBe(10)
      expect(bowling.frames[0].roll2).toBe(null)
      expect(bowling.frames[0].total).toBe(10)
    });
  });
});