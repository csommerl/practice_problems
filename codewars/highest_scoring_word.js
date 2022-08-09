/*
Highest Scoring Word
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

input: string
output: string

rules:
- If two words score the same, return the word that appears earliest in the original string.

CharCodeOffset = -96

1. 

*/

function high(str) {
  let words = str.split(' ');
  let highestScoringWord = words[0];

  for (let idx = 0; idx < words.length; idx++) {
    if (getWordScore(words[idx]) > getWordScore(highestScoringWord)) {
      highestScoringWord = words[idx];
    }
  }

  return highestScoringWord;
}

function getWordScore(word) {
  const CharCodeOffset = 96;
  return word
    .split('')
    .reduce((score, char) => score + char.charCodeAt() - CharCodeOffset, 0);
}