# keywordGen
Collection of keyword generation helpers that make it easier to target long-tail Google AdWords
keywords.

**Definitions:**
- [Permutation](https://en.wikipedia.org/wiki/Permutation): Different arrangements of all elements
- [Combination](https://en.wikipedia.org/wiki/Combination): Different selections of elements.

## Requires
- Node.js 8

## Usage
This is not on NPM yet.

```
let kw = require('keywordgen')

let words = [
  'greek key',
  'diamond',
  'pendant',
  '18k'
]

let permComs = kw.permutationCombination(words)
//=> all permutations of combinations

let filteredPermComs = kw.permutationCombination(words, 'greek key')
//=> all permutations of combinations that contain 'greek key'

let filteredPermComs2 = kw.permutationCombination(words, ['greek key', 'diamond'])
//=> all permutations of combinations that contain 'greek key' and 'diamond'

```

## API

### `kw.permutationCombination(words, [filter])`
- words: array of strings
- filter: array of strings or single string

```
Example with no filter:
Input: ['chevron', 'diamond', 'pendant']
Output: ['chevron', 'diamond', 'pendant', 'chevron diamond', 'chevron pendant', 'diamond chevron', 'diamond pendant', 'pendant chevron', 'pendant diamond', 'chevron diamond pendant', 'chevron pendant diamond', 'diamond chevron pendant', 'diamond pendant chevron', 'pendant chevron diamond', 'pendant diamond chevron']
```

## Testing
Tests are located in `test/index.js`.

- Tests can be run with: `npm test`
