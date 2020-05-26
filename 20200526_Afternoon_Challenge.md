# Afternoon Activity

## Core:

Codecademy Exercise: [Most Watched Movies Amongst Friends](https://coderacademyedu.github.io/resources/afternoon_challenge_most_watched_movies.html)

### Challenge

Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles, that have been most watchlisted by friends of a given user.
If there are no such movies, then an empty list should be returned or as many movies as possible.
Movies that have equal watchlist count, should be ordered alphabetically.
Use the arrays below to test your solution:

```javascript
let movies = [{
"title": "The Shawshank Redemption",

"duration": "PT142M",

"actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],

"ratings": [],

"watchlist": [15291, 51417, 62289, 6146, 71389, 93707]

},  {
"title": "The Godfather",

"duration": "PT175M",

"actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],

"ratings": [],

"watchlist": [62289, 66380, 34139, 6146]

},  {
"title": "The Dark Knight",

"duration": "PT152M",

"actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],

"ratings": [],

"watchlist": [51417, 62289, 6146, 71389, 7001]

},  {
"title": "Pulp Fiction",

"duration": "PT154M",

"actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],

"ratings": [],

"watchlist": [7001, 9250, 34139, 6146]

},  {
"title": "Schindler's List",

"duration": "PT195M",

"actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],

"watchlist": [15291, 51417, 7001, 9250, 93707]

}];

let users = [{
"userId": 15291,

"email": "Constantin_Kuhlman15@yahoo.com",

"friends": [7001, 51417, 62289]

},    {
"userId": 7001,

"email": "Keven6@gmail.com",

"friends": [15291, 51417, 62289, 66380]

},    {
"userId": 51417,

"email": "Margaretta82@gmail.com",

"friends": [15291, 7001, 9250]

},    {
"userId": 62289,

"email": "Marquise.Borer@hotmail.com",

"friends": [15291, 7001]

}];

```

#### Examples

```javascript
topWatchlistedMoviesAmongFriends(62289), // should return: ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
```

In the example above, user with id 62289 has two friends: user with id=15291 and with id=7001.

Schindler's List is watchlisted by both users, so it will be the most watchlisted

```javascript
topWatchlistedMoviesAmongFriends(15291), should return: ["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]
```

In the example above, user with id 15291 has three friends: users with id=7001, id=51417 and id=62289.

The Dark Knight is the most watched.

Schindler's and Shawshank have both been watched twice, so will be in alphabetical order.

Pulp Fiction and The Godfather have both been watched once, but Pulp fiction comes earlier alphabetically ("P.." vs "T.."), so it makes the top 4.

## Advanced:

Make a terminal script that will create a journal with a short-term memory. Weird, I know. Prompt a user for any content:

What they did yesterday

What their favourite colour is 

Whatever you want! 

Store the user input in an array. Print out all entries in the array. Loop back and prompt the user for the next journal entry. The journal can only contain a maximum of 5 entries, but can loop forever.

## Expert:

Pick any four digit number and do the following: Rearrange the string of digits to form the largest and smallest 4-digit numbers possible. Take these two numbers and subtract the smaller number from the larger. 

Suppose we choose the number 8082.

8820−0288=8532 8532−2358=6174 7641−1467=6174 

It hits 6174 and then stops. Count also how many iterations loops are required to get to this point.

Bonus points for recognising what 6174 is