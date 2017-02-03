class Quiz {
  constructor({collection, user}) {
    this.collection = collection
    this.user = user
    this.round = 1 
    this.cardsOnShow = []
  }

  displayCards() {
    const numberOfCards = this.round + 1
    this.cardsOnShow = this.collection.getCards(numberOfCards)
  }

}

export default Quiz