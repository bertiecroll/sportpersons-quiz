// import Quiz from '../../src/quiz_logic/Quiz'
// import Collection from '../../src/quiz_logic/Collection'
// import WinChecker from '../../src/quiz_logic/WinChecker'
// import Tracker from '../../src/quiz_logic/Tracker'

// describe('Quiz', function() {

//   let testQuiz

//   beforeEach(function() {
//     const collection = new Collection(
//       [
//         {name: "John Smith", points: 10},
//         {name: "Mary Brown", points: 20},
//         {name: "Toby McDonald", points: 5}
//       ]
//     )
//     const winChecker = new WinChecker()
//     const tracker = new Tracker({totalRounds: 4})
//     const sampleUser = {name: "Player 1"}
//     testQuiz = new Quiz(
//         {
//           collection: collection,
//           winChecker: winChecker,
//           tracker: tracker,
//           user: sampleUser,
//           compareBy: 'points'
//         })
//   })

//   it('should start with a collection', function() {
//     expect(testQuiz.collection).toBeDefined()
//   })

//   it('should start with a user', function() {
//     expect(testQuiz.user).toBeDefined()
//   })

//   it('should start with no cards on show', function() {
//     expect(testQuiz.cardsOnShow).toHaveLength(0)
//   })

//   it('should be able to show cards', function() {
//     testQuiz.showCards()
//     expect(testQuiz.cardsOnShow).toHaveLength(2)
//   })

//   it('should be able to clear cards on show', function() {
//     testQuiz.showCards()
//     testQuiz.clearCardsOnShow()
//     expect(testQuiz.cardsOnShow).toHaveLength(0)
//   })

//   it('should be able to play round', function() {
//     testQuiz.showCards()
//     const guessIndex = 0
//     testQuiz.playRound(guessIndex)
//     expect(testQuiz.tracker.scoreCard).toHaveLength(1)
//     expect(testQuiz.tracker.currentRound).toEqual(2)
//     expect(testQuiz.cardsOnShow).toHaveLength(0)
//   })

// })