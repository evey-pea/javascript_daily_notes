# Afternoon Challenge 20200601

## Number Clamp

Have the function clamp(value, min, max) take the value parameter being passed and:

- Return max if value is greater than max.
- Return min if value is less than min.
- Return value if neither of these conditions are met.

For example:

```
clamp(5, 1, 10) Should return 5, value is less than max and greater than min.
clamp(5, 1, 4) Should return 4, value is greater than max.
clamp(5, 6, 10) Should return 6, value is less then min.
```

### My Number Clamp Solution

```javascript
function clamp(value, min, max){
    // Your code here!
    if (value > max){
        return max;
    } else if (value < min){
        return min;
    } else {
        return value;
    };
};
```

## Reverse String

Try reverse a string at least 3 times in 3 different and creative ways:

This is a classic interview question that will 100% come up in your career. Whether you're the one that needs to solve this or hopefully you're the one asking the question. This may seem like a simple challenge but what if you needed to solve it several times in different ways!??!

Have the function reverseString(string) take the string parameter being passed and return the string in reverse order. 

For example: if the input string is ```"Hello JavaScript!"``` then your function should return the string ```!tpircSavaJ olleH```.

### My Solution 1: Decrementing 'for' loop

```javascript
function reverse(string) {
    // Your Code Here!
    let characters = string.split("");
    let output = [];
    for(let i = string.length -1; i >= 0; i--) {
        output.push(characters[i]);
    };
    return output.join("");
};
```

### My Solution 2: Recurisive function

So I found this one at https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

```javascript
function reverse(string) {
    if (string === "") {
        return "";
    } else {
        return reverse(string.substring(1)) + string.charAt(0);
    };
};
```

### My Solution 3: Unshifting into a temporary array from incremental for loop (forEach) of original string

```javascript
function reverse(string) {
    output = [];
    if (string === "") {
        return "";
    } else {
        string.split("").forEach((letter)=>{
            output.unshift(letter);
        });
    };
    return output.join("");
};
```

## Needle in a Haystack

Sven has made a bet with friend Juan that he could find the literal needle hidden in a haystack. Sven knows of your talent coding and hopes that you can write a program to help him. You have a tool that can scan the pile of hay and represent it as a matrix (array of arrays). Each cell will contain either the string H representing hay or N representing the elusive needle. Return the location of the needle so that Sven can win his bet.

**INPUT**

An array of arrays (matrix) [[],[]] representing the haystack.

A cell stack[x][y] will contain either 'H' or 'N' for Hay or Needle.

Input will always have exactly one 'N'.

**OUTPUT**

An array containing the pair of indexes that point to the location of the needle.

It must be in the format [x,y]

**EXAMPLE**

[Doing the Impossible](https://www.youtube.com/watch?v=h1tIVDkYAjA)

Suppose we had the haystack:

```javascript
const stack = [
  ['H', 'H', 'H'],
  ['H', 'H', 'H'],
  ['H', 'N', 'H']
]
```

In this example, we can see that the needle is in the 3rd array, and then the second element in that array. If we wanted to access the value ```N``` in code, we would need to call ```stack[2][1]```. Once you have found the needle, return the position as a new array in this case ```[2, 1]```.

The Haystack will always contain a needle, so you don't need to consider that edge case. Check haystack.test.js for more examples.

### My 'Needle In a Haystack' solution

```javascript
function findNeedle(haystack) {
  // Your code here
  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < haystack[i].length; j++)
      if (haystack[i][j] === "N") {
        return [i,j];
      };
  };
};
```