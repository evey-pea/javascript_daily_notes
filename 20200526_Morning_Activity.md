# 20200526 Morning Challenge

## Convert the following blocks of Ruby code into valid JavaScript code

### Ruby (original)

```ruby
p "Hello World".length  # 11
p "Hello"[0]            # H
p "World"[2]            # r
p "Dog".reverse         # goD
p "mike".upcase         # MIKE
p "DANE".downcase       # dane
p "hello".include?("he")# true
p "hello".index("e")    # 1
name = "Mike"
puts "Hi I'm " + name
name = "Tom"
puts "Your name is #{name}"
user = {
    :name => "Mike",
    :is_subscribed => false,
    :favorite_books => [
        {
            :name => "Green Eggs & Ham",
            :no_pages => 40
        },
        {
            :name => "Cat in the Hat",
            :no_pages => 33
        }
    ]
}
```

### Javascript (ported)

```javascript
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
user = {
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
```

### Ruby (original)

```ruby
puts user[:favorite_books][0][:name]
puts user[:name]
def get_last(names)
    return names[names.length - 1]
end
```

### Javascript (ported)

```javascript
console.log(user.favorite_books[0].name);
console.log(user.name);
function get_last(names){
    return names[names.length - 1];
};
```

### Ruby (original)

```ruby
my_name = ["Mike", "Joe"]
def middle_row_win(board)
    if board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X'
        return true
    end
    return false
end

tic_tac_toe = [
    ["O", "X", "O"],
    ["X", "X", "X"],
    ["", "", "O"]
]
puts middle_row_win(tic_tac_toe)
```

### Javascript (ported)

```javascript
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
```