class Tracker {
  constructor({totalRounds}) {
    this.totalRounds = totalRounds
    this.currentRound = 1
    this.scoreCard = []
    this.isFinished = false
  }

  update(result) {
    this.scoreCard.push(result)
    this.currentRound++
    this.checkIfFinished()
  }

  checkIfFinished() {
    this.isFinished = (this.scoreCard.includes(false) || this.currentRound >= this.totalRounds)
  }

}

export default Tracker