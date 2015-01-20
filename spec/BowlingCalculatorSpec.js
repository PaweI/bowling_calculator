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

  });
});