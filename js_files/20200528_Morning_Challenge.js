// Evelyn Paplauskas

// 20200528 Morning Challenge

/* Challenge */

// Assign a new empty object to a variable called me
const me = {};

// On theAdd another item to the end of the hobbies array

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


/* Beast Mode */

console.log("\nBeastmode\n"); //

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