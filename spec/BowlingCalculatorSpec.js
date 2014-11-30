describe("BowlingCalculator", function() {

  var bowling

  beforeEach(function() {
    bowling = new BowlingCalculator
  });

  describe("calculates", function() {
    describe("one frame", function(){
      it("if player knocks less the 10 pins", function() {
        expect(bowling.shots(1,2,3)).toBe(5)
      });

      it("if player knocks 5 pins in first frame and 5 in second", function() {
        bowling.shots(1,3,2)
        expect(bowling.shots(2,2,3)).toBe(10)
      });

      it("if player knocks 10 pins in first roll", function() {
        expect(bowling.shots(1,10)).toBe(10)
      });

      it("and then knocks 5, 4 and in roll1 and roll2 of the next frame", function() {
        bowling.shots(1,10)
        expect(bowling.shots(2,5,4)).toBe(28)
      });

      it("if player knocks 10 pins in first frame in two rolls and than 5 in next roll", function() {
        bowling.shots(1,3,7)
        expect(bowling.shots(2,5,2)).toBe(22)
      });

      it("if player knocks 10 pins in first and second frames in roll one and than 5 in roll one of frame 3", function() {
        bowling.shots(1,10)
        bowling.shots(2,10)
        expect(bowling.shots(3,5,4)).toBe(53)
      });
    });

    describe("second frame", function() {
      it("when player knocks 7 pins in first frame and 5 in second", function() {
        bowling.shots(1,5,2)
        expect(bowling.shots(2,3,2)).toBe(12)
      });
    });

    describe("all ten frames", function() {
      it("when player knocks 7 in all frames first frame", function() {
        bowling.shots(1,5,2)
        bowling.shots(2,5,2)
        bowling.shots(3,5,2)
        bowling.shots(4,5,2)
        bowling.shots(5,5,2)
        bowling.shots(6,5,2)
        bowling.shots(7,5,2)
        bowling.shots(8,5,2)
        bowling.shots(9,5,2)
        expect(bowling.shots(10,5,2)).toBe(70)
      });

      it("when player does couple of strikes in a row", function() {
        bowling.shots(1,5,2)
        bowling.shots(2,5,2)
        bowling.shots(3,5,2)
        bowling.shots(4,5,2)
        bowling.shots(5,5,2)
        bowling.shots(6,10)
        bowling.shots(7,10)
        bowling.shots(8,5,2)
        bowling.shots(9,5,2)
        expect(bowling.shots(10,5,2)).toBe(98)
      });

      it("when player does some spares and strike", function() {
        bowling.shots(1,5,2)
        bowling.shots(2,5,5)
        bowling.shots(3,2,2)
        bowling.shots(4,3,2)
        bowling.shots(5,3,2)
        bowling.shots(6,10)
        bowling.shots(7,10)
        bowling.shots(8,5,2)
        bowling.shots(9,5,2)
        expect(bowling.shots(10,5,2)).toBe(96)
      });

      it("when player does all the strikes", function () {
        bowling.shots(1,10)
        bowling.shots(2,10)
        bowling.shots(3,10)
        bowling.shots(4,10)
        bowling.shots(5,10)
        bowling.shots(6,10)
        bowling.shots(7,10)
        bowling.shots(8,10)
        bowling.shots(9,10)
        expect(bowling.shots(10,10,10,10)).toBe(300)
      });
    });
  });
});