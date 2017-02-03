class Quiz {
  constructor({dataSet, user}) {
    this.dataSet = dataSet
    this.user = user
    this.round = 1 
    this.cardsOnShow = []
  }

  displayCards() {
    const numberOfCards = this.round + 1
    this.cardsOnShow = this.dataSet.slice(0, numberOfCards)
  }

}

export default Quiz