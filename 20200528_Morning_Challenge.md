# Morning Challenge 20200528

## JS Objects

Objects should feel familiar. They're just like hashes in Ruby.

One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects.

```javascript
const doggo = {
  name: 'Edison',
  breed: 'Groodle',
  hobbies: ['walks', 'tennis balls', 'bamboozling']
}

console.log(doggo.name); // -> Edison
```

Another way to refer to a property is using square bracket notation:

```javascript
console.log(doggo['name']); // -> Edison
```

We can use square bracket notation to dynamically refer to a property:

```javascript
const my_property = 'name';
console.log(doggo[my_property]); // -> Edison
```

## Resources

- [JavaScript object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

### Challenge

- Assign a new empty object to a variable called me
- On the next line, add one key 'age' and set its value to your age
- On the next line, add one key 'current location' and set its value to your current location
- Use console.log to display the age and current location on screen
- Use code to add an array of hobbies to your me object
- Use code to delete your age key
- Iterate through me.hobbies and log each hobby to the screen

#### My challenge solution:

```javascript
// Assign a new empty object to a variable called me
const me = {};

// On the next line, add one key 'age' and set its value to your age
me['age'] = 36;

// On the next line, add one key 'current location' and set its value to your current location
me['currentLocation'] = "At home";

// Use console.log to display the age and current location on screen
console.log(`Age: ${me['age']}`);
console.log(`Current Location: ${me['currentLocation']}`);

// Use code to add an array of hobbies to your me object
me['hobbies'] = ['coding', 'cooking', 'arduino profjects', 'sewing', 'furniture revamping'];

// Use code to delete your age key
delete(me.age);

// Iterate through me.hobbies and log each hobby to the screen
me.hobbies.forEach(function(hobby){
    console.log(hobby);
});
```


### Beast Mode

Using code:

- Add another item to the end of the hobbies array
- Delete the first item in the hobbies array
- Add a mother key, set its value to an empty object
- Add name, age and location keys to the mother object
- Add a print_details function to the me object.
- Call the function to log some details about yourself. I.e. me print_details() should work
- Note the difference between calling me.print_details and me.print_details()

#### My 'Beast mode' solution

```javascript
// Add another item to the end of the hobbies array
me['hobbies'].push('solitaire');

// Delete the first item in the hobbies array
me['hobbies'].shift();

// Add a mother key, set its value to an empty object
me['mother'] = {};

// Add name, age and location keys to the mother object
me.mother = {name : 'Sue', age: 'unkown', location: 'Qld'};

// Add a print_details function to the me object.
me.print_details = function() {
    console.log(`Current Location: ${this.currentLocation}`);
    console.log(`Hobbies: `);
    hobbies = this.hobbies
    console.log(this.hobbies);
    hobbies.forEach(function(hobby){
        console.log(hobby);
    });
};

// Call the function to log some details about yourself. I.e. me print_details() should work
me.print_details();
```

### Beast Mode++

Start with the following code:

```javascript
const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };
```

Use console.log and interpolation to display your campus' street and state from the coder_academy object
If we use code to delete the state from your campus, will your log of the coder_academy object still work? I.e. did it copy each campus object or does it reference each campus object?

Research: [value vs reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) (a common interview question)


#### My 'Beast mode++' solution

```javascript
#TODO 20200528 Beast Mode++
```
