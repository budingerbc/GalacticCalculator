export class GalacticCalculator {
  constructor(birthday) {
    this.secondsInYear = 31536000; // 60 * 60 * 24 * 365
    this.birthday = birthday; // Date object
    this.lifeExpectancy = Math.random() * (82 - 75) + 75;  //life expectancy between the ages of 75 and 81 in earth years
  }

  ageInSeconds() {
    let now = new Date();
    return parseInt((now.getTime() - this.birthday.getTime()) / 1000);  // dividing by 1000 since getTime returns milliseconds
  }

  ageInYears() {
    let age = parseInt(this.ageInSeconds() / this.secondsInYear);
    return age;
  }

  lifeLeftInEarthYears() {
    let lifeExpectancyInSeconds = this.lifeExpectancy * this.secondsInYear;
    let lifeLeftInSeconds = lifeExpectancyInSeconds - this.ageInSeconds();
    return parseInt(lifeLeftInSeconds / this.secondsInYear);
  }

  mercuryYears() {
    return parseInt(this.ageInYears() / 0.24);
  }

  yearsLeftMercury() {
    return parseInt(this.lifeLeftInEarthYears() / 0.24);
  }

  venusYears() {
    return parseInt(this.ageInYears() / 0.62);
  }

  yearsLeftVenus() {
    return parseInt(this.lifeLeftInEarthYears() / 0.62);
  }

  marsYears() {
    return parseInt(this.ageInYears() / 1.88);
  }

  yearsLeftMars() {
    return parseInt(this.lifeLeftInEarthYears() / 1.88);
  }

  jupiterYears() {
    return parseInt(this.ageInYears() / 11.86);
  }

  yearsLeftJupiter() {
    return parseInt(this.lifeLeftInEarthYears() / 11.86);
  }

  isDead() {
    if(this.ageInYears() >= this.lifeExpectancy) {
      return true;
    }
    return false;
  }
}
