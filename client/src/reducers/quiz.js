import * as QuizActionTypes from '../actiontypes/quiz'

const initialState = {
  quiz_data: [],
  user: "",
  scoreCard: [],
  currentRound: 1,
  result: null
}

const Quiz = function(state=initialState, action) {
  switch(action.type) {
    case QuizActionTypes.SET_QUIZ_DATA:
      return Object.assign({}, state, {
        quiz_data: action.dataSet
      })
    case QuizActionTypes.SET_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    case QuizActionTypes.UPDATE_SCORE_CARD:
      return Object.assign({}, state, {
        scoreCard: state.scoreCard.concat([action.score])
      })
    default:
      return state
  }
  
}

export default Quiz