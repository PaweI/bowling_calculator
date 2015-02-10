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
      bowling.strike(0);
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
      bowling.strike(0);
      bowling.normalGame(1,3,4);
      expect(bowling.frames[0].total).toBe(17);
    });

    it("Bonus when player hitted spare in previous game", function() {
      bowling.spare(0,5,5);
      bowling.normalGame(1,2,3);
      expect(bowling.frames[0].total).toBe(12);
    });

    it("Extra bonus when player hitted two strikes in the row and then played normally", function() {
      bowling.strike(0);
      bowling.strike(1);
      bowling.normalGame(2,5,3);
      expect(bowling.frames[0].total).toBe(25);
    });

    it("Extra bonus when player hitted three strikes in the row", function() {
      bowling.strike(0);
      bowling.strike(1);
      bowling.strike(2);
      expect(bowling.frames[0].total).toBe(30);
    });

    it("Bonus when player hitted two spares in the row", function() {
      bowling.spare(0,5,5);
      bowling.spare(1,5,5);
      expect(bowling.frames[0].total).toBe(15);
    }); 

    it("Bonus when player hitted strike and then spare", function() {
      bowling.strike(0);
      bowling.spare(1,5,5);
      expect(bowling.frames[0].total).toBe(20);
    });

    it("full game without strikes or spares", function() {
      bowling.normalGame(0,2,4);
      bowling.normalGame(1,2,4);
      bowling.normalGame(2,2,4);
      bowling.normalGame(3,2,4);
      bowling.normalGame(4,2,4);
      bowling.normalGame(5,2,4);
      bowling.normalGame(6,2,4);
      bowling.normalGame(7,2,4);
      bowling.normalGame(8,2,4);
      bowling.normalGame(9,2,4);
      expect(bowling.frames[9].total).toBe(60);
    }); 

     it("full game with strikes", function() {
      expect(bowling.bonusRoll.allowed).toBe(false);
      bowling.strike(0);
      bowling.strike(1);
      bowling.strike(2);
      bowling.strike(3);
      bowling.strike(4);
      bowling.strike(5);
      bowling.strike(6);
      bowling.strike(7);
      bowling.strike(8);
      bowling.strike(9);
      expect(bowling.bonusRoll.allowed).toBe(true);
      bowling.bonus(10, 10);
      expect(bowling.frames[9].total).toBe(300);
    });                
  });
});