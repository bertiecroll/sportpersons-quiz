import CollectionHelper from '../../src/utils/CollectionHelper'

describe('Collection Helper', function() {

  let sampleDataSet

  beforeEach(function() {
    sampleDataSet = [
      {name: "John Smith", points: 10.55},
      {name: "Mary Brown", points: 20.98},
      {name: "Toby McDonald", points: 20.45}
    ]
  })

  it('should be able to sample a given data set', function() {
    const actual = CollectionHelper.sample(sampleDataSet, 1)
    expect(actual).toHaveLength(1)
  })

  it('should not change dataSet when taking sample', function() {
    const expected = sampleDataSet.slice()
    CollectionHelper.sample(sampleDataSet, 2)
    const actual = sampleDataSet
    expect(actual).toEqual(expected)
  })

  it('should be able to find index of top item in array', function() {
    const actual = CollectionHelper.findTopItemIndex('points', sampleDataSet)
    expect(actual).toEqual(1)
  })

})