# Morning Challenge 20200615

## Reading Speed

Franklin has just started to learn reading and has a new book. When he finds a word that he hasn't seen before, he will read each letter (not number or punctuation) at a rate of one second per letter, however, if he has seen the word before it will take one second to read the whole word, regardless of its length. Given a passage of text (**string**), predict how many seconds it will take Franklin to read the text.

**INPUT**
  - `text` a *string* of words separated by a space, that may contain numbers and punctuation.

**OUTPUT**
  - An *integer* representing how many seconds it would take to read the text.

**EXAMPLE**

[How can they learn?](https://media.makeameme.org/created/how-can-the.jpg)

```javascript
readingSpeed('Hello World!);
// => 10
```
Frankin needs to read each letter, remember that punctuation is ignored.

```javascript
readingSpeed('Red fish Green fish');
// => 13
``` 
Frankin has seen the for `fish` the second time, so it only takes one second to read.

```javascript
readingSpeed('Red Fish Green fish');
// => 13
``` 
`Fish` and `fish` are the same word. Your code should ignore case.

## My Solution

```javascript
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
  
```