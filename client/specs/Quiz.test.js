import Quiz from '../src/quiz_logic/Quiz'

describe('Quiz', function() {

  let testQuiz

  beforeEach(function() {
    const sampleDataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]
    const sampleUser = {name: "Player 1"}
    testQuiz = new Quiz({dataSet: sampleDataSet, user: sampleUser})
  })

  it('should start with a data set', function() {
    expect(testQuiz.dataSet.length).toEqual(3)
  })

  it('should start with a user', function() {
    expect(testQuiz.user).toEqual({name: "Player 1"})
  })
})