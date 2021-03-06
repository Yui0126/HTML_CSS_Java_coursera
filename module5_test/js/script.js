//Lecture 53*************

// DOM manipulation

// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);


// function sayHello(event) {
//     console.log(this)
//     var name =
//         document.getElementById("name").value; // attach value so that you get the actual element
//     var message = "<h2>Hello " + name + "!</h2>";

//     // document
//     //     .getElementById("content")
//     //     .textContent = message; // //this part gives normal text

//     document
//         .getElementById("content")
//         .innerHTML = message; // this makes the Hello Yui! as h2

//     if (name === "student") {
//         var title =
//             document
//             .querySelector("#title")
//             .textContent;
//         title += " & Lovin' it!";
//         document
//             .querySelector("#title")
//             .textContent = title;
//     }

// }


// //Lecture 54****************

// //Unobstrusive event binding
// document.querySelector("button")
//     .addEventListener("click", sayHello); // telling the operation to use sayHello function 
// // when they click the button. this makes the html less messier
// // also it makes the movements more versatile. 

// document.querySelector("button")
//     .onclick = sayHello;




// // Event handling
// document.addEventListener("DOMContentLoaded", //this DOM Content gets listend before any other document (e.g. css html)
//     function(event) {

//         function sayHello(event) {
//             this.textContent = "Said it!"; //after clicking the "say it", 
//             //it changes it to "said it"
//             //because it is targeting the button element
//             var name =
//                 document.getElementById("name").value;
//             var message = "<h2>Hello " + name + "!</h2>";

//             document
//                 .getElementById("content")
//                 .innerHTML = message;

//             if (name === "student") {
//                 var title =
//                     document
//                     .querySelector("#title")
//                     .textContent;
//                 title += " & Lovin' it!";
//                 document
//                     .querySelector("h1")
//                     .textContent = title;
//             }
//         }

//         // Unobtrusive event binding
//         document.querySelector("button")
//             .addEventListener("click", sayHello);

//     }
// );



// // // document.querySelector("button")
// // //   .onclick = sayHello;


// //Lecture 55*****************
// // Event handling
// document.addEventListener("DOMContentLoaded",
//     function(event) {

//         function sayHello(event) {
//             console.log(event);

//             this.textContent = "Said it!";
//             var name =
//                 document.getElementById("name").value;
//             var message = "<h2>Hello " + name + "!</h2>";

//             document
//                 .getElementById("content")
//                 .innerHTML = message;

//             if (name === "student") {
//                 var title =
//                     document
//                     .querySelector("#title")
//                     .textContent;
//                 title += " & Lovin' it!";
//                 document
//                     .querySelector("h1")
//                     .textContent = title;
//             }
//         }

//         // Unobtrusive event binding
//         document.querySelector("button")
//             .addEventListener("click", sayHello);


//         document.querySelector("body")
//             .addEventListener("mousemove",
//                 function(event) {
//                     if (event.shiftKey === true)
//                         console.log("x: " + event.clientX);
//                     console.log("y: " + event.clientY);
//                 }

//                 // document.querySelector("body")
//                 //     .addEventListener("mousemove",
//                 //         function(event) {
//                 //             if (event.shiftKey === true) {
//                 //                 console.log("x: " + event.clientX);
//                 //                 console.log("y: " + event.clientY);
//                 //             }
//                 //         }
//             );

//     }
// );

//Lecture 57*****************

// // Event handling
// document.addEventListener("DOMContentLoaded",
//     function(event) {

//         // Unobtrusive event binding
//         document.querySelector("button")
//             .addEventListener("click", function() {

//                 // Call server to get the name
//                 $ajaxUtils
//                     .sendGetRequest("data/name.txt",
//                         function(request) {
//                             var name = request.responseText;

//                             document.querySelector("#content")
//                                 .innerHTML = "<h2>Hello " + name + "!</h2>"; // this part of fucntion should be in the ajaxutils 
//                             // because this is asynchronous script and if you put the function below it will be executed just when it is reading this function
//                         });


//             });
//     }
// );

//Lecture 58******************

document.addEventListener("DOMContentLoaded",
    function(event) {

        // Unobtrusive event binding
        document.querySelector("button")
            .addEventListener("click", function() {

                // Call server to get the name
                $ajaxUtils
                    .sendGetRequest("data/name.json",
                        function(res) {
                            var message =
                                res.firstName + " " + res.lastName
                            if (res.likesChineseFood) {
                                message += " likes Chinese food";
                            } else {
                                message += " doesn't like Chinese food";
                            }
                            message += " and uses ";
                            message += res.numberOfDisplays + 1;
                            message += " displays for coding.";

                            document.querySelector("#content")
                                .innerHTML = "<h2>" + message + "</h2>";
                        });
            });
    }
);