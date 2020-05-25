# Afternoon Challenge 20200525

## Codecademy Github Challenge

The below challenges are found at Codecademy's Github gist [here](https://coderacademyedu.github.io/resources/unit_ruby_vs_js.html)

### Challenge

#### 1. Create a new variable called user, set the value to: tom

```javascript
let user = 'Tom'
```

#### 2. Write an if statement: if the user's name is tom, say 'Hello Tom'

```javascript
if (user === 'Tom' || user === 'tom'){
    console.log("Hello Tom");
}
```

#### 3. Add an else condition: say 'Hello someone other than Tom'

```javascript
if (user === 'Tom' || user === 'tom'){
    console.log("Hello Tom");
} else {
    console.log('Hello someone other than Tom');
};
```
#### 4. Add a new variable called age, set the value to: 18

```javascript
let age = 18
```

#### 5. If the user is 18, say 'welcome to the casino!'

```javascript
if (age === 18){
    console.log('5. welcome to the casino!')
}
```

#### 6. Research 'prompt'. Use it in your code to ask the user for their age.

```javascript
let userAge = prompt('What is your age?')
if(userAge >= 18){
    console.log('6. welcome to the casino!')
}
```

#### 7. If the user is less than 18 years old, use the alert method to deny entry.

```javascript
userAge = prompt('What is your age?');
if(userAge >= 18){
    alert('7. welcome to the casino!');
} else {
    alert('8. Sorry squirt, come back in a few years!');
};
```

###  Beast Mode

#### 1. Assign an empty array to a students variable.

```javascript
let students = [];
```

#### 2. Use the push method to add a student called Sarah

```javascript
students.push("Sarah");
```

#### 3. Use prompt to ask the user for their name, add it to the array.

```javascript
students.push(prompt('Enter a student name:'));
```

#### 4. Use a loop to ask the user for 3 names, add them all to the array.

```javascript
i = 0;
while (i < 3){
    students.push(prompt('Enter a student name:'));
    i++;
};
```

#### 5. Loop through the array and use the alert method to read each user back to the user.

```javascript
for (let i = 0; i < students.length; i++){
    alert(students[i]);
};
```

### Beast Mode++ 

#### Store hashes in your students array

Each student should have a name and age property.
```javascript
// Iterate through the array
for (let i = 0; i < students.length; i++){
    // Create a hash object from an array value of a name as a string (assuming age is '18')
    let entry = {name: students[i], age: 18};
    // Overwrite the original string object in the array with the new object
    students[i] = entry;
}
```


#### Bonus: Move the students array into a hash of hashes

This isn't in the original question set from the codecademy gist. I'm throwing this one in as a bonus ;)

```javascript
// Create a new hash object
let list = {}
// Iterate through the array
for (let i = 0; i < students.length; i++){
    // Assign the object in the array at index 'i' to the list object with a key value of 'i'
    list[i] = students[i];
}
```

**Note:** Since hash objects are stored as a key value pair, store each hash object in another object as a hash collection, each object as a value requires a corresponding 'key' value. The value used here is ```i``` to maintain the same reference structure as the original array.

## Ed Additional Challenges

If you finish the challenge above, try converting the ruby code below into JS:


### 1. 

#### Ruby (original)

```ruby
age = 10
if age >= 18
    puts "Come in an enjoy a drink!"
else
    puts "Go away! Come back in #{18 - age} years"
end
```

#### Javascript (ported)

```javascript
let age = 10;

if (age >=18){
    alert('Come in an enjoy a drink!');
} else {
    alert(`Go away! Come back in ${18 - age} years`)
};
```

### 2. 

#### Ruby (original)

```ruby
is_subscriber = true;
is_active = true;

if is_subscriber && is_active
    puts "You're an active subscriber"
elsif is_subscriber && !is_active
    puts "Thanks for subscribing, now start using the site"
elsif !is_subscriber && is_active
    puts "You use the site a lot, would you like to subscribe?"
else
    puts "Please subscribe and use the site"
end
```


#### Javascript (ported)

```javascript
let is_subscriber = true;
let is_active = true;

if (is_subscriber && is_active){
    alert("You're an active subscriber");
} else if (is_subscriber && !is_active){
    alert("Thanks for subscribing, now start using the site");
} else if (!is_subscriber && is_active){
    alert("You use the site a lot, would you like to subscribe?");
} else {
    alert("Please subscribe and use the site");
};
```

### 3. 

#### Ruby (original)

```ruby
def say_hi(name)
    puts "Hi #{name}"
end

say_hi(gets.chomp)
```

#### Javascript (ported)

```javascript
function say_hi(name){
    alert(`Hi ${name}`);
};

say_hi(prompt('What is your name?'));
```