import {GalacticCalculator} from './../js/GalacticCalculator.js';

describe("GalacticCalculator", function() {

  let now;
  let past;
  let calculator;

  beforeEach(function() {

    now = new Date();
    past = new Date(now.getTime() - (157680000000)); // 5 years in milliseconds

    calculator = new GalacticCalculator(past);

  });

  it('should test if the age in seconds is determined correctly', function() {

    expect(calculator.ageInSeconds()).toEqual(157680000);  // 5 years in seconds
  });

  it('should test if the mercury years calculation is accurate', function() {
    expect(calculator.mercuryYears()).toEqual(20);
    console.log(calculator.mercuryYears());
  });

  it('should test if the venus years calculation is accurate', function() {
    expect(calculator.venusYears()).toEqual(8);
  });

  it('should test if the mars years calculation is accurate', function() {
    expect(calculator.marsYears()).toEqual(2);
  });

  it('should test if the jupiter years calculation is accurate', function() {
    expect(calculator.jupiterYears()).toEqual(0);
  });

});
