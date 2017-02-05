import * as QuizActions from '../../src/actions/quiz'
import * as QuizActionTypes from '../../src/actiontypes/quiz'

describe('QuizActions', function() {
  it('should create action to set quiz data', function() {
    const dataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]
    const expectedAction = {
      type: QuizActionTypes.SET_QUIZ_DATA,
      dataSet
    }
    expect(QuizActions.setQuizData(dataSet)).toEqual(expectedAction)
  })

  it('should create action to set user prefs', function() {
    const user = "Joe Black"
    const expectedAction = {
      type: QuizActionTypes.SET_USER_PREFS,
      user,
      totalRounds: 3
    }
    expect(QuizActions.setUserPrefs(user, 3)).toEqual(expectedAction)
  })

  it('should create action to update score card', function() {
    const expectedAction = {
      type: QuizActionTypes.UPDATE_SCORE_CARD,
      score: true
    }
    expect(QuizActions.updateScoreCard(true)).toEqual(expectedAction)
  })
})