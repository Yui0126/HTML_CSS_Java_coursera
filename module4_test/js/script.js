// var message = "in global";
// console.log("global: message = " + message);

// var a = function() {
//     var message = "inside a";
//     console.log("a: message = " + message);

//     function b() {
//         console.log("b: message = " + message);
//     }
//     b();
// }


// a();

// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined");
// } else {
//     console.log("x has been defined");
// }


// // ***** String concatination
// var string = "Hello";
// //string += " World"; //this line is the same as the line below
// string = string + " World";
// console.log(string + "!");




// // // ***** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 5);

// function test1(a) {
//     console.log(15 / 5);
// }
// test1();




// // ***** Equality 
// var x = 4,
//     y = 4;
// if (x == y) {
//     console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x == y) {
//     console.log("x='4' is equal to y=4");
// } //this is type coercion





// // ***** Strict equality this is used with triple=
// if (x === y) {
//     console.log("Strict: x='4' is equal to y=4");
// } else {
//     console
//         .log("Strict: x='4' is NOT equal to y=4");
// }






// // ***** If statement (all false) || is OR
// if (false || null ||
//     undefined || "" || 0 || NaN) {
//     console.log("This line won't ever execute");
// } else {
//     console.log("All false");
// }

// // ***** If statement (all true) && AND
// if (true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }





// // ***** Best practice for {} style
// // Curly brace on the same or next line...
// // Is it just a style?
// function a() {
//     return { //there is a ; here
//         name: "Yaakov"
//     };
// } //this doesn't work because after the return there is a hidden ;

// function b() {
//     return {
//         name: "Yaakov"
//     };
// }

// console.log(a());
// console.log(b());


// // For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) { // i++ is i + 1 and this is just defining to inclement
//     console.log(i);
//     sum = sum + i; // this is for loop
// }
// console.log("sum of 0 through 9 is: " + sum);


// // Lecture 44************

// // Default values
// function orderChickenWith(sideDish) {
//     if (sideDish === undefined) {
//         sideDish = "whatever!";
//     }
//     //sideDish = sideDish || "whatever!";
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noodles");
// orderChickenWith();

// //the above is too long, so 

// function orderChickenWith(sideDish) {
//     sideDish = sideDish || "whatever!";
//     console.log("Chicken with " + sideDish);
// }
// orderChickenWith("noodles");
// orderChickenWith();




//Lecture 45************

// Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company CEO name is: " +
//     company.ceo.firstName);

// console.log(company["name"]); //this selects only the name value
// var stockPropName = "stock of company";
// company[stockPropName] = 110;


// console.log("Stock price is: " +
//     company[stockPropName]);

// // Better way: object literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     "stock of company": 110
// };

// console.log(facebook.ceo.firstName);


// //Lecture 46**************

// function multiply(x, y) {
//     return x * y;
// }
// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// //   // Function factory
// function makeMultiplier(multiplier) {
//     var myFunc = function(x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }



// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// console.log(multiplyBy3(1000))

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// // Passing functions as arguments
// function doOperationOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationOn(5, multiplyBy3);
// console.log(result);

// result = doOperationOn(100, doubleAll);
// console.log(result);



// //Lecture 47**********
// // Copy by Reference vs by Value
// // var a = 7;
// // var b = a;
// // console.log("a: " + a);
// // console.log("b: " + b);

// // b = 5;
// // console.log("after b update:");
// // console.log("a: " + a);
// // console.log("b: " + b);

// // var a = { x: 7 };
// // var b = a;
// // console.log(a);
// // console.log(b);

// // b.x = 5;
// // console.log("after b.x update:");
// // console.log(a);
// // console.log(b);


// // Pass by reference vs by value
// function changePrimitive(primValue) {
//     console.log("in changePrimitive...");
//     console.log("before:");
//     console.log(primValue);

//     primValue = 5;
//     console.log("after:");
//     console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);



// function changeObject(objValue) {
//     console.log("in changeObject...");
//     console.log("before:");
//     console.log(objValue);

//     objValue.x = 5;
//     console.log("after:");
//     console.log(objValue);
// }

// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);

// //Lecture 48****************************
// function test() {
//     console.log(this);
//     this.myName = "Yui";
// }
// test();
// console.log(window.myName);

// // // // Function constructors
// // function Circle(radius) {
// //     this.radius = radius;
// //     this.getArea =
// //         function() {
// //             return Math.PI * Math.pow(this.radius, 2)
// //         };
// // }
// // var myCircle = new Circle(10); // new Object
// // console.log(myCircle.getArea()); //this returns the 10*10*pi

// //but we can make it a bit different like below with prototype

// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea =
//     function() {
//         return Math.PI * Math.pow(this.radius, 2);
//     }; //note that you shouldn't put this function inside the function circle
// //it is waste of space

// var myCircle = new Circle(10); //do not forget "new", as if not, it is going to override the function written  above
// console.log(myCircle);

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// //Lecture 49 ***********************

// // Object literals and "this"
// var literalCircle = {
//     radius: 10,

//     getArea: function() {
//         var self = this; // this makes the radius to 20 instead of 10
//         console.log(this);
//         var increaseRadius = function() {
//             self.radius = 20;
//         };
//         increaseRadius();
//         console.log(this.radius);
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };

// console.log(literalCircle.getArea());

// //Lecture 50**********
// // Arrays
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function(name) {
    console.log("Hello " + name);
};
array[3] = { course: " HTML, CSS & JS" };

console.log(array);
array[2](array[0]);
console.log(array[3].course);



// // Short hand array creation
var names = ["Yaakov", "John", "Joe"];
console.log(names);

for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

names[100] = "Jim";
for (var i = 0; i < names.length; i++) {
    console.log("Hello " + names[i]);
}

var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//     name: "Yaakov",
//     course: "HTML/CSS/JS",
//     platform: "Courera"
// };
// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2) {
//     console.log("Hello " + names2[name]);
// } // to make this work you need to comment out the previous chunk

names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name]);
}


//Lecture 51**************
// Closures
function makeMultiplier(multiplier) {
    // var multiplier = 2;
    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();


    return (
        function(x) {
            return multiplier * x;
        }

    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env


//Lecture 52

//how to use window

(function(window) {
    var yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    var greeting = "Hello ";
    yaakovGreeter.sayHello = function() {
        console.log(greeting + yaakovGreeter.name);
    }

    window.yaakovGreeter = yaakovGreeter; // this should be here to expose yakkovGreeter to global scope

})(window);

(function(window) {
    var johnGreeter = {};
    johnGreeter.name = "John";
    var greeting = "Hi ";
    johnGreeter.sayHi = function() {
        console.log(greeting + johnGreeter.name);
    }

    window.johnGreeter = johnGreeter;

})(window);

yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function(name) {
    console.log("Hello " + name);
})("Coursera!");

$('.button').click(function() {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal-container').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});