import CollectionHelper from '../../src/utils/CollectionHelper'

describe('Collection Helper', function() {

  let sampleDataSet

  beforeEach(function() {
    sampleDataSet = [
      {name: "John Smith", points: 10},
      {name: "Mary Brown", points: 20},
      {name: "Toby McDonald", points: 5}
    ]
  })

  it('should be able to sample a given data set', function() {
    const actual = CollectionHelper.sample(sampleDataSet, 1)
    expect(actual).toHaveLength(1)
  })

  it('should not change dataSet when taking sample', function() {
    const expected = sampleDataSet
    CollectionHelper.sample(sampleDataSet, 2)
    const actual = sampleDataSet
    expect(actual).toEqual(expected)
  })

})