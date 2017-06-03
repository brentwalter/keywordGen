var kw = require('../src/index')
var t = require('tap')



t.test('permutationCombination method', (t) => {
  var testArray = [
    'chevron',
    'diamond',
    'pendant'
  ]
  var permCombs = [
    'chevron',
    'diamond',
    'pendant',
    'chevron diamond',
    'chevron pendant',
    'diamond chevron',
    'diamond pendant',
    'pendant chevron',
    'pendant diamond',
    'chevron diamond pendant',
    'chevron pendant diamond',
    'diamond chevron pendant',
    'diamond pendant chevron',
    'pendant chevron diamond',
    'pendant diamond chevron'
  ]
  t.equal(kw.permutationCombination(testArray).length, permCombs.length, 'creates all permutation combinations correctly without a mandatory words')
  t.equal(kw.permutationCombination(testArray, ['chevron']).length, permCombs.length - 4, 'creates all permutation combination correctly with ["chevron"] mandatory word')
  t.equal(kw.permutationCombination(testArray, ['chevron', 'diamond']).length, permCombs.length - 7, 'creates all permutation combination correctly with "chevron" and "diamond" mandatory words')
  t.equal(kw.permutationCombination(testArray, 'chevron').length, permCombs.length - 4, 'creates all permutation combination correctly with "chevron" mandatory word string')
  t.end()
})
