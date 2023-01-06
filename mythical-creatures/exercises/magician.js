class Magician {
  constructor(input) {
    this.name = `The Great ${input['name']}`;
    this.assistant = input['assistant'];
    this.favoriteAccessory = determineClothing(input);
    this.confidencePercentage = this.assistant ? 20 : 10;
    function determineClothing(input) {
      if (input['clothing'] === undefined) {
  
        return 'top hat';
      }
      else {
        return input['clothing'];
      }
    }
  }

  performIncantation(incantation) {
    return `${incantation.toUpperCase()}!`
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === 'top hat') {
      return 'PULL RABBIT FROM TOP HAT'
    }
    else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.confidencePercentage >= 120) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
    else {
      return 'Oh no, this trick is not ready!'
    }
  }
}

module.exports = Magician;