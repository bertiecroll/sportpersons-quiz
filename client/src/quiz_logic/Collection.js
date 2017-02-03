class Collection {
  constructor(dataSet) {
    this.dataSet = dataSet
  }

  getCards(amount) {
    this.shuffleDataSet()
    return this.dataSet.slice(0, amount)
  }

  shuffleDataSet() {
    const length = this.dataSet.length

    for (let i = length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = this.dataSet[i]
      this.dataSet[i] = this.dataSet[j]
      this.dataSet[j] = temp
    }
  }
}

export default Collection