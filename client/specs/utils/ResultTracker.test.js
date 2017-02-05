import ResultTracker from '../../src/utils/ResultTracker'

describe('Result Tracker', function() {

  it('should return null if quiz not finished', function() {
    const scoreCard = [true, true]
    const totalRounds = 3
    expect(ResultTracker.check(scoreCard, totalRounds)).toEqual(null)
  })

  it('should return false if scoreCard contains false score', function() {
    const scoreCard = [true, false]
    const totalRounds = 3
    expect(ResultTracker.check(scoreCard, totalRounds)).toEqual(false)
  })

  it('should return true if game finished and no false scores', function() {
    const scoreCard = [true, true, true]
    const totalRounds = 3
    expect(ResultTracker.check(scoreCard, totalRounds)).toEqual(true)
  })

})