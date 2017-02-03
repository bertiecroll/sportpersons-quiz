class Quiz {
  constructor({collection, winChecker, user, compareBy}) {
    this.collection = collection
    this.winChecker = winChecker
    this.user = user
    this.compareBy = compareBy
    this.round = 1 
    this.cardsOnShow = []
    this.scoreCard = []
  }

  showCards() {
    const numberOfCards = this.round + 1
    this.cardsOnShow = this.collection.getCards(numberOfCards)
  }

  playRound(guessIndex) {
    const winningIndex = this.getWinningIndex()
    const result = (guessIndex === winningIndex)
    this.scoreCard.push(result)
  }

  clearCardsOnShow() {
    this.cardsOnShow = []
  }

  getWinningIndex() {
    this.winChecker.getTopCard(this.compareBy, this.cardsOnShow)
  }



}

export default Quiz