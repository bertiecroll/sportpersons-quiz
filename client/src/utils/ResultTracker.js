class ResultTracker {

  static check(scoreCard, totalRounds) {
    if (scoreCard.includes(false)) {
      return false
    } else if (scoreCard.length >= totalRounds) {
      return true
    }
    return null
  }
}

export default ResultTracker