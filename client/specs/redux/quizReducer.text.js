import quizReducer from '../../src/reducers/quiz'
import * as QuizActionTypes from '../../src/actiontypes/quiz'

describe('Quiz Reducer', function() {
  it('should return initial state', function() {
    const expected = {
      quiz_data: [],
      user: "",
      scoreCard: [],
      currentRound: 1,
      result: null
    }
    expect(quizReducer(undefined, {})).toEqual(expected)
  })
})