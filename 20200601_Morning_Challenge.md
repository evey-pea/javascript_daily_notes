# Morning Challenge

This morning's challenge will take place on a challenge site called edabit! Head over to https://edabit.com/ and sign up for an account.

## Core

Taken from: https://edabit.com/challenge/XnJ24rWW7iJkNrtsh

**Find the Perimeter of a Rectangle**

Create a function that takes height and width and finds the perimeter of a rectangle.

Examples

```
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
```

**Notes**
- Don't forget to return the result.
- If you're stuck, find help in the Resources tab.
- If you're really stuck, find solutions in the Solutions tab.

### My Core Solution

```javascript
function findPerimeter(height, width) {
	return (2 * height) + (2 * width);
}
```

## Beast Mode

Taken from: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

**Which Function Returns the Larger Number?**

Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

- If f returns the larger number, return the string f.
- If g returns the larger number, return the string g.
- If the functions return the same number, return the string neither.

**Examples**

```
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"
```

**Notes**

- This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).
### My Beast Mode Solution

```javascript
function whichIsLarger(f, g) {
	if (f() === g()){
		return "neither";
	} else if (f() > g()){
		return "f";
	} else {
		return "g";
	};
};
```

## Beast Mode+

Taken from: https://edabit.com/challenge/4gzDuDkompAqujpRi

**Add up the Numbers from a Single Number**

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

**Examples**
```
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
```

**Notes**

- Expect any positive number between 1 and 1000.

### My Beast Mode++ Solution

```javascript
function addUp(num) {
	let i = 1;
	let sum = [];
	while (i <= num){
		sum.push(i);
		i++;
	}
	return sum.reduce((a, b) => a + b, 0)
}
```