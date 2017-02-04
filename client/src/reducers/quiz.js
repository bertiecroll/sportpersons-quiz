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
    default:
      return state
  }
  
}