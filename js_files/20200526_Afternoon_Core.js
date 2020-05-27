let movies = [{
    "title": "The Shawshank Redemption",

    "duration": "PT142M",

    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],

    "ratings": [],

    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]

}, {
    "title": "The Godfather",

    "duration": "PT175M",

    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],

    "ratings": [],

    "watchlist": [62289, 66380, 34139, 6146]

}, {
    "title": "The Dark Knight",

    "duration": "PT152M",

    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],

    "ratings": [],

    "watchlist": [51417, 62289, 6146, 71389, 7001]

}, {
    "title": "Pulp Fiction",

    "duration": "PT154M",

    "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],

    "ratings": [],

    "watchlist": [7001, 9250, 34139, 6146]

}, {
    "title": "Schindler's List",

    "duration": "PT195M",

    "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],

    "watchlist": [15291, 51417, 7001, 9250, 93707]

}];

let users = [{
    "userId": 15291,

    "email": "Constantin_Kuhlman15@yahoo.com",

    "friends": [7001, 51417, 62289]

}, {
    "userId": 7001,

    "email": "Keven6@gmail.com",

    "friends": [15291, 51417, 62289, 66380]

}, {
    "userId": 51417,

    "email": "Margaretta82@gmail.com",

    "friends": [15291, 7001, 9250]

}, {
    "userId": 62289,

    "email": "Marquise.Borer@hotmail.com",

    "friends": [15291, 7001]

}];

// Solution code by Evelyn Paplauskas:

function topWatchlistedMoviesAmongFriends(userId) {
    // Find the user's friends and add them to the friendlist
    let friendList;
    users.forEach(function (user) {
        if (userId === user.userId) {
            // The friend list is sorted to reduce algorithm complexity in comparison with watchlist
            friendList = user.friends.sort((a, b) => a - b);
        };
    });
    console.log(`Friends: ${friendList}`);

    // Create an empty object to store the titles and count of the movies that all of the friends have all seen
    let movieCount = {};

    // Iterate through the movies 
    movies.forEach(function (movie) {
        // The watch list is sorted to reduce algorithm complexity in comparison with friend list
        let viewers = movie.watchlist.sort((a, b) => a - b);
        console.log(`Viewers: ${viewers}`);
        // For each movie.watchlist, iterate thought it
        viewers.forEach(function (viewer) {
            // Iterate through the friends list
            friendList.forEach(function (user) {
                if (user < viewer) {
                    return;
                } else if (viewer === user) {
                        // If a friend has watched the movie, either add it to the moviecount object or increment the count of the movie by one.
                        if (Object.keys(movieCount).includes(movie.title)) {
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
    for (let i = 0; i < sortingArray.length; i++) {
        if (sortingArray[i] !== undefined) {
            // Stops for loop once index reaches 4
            if (i === 4) {
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