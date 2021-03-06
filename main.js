/*
=======================================================

** Week 6 - Project 1 **
*** THE OBJECT OF MY AFFECTION: OBJECTS ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

For any methods that we didn't cover, please refer to the Object Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Discovering new things is fun and a great way to learn!!

BASIC TRACK: 1-13
ADVANCED TRACK: 14-20
=======================================================
*/



// 1. Create an object called "me" that describes you with your name, city, and job title.
//    Display the content of the object in the HTML page.

var me = {
  name: "Kevin",
  city: "Eldorado Springs, Colorado",
  jobTile: "Software engineering student",
};

console.log(me);
document.getElementById('q1').innerHTML = "Typing varible does not display object (would like to figure out why). But I have console.logged all objects to show completion. "



// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members and display in the HTML page.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

me.family = ["Kelly", 'Bill', "Theresa"]

document.getElementById('q2').innerHTML = me



// 3. Using the "me" object, use dot notation and bracket notation to access the value of your city and display the results in the HTML page.


document.getElementById('q3').innerHTML = me.city






// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };


// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)
document.getElementById('q4').innerHTML = invitees.adults[0].dinnerChoice[1]

// 5. Access Pablo's table number.
document.getElementById('q5').innerHTML = invitees.children[1].table

// 6. Access Lauren's seating specialConsideration.
document.getElementById('q6').innerHTML = invitees.adults[2].specialConsiderations.seating

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)
document.getElementById('q7').innerHTML = invitees.adults[1].dinnerChoice[2]

// 8. Access Ada's allergies.
document.getElementById('q8').innerHTML = invitees.children[2].allergies

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

invitees.adults[2].dinnerChoiceSentence = "Lauren's appetizer is soup. She will be eating chicken for dinner <br> and has selected ice cream as her dessert"
document.getElementById('q9').innerHTML = invitees.adults[2].dinnerChoiceSentence




// 10. Create an empty object called "jsWorkshop" using Constructor Notation.

var jsWorkshop = new Object()
console.log(jsWorkshop);
document.getElementById('q10').innerHTML = jsWorkshop
// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

jsWorkshop.classmates = ['Tom', ' Trevor', ' Grace', ' Conner', ' Nich']

document.getElementById('q11').innerHTML = jsWorkshop.classmates

// 12. Get the length of the fourth classmate's name.

document.getElementById('q12').innerHTML = jsWorkshop.classmates[3].length

// 13. Clear the classmates value.
delete jsWorkshop.classmates

document.getElementById('q13').innerHTML = "Value of classmates is: " + jsWorkshop.classmates



// ADVANCED TRACK
// A. Create an empty object called "books".

var books = new Object()

document.getElementById('qa').innerHTML = books

// B. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" object.

books.ISBN123456 = {
  title: "Computers can be stupid",
  author: "Steven Hawking",
  pages: 3782,
}
books.ISBN234567 = {
  title: "Information Rules The World",
  author: "Mark Zuckerburg",
  pages: "bookface",
}
books.ISBN345678 = {
  title: "Love Is Strange",
  author: "Anna Lillian Miller",
  pages: 1,
}
console.log(books);
document.getElementById('qb').innerHTML = books

// Final desired result:
    // var books = {ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             }

// C. Access the author of the first book.

document.getElementById('qc').innerHTML = books.ISBN123456.author
// D. Get the length of the author the the third book.

document.getElementById('qd').innerHTML = books.ISBN345678.author.length

// E. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
books.ISBN123456.dateRead = "10/26/2016"
books.ISBN234567.dateRead = "09/18/1991"
books.ISBN345678.dateRead = "10/28/2016"

document.getElementById('qe').innerHTML = books

// F. Remove the second book from the books object.

delete books.ISBN234567

document.getElementById('qf').innerHTML = books

// G. Explain, in your own words, the difference between Literal Notation and Constructor Notation.
document.getElementById('qg').innerHTML = "Literal Notation builds an object with it's properties included before the computer actually creates the object. Constructor Notation has the computer build an object and add the properties in after the fact."
