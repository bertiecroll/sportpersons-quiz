import Quiz from '../src/quiz_logic/Quiz'
import Collection from '../src/quiz_logic/Collection'

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
    const sampleUser = {name: "Player 1"}
    testQuiz = new Quiz({collection: collection, user: sampleUser})
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
    expect(testQuiz.cardsOnShow.length).toEqual(0)
  })

  it('should be able to show cards for round 1', function() {
    testQuiz.displayCards()
    expect(testQuiz.cardsOnShow.length).toEqual(2)
  })

  it('should increase amount of cards on show by one each round', function() {
    testQuiz.round = 2
    testQuiz.displayCards()
    expect(testQuiz.cardsOnShow.length).toEqual(3)
  })

})