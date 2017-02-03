import Quiz from '../src/quiz_logic/Quiz'
import Collection from '../src/quiz_logic/Collection'
import WinChecker from '../src/quiz_logic/WinChecker'

describe('Quiz', function() {

  let testQuiz

  beforeEach(function() {
    const collection = new Collection(
      [
        {name: "John Smith", points: 10},
        {name: "Mary Brown", points: 20},
        {name: "Toby McDonald", points: 5}
      ]
    )
    const winChecker = new WinChecker()
    const sampleUser = {name: "Player 1"}
    testQuiz = new Quiz(
        {
          collection: collection,
          winChecker: winChecker,
          user: sampleUser,
          compareBy: 'points'
        })
  })

  it('should start with a collection', function() {
    expect(testQuiz.collection).toBeDefined()
  })

  it('should start with a user', function() {
    expect(testQuiz.user).toBeDefined()
  })

  it('should start at round one', function() {
    expect(testQuiz.round).toEqual(1)
  })

  it('should start with no cards on show', function() {
    expect(testQuiz.cardsOnShow).toHaveLength(0)
  })

  it('should be able to show cards for round 1', function() {
    testQuiz.showCards()
    expect(testQuiz.cardsOnShow).toHaveLength(2)
  })

  it('should increase amount of cards on show by one each round', function() {
    testQuiz.round = 2
    testQuiz.showCards()
    expect(testQuiz.cardsOnShow).toHaveLength(3)
  })

  it('should be able to clear cards on show', function() {
    testQuiz.showCards()
    testQuiz.clearCardsOnShow()
    expect(testQuiz.cardsOnShow).toHaveLength(0)
  })

  it('should start with an empty scoreCard', function() {
    expect(testQuiz.scoreCard).toHaveLength(0)
  })

  it('should be able to play round', function() {
    testQuiz.showCards()
    const guessIndex = 0
    testQuiz.playRound(guessIndex)
    expect(testQuiz.scoreCard).toHaveLength(1)
  })

})