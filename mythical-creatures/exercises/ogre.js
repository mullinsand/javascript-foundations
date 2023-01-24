class Ogre {
  constructor(ogreInfo) {
    this.name = ogreInfo['name']
    this.home = ogreInfo['abode'] ? ogreInfo['abode'] : 'Swamp'
    this.swings = 0
  }

  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre() === true) this.swingAt(human)
  }

  swingAt(human) {
    this.swings++
    console.log(human)
    if (this.swings === 2) human['knockedOut'] = true
  }

  apologize(human) {
    human['knockedOut'] = false
  }
}

module.exports = Ogre;