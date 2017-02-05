import * as QuizActionTypes from '../actiontypes/quiz'

export const setQuizData = function(dataSet) {
  return {
    type: QuizActionTypes.SET_QUIZ_DATA,
    dataSet
  }
}

export const setUser = function(user) {
  return {
    type: QuizActionTypes.SET_USER,
    user
  }
}

export const setTotalRounds = function(totalRounds) {
  return {
    type: QuizActionTypes.SET_TOTAL_ROUNDS,
    totalRounds
  }
}

export const updateScoreCard = function(score) {
  return {
    type: QuizActionTypes.UPDATE_SCORE_CARD,
    score
  }
}