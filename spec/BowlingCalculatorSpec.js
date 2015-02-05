describe("BowlingCalculator", function() {

  var bowling;

  beforeEach(function() {
    bowling = new BowlingCalculator();
  });

  describe("calculates", function() {
    it("Gutter game, when player didn't hit any pin at any frame", function() {
      bowling.gutterGame();
      expect(bowling.frames[0].roll1).toBe(0); 
      expect(bowling.frames[0].roll2).toBe(0);  
      expect(bowling.frames[0].total).toBe(0); 
      expect(bowling.frames[9].total).toBe(0);  
    });

    it("Perfect game, when player hit all pins in all frames", function() {
      bowling.perfectGame();
      expect(bowling.frames[0].roll1).toBe(10);
      expect(bowling.frames[2].roll1).toBe(10);
      expect(bowling.frames[4].roll1).toBe(10);
      expect(bowling.frames[6].roll1).toBe(10);
      expect(bowling.frames[9].roll1).toBe(10);
      expect(bowling.frames[9].total).toBe(300);
    });

    it("Strike, when player hit all pins in first roll", function() {
      bowling.strike(bowling.frames[0]);
      expect(bowling.frames[0].roll1).toBe(10);
      expect(bowling.frames[0].roll2).toBe(null);
      expect(bowling.frames[0].total).toBe(10);
    });

    it("Spares for all pins been hit in two rolls in one frame", function() {
      bowling.spare(0, 4, 6);
      expect(bowling.frames[0].roll1).toBe(4);
      expect(bowling.frames[0].roll2).toBe(6);
      expect(bowling.frames[0].total).toBe(10);
    });

    it("Normal game when less then 10 pins been hit in one frame", function() {
      bowling.normalGame(0, 3, 4);
      expect(bowling.frames[0].roll1).toBe(3);
      expect(bowling.frames[0].roll2).toBe(4);
      expect(bowling.frames[0].total).toBe(7);
    });

    it("Bonus when player hitted strike in previous frame", function() {
      bowling.strike(bowling.frames[0]);
      bowling.normalGame(1,3,4);
      expect(bowling.frames[0].total).toBe(17);
    });

    it("Bonus when player hitted spare in previous game", function() {
      bowling.spare(0,5,5);
      bowling.normalGame(1,2,3);
      expect(bowling.frames[0].total).toBe(12);
    });
  });
});