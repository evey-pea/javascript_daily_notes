# Morning Activity 20200529

## Core

- Create a class called Movie with three fields, title, duration and rating
- Add a method to the class called printMovie which should print {title}, {duration} minutes, rated {rating}
- Create another field in the class called watchCount and give it an initial value of zero
- Now create a method called watch() which, when called, should increment the watchCount
- Modify the printMovie method to also print out the number of times the movie was watched.

### My 'Core' Solution

<!-- #TODO 20200529 Morning Core -->
```javascript

```

## Beast Mode

Let's introduce users into the program. Create a User class which takes two fields, email and name .

- Now modify the Movie class's watch() method so that it accepts one parameter, user (this should be a user object) 
- Since we have users now, modify the watchCount field so that instead of being an integer which counts the number of times the movie has been watched, it keeps track of how many times each particular user has  watched it (use email as a unique identifier)
- Finally update the printMovie  method, it should still only print out the total number of times the movie has been watched, but you'll need to update the logic to do this since we're now storing the watchCount differently.

### My 'Beast Mode' Solution
<!-- #TODO 20200529 Morning BeastMode -->
```javascript

```

## Beast Mode ++

- Update the User class so it doesn't allow two users to be created who have the same email. If a user object is created with a non-unique email, set the email to null . I'll leave it up to you how to decide to keep track of taken emails, there's a few directions you could go.
- Now modify the Movie class so that only the following ratings can be set (G, PG, PG-13, R, NR), if an "invalid" rating is set, change it to NR.
- Finally build out a user interface for our app where a user can see all the movies that have been created along with their viewers on the browser!

### My 'Beast Mode ++' Solution
<!-- #TODO 20200529 Morning BeastMode++ -->
```javascript

```