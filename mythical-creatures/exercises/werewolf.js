class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false
  }

  completeTransformation() {
    this.form === 'wolf' ? this.form = 'human' : this.form = 'wolf'
    if (this.form === 'wolf') {
      this.hungry = true
      return 'Aaa-Woooo!'
    }
    else if (this.form === 'human') {
      this.hungry = false
      return 'Where are I?'
    }
  }

  eatVictim(victim) {
    if (this.form === 'wolf') {
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`;
    }
    else if (this.form === 'human') {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }
}


module.exports = Werewolf;
