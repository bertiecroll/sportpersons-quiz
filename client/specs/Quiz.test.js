import Quiz from '../src/quiz_logic/Quiz'

let testQuiz

describe('Quiz', function() {

  beforeEach(function() {
    sampleDataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]

    testQuiz = new Quiz({dataSet: sampleDataSet})

  })

  it('should start with a data set', function() {
    
  })
})