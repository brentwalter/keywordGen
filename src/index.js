var Combinatorics = require('js-combinatorics')


/**
 * Gives you all the permutatoins of combinations of a collection of keywords
 *
 * Example:
 * ['chevron', 'diamond', 'pendant'] =>
 * ['chevron', 'diamond', 'pendant', 'chevron diamond', 'chevron pendant', 'diamond chevron', 'diamond pendant', 'pendant chevron', 'pendant diamond', 'chevron diamond pendant', 'chevron pendant diamond', 'diamond chevron pendant', 'diamond pendant chevron', 'pendant chevron diamond', 'pendant diamond chevron']
 *
 * @param {array} words - list of keywords to use as basis of generation
 * @param {array|string} [mandatoryWords] - the keywords that must be contained in each generated item
 * @returns {array} - all permutations of combinations
 */
exports.permutationCombination = function(words, mandatoryWords) {

  let comb = Combinatorics.permutationCombination(words).filter( (word) => {
    if (!mandatoryWords) return true

    let isPresent = false
    if (Array.isArray(mandatoryWords)) {
      // handle array case, must match all mandatoryWords
      let numToContain = mandatoryWords.length
      mandatoryWords.forEach( (mandatoryWord) => {
        if (!!~word.indexOf(mandatoryWord)) numToContain -= 1
      })
      if (numToContain === 0) isPresent = true
    } else {
      // handle string case
      if (!!~word.indexOf(mandatoryWords)) isPresent = true
    }
    return isPresent
  }).map( (word) => {
    return word.join(' ')
  })

  return comb
}
