// Evelyn Paplauskas

/* Afternoon Challenge 20200525 */

/* Codecademy Github Challenge */

// 1. Create a new variable called user, set the value to: tom
let user = 'Tom'

// 2. Write an if statement: if the user's name is tom, say 'Hello Tom'
if (user === 'Tom' || user === 'tom'){
    console.log("Hello Tom");
}

// 3. Add an else condition: say 'Hello someone other than Tom'
if (user === 'Tom' || user === 'tom'){
    console.log("Hello Tom");
} else {
    console.log('Hello someone other than Tom');
};

// 4. Add a new variable called age, set the value to: 18
let age = 18

// 5. If the user is 18, say 'welcome to the casino!'
if (age === 18){
    console.log('5. welcome to the casino!')
}

// 6. Research 'prompt'. Use it in your code to ask the user for their age.
let userAge = prompt('What is your age?')
if(userAge >= 18){
    console.log('6. welcome to the casino!')
}
// 7. If the user is less than 18 years old, use the alert method to deny entry.
userAge = prompt('What is your age?');
if(userAge >= 18){
    alert('7. welcome to the casino!');
} else {
    alert('8. Sorry squirt, come back in a few years!');
};

/*  Beast Mode */

// 1. Assign an empty array to a students variable.
let students = [];

// 2. Use the push method to add a student called Sarah
students.push("Sarah");

// 3. Use prompt to ask the user for their name, add it to the array.
students.push(prompt('Enter a student name:'));

// 4. Use a loop to ask the user for 3 names, add them all to the array.
i = 0;
while (i < 3){
    students.push(prompt('Enter a student name:'));
    i++;
};

// 5. Loop through the array and use the alert method to read each user back to the user.
for (let i = 0; i < students.length; i++){
    alert(students[i]);
};
console.log(students)

/* Beast Mode++ */

// Store hashes in your students array
// Each student should have a name and age property.

let list = new Object();
for (let i = 0; i < students.length; i++){
    let entry = {name: students[i], age: 18};
    list[i] = entry;
}

students = list;
console.log(students)