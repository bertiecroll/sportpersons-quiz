class CollectionHelper {

  static sample(array, amount) {
    const shuffledArray = this._shuffleArray(array)
    return shuffledArray.slice(0, amount)
  }

  static findTopItemIndex(key, array) {
    return array.reduce(function(winningIndex, currentItem, currentIndex) {
      return (array[winningIndex][key] > currentItem[key]) ?
        winningIndex :
        currentIndex
    }, 0)
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