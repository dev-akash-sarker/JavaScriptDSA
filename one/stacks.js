/* Stacks! */

// functions: push , pop , peek , length

var letters = [];

// racecar word is a palandrom
// this mean reads the same backwards as forwards
var word = "123321";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}
