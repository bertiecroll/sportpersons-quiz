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

export const updateCardsOnShow = function(amount) {
  return {
    type: QuizActionTypes.UPDATE_CARDS_ON_SHOW,
    amount
  }
}

export const updateScoreCard = function(score) {
  return {
    type: QuizActionTypes.UPDATE_SCORE_CARD,
    score
  }
}