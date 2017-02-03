import Collection from '../src/quiz_logic/Collection'

describe('Collection', function() {
  let testCollection

  beforeEach(function() {
    const sampleDataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]
    testCollection = new Collection(sampleDataSet)
  })

  it('should start with a data set', function() {
    expect(testCollection.dataSet).toHaveLength(3)
  })

  it('should be able to get cards for dataSet', function() {
    expect(testCollection.getCards(1)).toHaveLength(1)
  })
})