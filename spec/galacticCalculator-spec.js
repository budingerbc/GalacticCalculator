import {GalacticCalculator} from './../js/GalacticCalculator.js';

describe("GalacticCalculator", function() {

  let now;
  let past;
  let calculator;

  beforeEach(function() {

    now = new Date();
    past = new Date(now.getTime() - (60 * 1000)); //going a minute in the past for testing

    calculator = new GalacticCalculator(past);

  });

  it('should test if the age in seconds is determined correctly', function() {

    expect(calculator.ageInSeconds()).toEqual(60);
  });

  it('should test if the mercury years calculation is accurate', function() {
    expect(calculator.mercuryYears().toEqual(14);
  });


});
