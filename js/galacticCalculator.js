export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday; // Date object
  }

  ageInSeconds() {
    let now = new Date();
    return (parseInt((now.getTime() - this.birthday.getTime()) / 1000));  //dividing by 1000 since getTime returns milliseconds
  }

  mercuryYears() {
    return this.ageInSeconds() * 0.24;
  }

  venusYears() {
    return this.ageInSeconds() * 0.62;
  }

  marsYears() {
    return this.ageInSeconds() * 1.88;
  }

  jupiterYears() {
    return this.ageInSeconds() * 11.86;
  }


}
