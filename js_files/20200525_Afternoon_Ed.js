// Evelyn Paplauskas

/* Afternoon Challenge 20200525 */

/* Additional Challlenges from Ed */

// 1.

let age = 10;

if (age >=18){
    alert('Come in an enjoy a drink!');
} else {
    alert(`Go away! Come back in ${18 - age} years`)
}

// 2.

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


// 3.

function say_hi(name){
    alert(`Hi ${name}`);
};

say_hi(prompt('What is your name?'));