import * as QuizActionTypes from '../actiontypes/quiz'

const initialState = {
  quiz_data: [],
  user: "",
  totalRounds: null,
  scoreCard: []
}

const Quiz = function(state=initialState, action) {
  switch(action.type) {
    case QuizActionTypes.SET_QUIZ_DATA:
      return Object.assign({}, state, {
        quiz_data: action.dataSet
      })
    case QuizActionTypes.SET_USER_PREFS:
      return Object.assign({}, state, {
        user: action.user,
        totalRounds: action.totalRounds
      })
    case QuizActionTypes.UPDATE_SCORE_CARD:
      return Object.assign({}, state, {
        scoreCard: state.scoreCard.concat([action.score]),
      })
    case QuizActionTypes.RESET_QUIZ:
      return Object.assign({}, state, {
        scoreCard: []
      })
    default:
      return state
  }
  
}

export default Quiz