function readingSpeed(text) {
  // make text all lower case
  text = text.toLowerCase()

  // Remove punction and split text into array of words
  let words = text.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"").split(" ");

    // Function: cpunt each character in a given string
    let characterCount = (string) => {
        let charArray = string.split("")
        return charArray.length;
    }

    // Create a dictionaryof words with a score
  let dictionary = {};
  
  //Run through words array and 
  for (word of words) {
    // increment value by 1 if word is in dictionary
    if (dictionary.hasOwnProperty(word)){
      dictionary[word] += 1;
    } else {
    // If word not in dictionary, add word to dictionary wiuth the score of the word
      dictionary[word] = characterCount(word);
    }
  }
  
  // Function: Add the values for each word in the object into a single vlaue
  let totalCharacters = obj => Object.values(obj).reduce((a, b) => a + b);
  
  // Pass the dictionary into the function that adds the score and return the result
  return totalCharacters(dictionary);
}
  