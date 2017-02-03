import WinChecker from '../src/quiz_logic/WinChecker'

describe('WinChecker', function() {

  let testWinChecker

  beforeEach(function() {
    testWinChecker = new WinChecker()
  })

  it('should get highest item in array of two items', function() {
    const playerArray = [
      {name: "Mary Brown", points: 20},
      {name: "John Smith", points: 30}
    ]
    const expected = {name: "John Smith", points: 30}
    const actual = testWinChecker.getWinner('points', playerArray)
    expect(actual).toEqual(expected)
  })

  it('should get highest item in array of three items', function() {
    const playerArray = [
      {name: "Mary Brown", points: 20},
      {name: "John Smith", points: 30},
      {name: "Toby McDonald", points: 10},
    ]
    const expected = {name: "John Smith", points: 30}
    const actual = testWinChecker.getWinner('points', playerArray)
    expect(actual).toEqual(expected)
  })

})