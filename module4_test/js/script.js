var message = "in global";
console.log("global: message = " + message);

var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);

    function b() {
        console.log("b: message = " + message);
    }
    b();
}


a();

var x;
console.log(x);

if (x == undefined) {
    console.log("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined");
} else {
    console.log("x has been defined");
}


// ***** String concatination
var string = "Hello";
//string += " World"; //this line is the same as the line below
string = string + " World";
console.log(string + "!");




// // ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5);

function test1(a) {
    console.log(15 / 5);
}
test1();




// ***** Equality 
var x = 4,
    y = 4;
if (x == y) {
    console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
    console.log("x='4' is equal to y=4");
} //this is type coercion





// ***** Strict equality this is used with triple=
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
} else {
    console
        .log("Strict: x='4' is NOT equal to y=4");
}






// ***** If statement (all false) || is OR
if (false || null ||
    undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
} else {
    console.log("All false");
}

// ***** If statement (all true) && AND
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}





// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() {
    return { //there is a ; here
        name: "Yaakov"
    };
} //this doesn't work because after the return there is a hidden ;

function b() {
    return {
        name: "Yaakov"
    };
}

console.log(a());
console.log(b());


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) { // i++ is i + 1 and this is just defining to inclement
    console.log(i);
    sum = sum + i; // this is for loop
}
console.log("sum of 0 through 9 is: " + sum);


// Lecture 44************

// Default values
function orderChickenWith(sideDish) {
    if (sideDish === undefined) {
        sideDish = "whatever!";
    }
    //sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//the above is too long, so 

function orderChickenWith(sideDish) {
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");
orderChickenWith();




//Lecture 45************

// // Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " 
//   + company.ceo.firstName);

// console.log(company["name"]);
// var stockPropName = "stock of company";
// company[stockPropName] = 110;

// console.log("Stock price is: " + 
//   company[stockPropName]);

// // Better way: object literal
// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// console.log(facebook.ceo.firstName);