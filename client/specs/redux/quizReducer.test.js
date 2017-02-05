import quizReducer from '../../src/reducers/quiz'
import * as QuizActionTypes from '../../src/actiontypes/quiz'

describe('Quiz Reducer', function() {
  it('should return initial state', function() {
    const expected = {
      quiz_data: [],
      user: "",
      totalRounds: null,
      scoreCard: []
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
      totalRounds: null,
      scoreCard: [] 
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
      totalRounds: null,
      scoreCard: []
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })

  it('should handle SET_TOTAL_ROUNDS', function() {
    const action = {
      type: QuizActionTypes.SET_TOTAL_ROUNDS,
      totalRounds: 3
    }
    const expected = {
      quiz_data: [],
      user: "",
      totalRounds: 3,
      scoreCard: []
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
      totalRounds: null,
      scoreCard: [true]
    }
    expect(quizReducer(undefined, action)).toEqual(expected)
  })
})