class WinChecker {

  getTopCard(key, array) {
    return array.reduce(function(winningIndex, currentItem, currentIndex) {
      return (array[winningIndex][key] > currentItem[key]) ?
        winningIndex :
        currentIndex
    }, 0)
  }
}

export default WinChecker