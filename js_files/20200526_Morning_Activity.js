console.log("Hello World".length);                  // 11
console.log("Hello"[0]);                            // H
console.log("World"[2]);                            // r
console.log("Dog".split("").reverse().join(""));    // goD
console.log("mike".toUpperCase());                  // MIKE
console.log("DANE".toLowerCase());                  // dane
console.log("hello".includes("he"));                // true
console.log("hello".indexOf("e"));                  // 1
let name = "Mike";
console.log("Hi I'm " + name);
let name = "Tom";
console.log(`Your name is ${name}`);
let user = {
    name: "Mike",
    is_subscribed: false,
    favorite_books: [
        {
            name: "Green Eggs & Ham",
            no_pages: 40
        },
        {
            name: "Cat in the Hat",
            no_pages: 33
        }
    ]
};


console.log(user.favorite_books[0].name);
console.log(user.name);
function get_last(names){
    return names[names.length - 1];
};


let my_name = ["Mike", "Joe"];
function middle_row_win(board){
    if ((board[1][0] === 'X') && (board[1][1] === 'X') && (board[1][2] === 'X')){
        return true;
    } else {
        return false;
    };
};

let tic_tac_toe = [
    ["O", "X", "O"],
    ["X", "X", "X"],
    ["", "", "O"]
]
console.log(middle_row_win(tic_tac_toe));