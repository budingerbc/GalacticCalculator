export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday; // Date object
  }

  ageInSeconds() {
    let now = new Date();
    return (parseInt((now.getTime() - this.birthday.getTime()) / 1000));
  }

  mercuryYears() {
    return this.ageInSeconds() * .24;
  }

  venusYears() {
    return this.ageInSeconds() * .62;
  }

  marsYears() {
    return this.ageInSeconds() * 1.88;
  }

  jupiterYears() {
    return this.ageInSeconds() * 11.86;
  }


}
