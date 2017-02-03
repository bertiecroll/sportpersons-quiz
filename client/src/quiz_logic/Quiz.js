class Quiz {
  constructor({collection, winChecker, tracker, user, compareBy}) {
    this.collection = collection
    this.winChecker = winChecker
    this.tracker = tracker
    this.user = user
    this.compareBy = compareBy
    this.cardsOnShow = []
  }

  showCards() {
    const numberOfCards = this.tracker.currentRound + 1
    this.cardsOnShow = this.collection.getCards(numberOfCards)
  }

  playRound(guessIndex) {
    const winningIndex = this.getWinningIndex()
    const result = (guessIndex === winningIndex)
    this.tracker.update(result)
    this.clearCardsOnShow()
  }

  clearCardsOnShow() {
    this.cardsOnShow = []
  }

  getWinningIndex() {
    this.winChecker.getTopCard(this.compareBy, this.cardsOnShow)
  }

}

export default Quiz