import {GalacticCalculator} from './../js/GalacticCalculator.js';

describe("GalacticCalculator", function() {

  let birth;
  let calculator;

  beforeEach(function() {

    birth = new Date(1985, 2, 20);
    calculator = new GalacticCalculator(birth);

  });

  it('should test if the age in seconds is determined correctly', function() {
    let now = new Date();

    expect(calculator.ageInSeconds()).toEqual((now.getTime() - calculator.birthday.getTime()) / 1000);
  });
});
