export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday; // Date object
  }

  ageInSeconds() {
    let now = new Date();
    return parseInt((now.getTime() - this.birthday.getTime()) / 1000);  //dividing by 1000 since getTime returns milliseconds
  }

  ageInYears() {
    return this.ageInSeconds() / (60 * 60 * 24 * 365);
  }

  mercuryYears() {
    return parseInt(this.ageInYears() / 0.24);
  }

  venusYears() {
    return parseInt(this.ageInYears() / 0.62);
  }

  marsYears() {
    return parseInt(this.ageInYears() / 1.88);
  }

  jupiterYears() {
    return parseInt(this.ageInYears() / 11.86);
  }


}
