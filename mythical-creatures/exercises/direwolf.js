class Direwolf {
  constructor(name, home='Beyond the Wall', size='Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = []
    this.huntsWhiteWalkers = true
  }
  protect(stark) {
    if ((stark.location === this.home) && (this.starksToProtect.length <= 1)) {
      this.starksToProtect.push(stark)
      stark.safe = true
      this.huntsWhiteWalkers = false
    }
  }

  leave(stark) {
    if (this.starksToProtect.includes(stark)) {
      this.starksToProtect = this.starksToProtect.filter(function(otherStarks) {
        return otherStarks !== stark;
      })
      stark.safe = false
    }
  }
}



module.exports = Direwolf;