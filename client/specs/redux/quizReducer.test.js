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
  it('should handle SET_QUIZ_DATA', function() {
    const dataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]
    const action = {
      type: QuizActionTypes.SET_QUIZ_DATA,
      dataSet
    }
    const expected = {
      quiz_data: dataSet,
      user: "",
      scoreCard: [],
      currentRound: 1,
      result: null  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })
  it('should handle SET_USER', function() {
    const user = "Joe Black"
    const action = {
      type: QuizActionTypes.SET_USER,
      user
    }
    const expected = {
      quiz_data: [],
      user: "Joe Black",
      scoreCard: [],
      currentRound: 1,
      result: null  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })
  it('should handle UPDATE_SCORE_CARD', function() {
    const action = {
      type: QuizActionTypes.UPDATE_SCORE_CARD,
      score: true
    }
    const expected = {
      quiz_data: [],
      user: "",
      scoreCard: [true],
      currentRound: 1,
      result: null  
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })
})