class WinChecker {

  getWinner(key, array) {
    return array.reduce(function(currentWinner, nextItem) {
      return (currentWinner[key] > nextItem[key]) ?
        currentWinner :
        nextItem
    })
  }
}

export default WinChecker