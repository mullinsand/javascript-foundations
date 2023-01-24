class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if (this.riddles.length > 3) this.riddles.shift()
  }

  attemptAnswer(guess) {
    var correct
    for(var i = 0; i < this.riddles.length; i++) {
      if (guess === this.riddles[i]['answer']) correct = this.riddles.splice(i, 1)
    }
    // answered all questions
    if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${guess}\"???`
    }
    // answered one question
    if (correct !== undefined && correct.length >=1) {
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
    } else {
      this.heroesEaten++
    }
  }
}

module.exports = Sphinx;