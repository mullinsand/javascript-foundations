const Direwolf = require("./direwolf");

class Stark {
  constructor(personDetails) {
    this.name = personDetails['name'];
    this.location = personDetails['area'] ? personDetails['area'] : 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === false) {
      return 'Winter is Coming'
    }
    else if (this.safe === true) {
      return 'The North Remembers'
    }
  }

  callDirewolf(direwolfName, home) {
    var direwolf = new Direwolf(direwolfName, this.location)
    direwolf.protect(this)
    return direwolf
  }
}

module.exports = Stark;