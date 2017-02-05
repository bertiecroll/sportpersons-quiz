import * as QuizActionTypes from '../actiontypes/quiz'

export const setQuizData = function(dataSet) {
  return {
    type: QuizActionTypes.SET_QUIZ_DATA,
    dataSet
  }
}

export const setUserPrefs = function(user, totalRounds) {
  return {
    type: QuizActionTypes.SET_USER_PREFS,
    user,
    totalRounds
  }
}

export const updateScoreCard = function(score) {
  return {
    type: QuizActionTypes.UPDATE_SCORE_CARD,
    score
  }
}