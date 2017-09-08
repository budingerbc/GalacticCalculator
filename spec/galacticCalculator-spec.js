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

  it('should test for the number of mercury years left based on age and lifespan', function() {
    expect(calculator.yearsLeftMercury()).toBeGreaterThan(290);
    expect(calculator.yearsLeftMercury()).toBeLessThan(317);
  });

  it('should test for the number of venus years left based on age and lifespan', function() {
    expect(calculator.yearsLeftVenus()).toBeGreaterThan(111);
    expect(calculator.yearsLeftVenus()).toBeLessThan(123);
  });

  it('should test for the number of mars years left based on age and lifespan', function() {
    expect(calculator.yearsLeftMars()).toBeGreaterThan(36);
    expect(calculator.yearsLeftMars()).toBeLessThan(41);
  });

  it('should test for the number of jupiter years left based on age and lifespan', function() {
    expect(calculator.yearsLeftJupiter()).toBeGreaterThan(4);
    expect(calculator.yearsLeftJupiter()).toBeLessThan(7);
  });

  it('should test to see if the users age has passed their life expectancy', function() {

    let old = new Date(1900, 0, 1);
    let dead = new GalacticCalculator(old);

    expect(calculator.isDead()).toEqual(false);
    expect(dead.isDead()).toEqual(true);
  })

});
