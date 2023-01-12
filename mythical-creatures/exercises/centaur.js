class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo['name']
    this.breed = centaurInfo['type']
    this.cranky = false
    this.standing = true
    this.activityCount = 0
    this.standing = true
    this.layingDown = false
  }

  crankinessCheck(activitySound) {
    this.activityCount++
    if (this.activityCount === 3) {
      this.cranky = true
    }
    else if (this.activityCount > 3 || this.layingDown == true) {
      return 'NO!'
    }
    else {
      return activitySound
    }
  }
  shootBow() {
    return this.crankinessCheck('Twang!!!')
  }

  run() {
    return this.crankinessCheck('Clop clop clop clop!!!')
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!'
    }
    else if (this.layingDown == true) {
      this.cranky = false
      this.activityCount = 0
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  drinkPotion() {
    if (this.standing == true) {
      this.cranky = false
      this.activityCount = 0
    }
    else if (this.standing == false) {
      return 'Not while I\'m laying down!'
    }
  }

}

module.exports = Centaur;