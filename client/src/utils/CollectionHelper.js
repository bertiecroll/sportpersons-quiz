class CollectionHelper {

  static sample(array, amount) {
    const shuffledArray = this._shuffleArray(array)
    return shuffledArray.slice(0, amount)
  }

  static _shuffleArray(array) {
    const shuffledArray = array
    const length = array.length

    for (let i = length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = shuffledArray[i]
      shuffledArray[i] = shuffledArray[j]
      shuffledArray[j] = temp
    }
    return shuffledArray
  }
}

export default CollectionHelper