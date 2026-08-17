console.log("Testing out branching and merging...");

// replace() method and replaceAll() method

const stringText =
  "Emmanuel is a smart young man, Emmanuel is a handsome Young Man and Emmanuel is a software Developer";
// console.log(stringText.replace("Emmanuel", "He"));
//  replace() method only replace the first occurance of the word indicated.
// console.log(stringText.replaceAll("Emmanuel", "He"));
// replaceAll() method replaces all occurance
let splittedText = stringText.split(",");
// splitted the string into an array by ","
let joinedText =
  splittedText[0] + "," + splittedText[1].replaceAll("Emmanuel", "He");
console.log(joinedText);

//reverse method
let palindrome = "emmanuel";
let reversed = palindrome.split("").reverse().join("");
// the split("") seperates them into individual strings, while .join("") does the opposite of split
// reverse inverts the strings
console.log(reversed);

function wordChecker(word) {
  return word === word.split("").reverse().join("")
    ? "Yes, it is a palindrome"
    : "No, it is Not a palindrome";
}
// ? is an itenary operator that takes in a condition and serves as an if/else statement. Before (:) is the if and after is default.

console.log(wordChecker("tundeednut"));
