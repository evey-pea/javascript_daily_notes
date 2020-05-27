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

#### My solution

```javascript
function topWatchlistedMoviesAmongFriends(userId){
    // Find the user's friends and add them to the friendlist
    let friendList;
    users.forEach(function(user){
        if (userId === user.userId){
            // The friend list is sorted to reduce algorithm complexity in comparison with watchlist
            friendList = user.friends.sort();
        };
    });

    // Create an empty object to store the titles and count of the movies that all of the friends have all seen
    let movieCount = {};

    // Iterate through the movies 
    movies.forEach(function(movie){
        // The watch list is sorted to reduce algorithm complexity in comparison with friend list
        let viewers = movie.watchlist.sort();
        // For each movie.watchlist, iterate thought it
        viewers.forEach(function(viewer){
            // Iterate through the friends list
            friendList.forEach(function(user){
                if (viewer === user){
                    // If a friend has watched the movie, either add it to the moviecount object or increment the count of the movie by one.
                    if (Object.keys(movieCount).includes(movie.title)){
                        movieCount[movie.title] += 1;
                    } else {
                        movieCount[movie.title] = 1;
                    };  
                    // If the user is in the movie watchlist, move on to the next friend
                    return;
                };
            });
        });
    });    
    
    // Export the movieCount object to an array for sorting
    let sortingArray = [];
    for (let [key, value] of Object.entries(movieCount)) {
        sortingArray.push([key, value]);
    };
    
    // Sort the array by the first value (alphabetically)
    function sortByTitle(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    sortingArray = sortingArray.sort(sortByTitle);

    // Sort the array by the second value (count of each movie)
    function sortBySecond(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    }
    sortingArray = sortingArray.sort(sortBySecond);

    // Return the top four movies
    let movieArray = [];
    for (let i = 0; i < sortingArray.length; i++){
        if (sortingArray[i] !== undefined){
            // Stops for loop once index reaches 4
            if (i === 4){
                break;
            } else {
                movieArray.push(sortingArray[i][0]);
            }
        } else {
            movieArray = sortingArray;
        };
    };
    return movieArray;
};


// Returns ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
console.log(topWatchlistedMoviesAmongFriends(62289));

// should return: ["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]
console.log(topWatchlistedMoviesAmongFriends(15291));
```

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