describe('Javabuzz',function() {

  var javabuzz;

  describe('Knows when a number is', function() {

    it('Divisible by 3', function() {

      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });

  });

  describe('Knows when a number is Not', function() {

    it('Divisible by 3', function() {

      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);

    });
  });

});
