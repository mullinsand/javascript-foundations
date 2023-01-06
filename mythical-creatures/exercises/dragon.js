class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.times_fed = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.times_fed++;
    if (this.times_fed >= 3) {
      this.hungry = false
    }
  }
}

module.exports = Dragon;