class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = []
  }
  receiveBelief() {
    this.dust++
  }
  believe() {
    this.dust += 10
  }
  makeDresses(dressesList) {
    for(var i=0; i<dressesList.length; i++){
      this.clothes.dresses.push(dressesList[i]);
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infant) {
    if (this.disposition === 'Good natured') return infant;
    this.humanWards.push(infant)
    infant['disposition'] = 'Malicious';
    if (this.humanWards.length === 3) this.disposition = 'Good natured'
    return infant
  }
}

module.exports = Fairy;