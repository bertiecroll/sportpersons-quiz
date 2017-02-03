import Tracker from '../../src/quiz_logic/Tracker'

describe('Tracker', function() {
  let testTracker

  beforeEach(function() {
    testTracker = new Tracker({totalRounds: 3})
  })

  it('should start at round one', function() {
    expect(testTracker.currentRound).toEqual(1)
  })

  it('should start with an empty scoreCard', function() {
    expect(testTracker.scoreCard).toHaveLength(0)
  })

  it('should be able to update round and scoreCard', function() {
    testTracker.update(true)
    expect(testTracker.scoreCard).toEqual([true])
    expect(testTracker.currentRound).toEqual(2)
  })

  it('should be able to check if finished, false', function() {
    testTracker.scoreCard = [true, true]
    testTracker.checkIfFinished()
    expect(testTracker.isFinished).toEqual(false)
  })

  it('should be able to check if finished, true (entered false score)', function() {
    testTracker.scoreCard = [true, false]
    testTracker.checkIfFinished()
    expect(testTracker.isFinished).toEqual(true)
  })

  it('should be able to check if finished, true (all rounds complete)', function() {
    testTracker.currentRound = 4
    testTracker.checkIfFinished()
    expect(testTracker.isFinished).toEqual(true)
  })

})