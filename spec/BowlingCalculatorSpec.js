describe("BowlingCalculator", function() {

  var bowling

  beforeEach(function() {
    bowling = new BowlingCalculator;
  });

  describe("calculates", function() {
    it("Gutter game, when player didn't hit any pin at any frame", function() {
      bowling.gutterGame()
      expect(bowling.frame1.roll1).toBe(0)  
      expect(bowling.frame1.roll2).toBe(0)  
      expect(bowling.frame1.total).toBe(0)  
    });
  });
});