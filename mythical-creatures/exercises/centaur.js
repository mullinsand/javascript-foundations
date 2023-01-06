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
    else if (this.activityCount > 3 || ) {
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
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

}

module.exports = Centaur;