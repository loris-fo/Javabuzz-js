describe('Javabuzz',function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  })

  describe('Knows when a number is', function() {

    it('Divisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });

  });

  describe('Knows when a number is Not', function() {

    it('Divisible by 3', function() {

      expect(javabuzz.isDivisibleByThree(1)).toBe(false);

    });

  });

  describe('Knows when a number is', function() {

    it('Divisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(5)).toBe(true);

    });

  });

  describe('Knows when a number is Not', function() {

    it('Divisible by 5', function() {

      expect(javabuzz.isDivisibleByFive(4)).toBe(false);

    });

  });

  describe('Knows when a number is', function() {

    it('Divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);

    });

  });

  describe('Knows when a number is Not', function() {

    it('Divisible by 15', function() {

      expect(javabuzz.isDivisibleByFifteen(12)).toBe(false);

    });

  });

});
