/*
JavaScript Object:-
        Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs.
*/



/*Accessing Object Properties:-

There are two ways to access the properties of an object:
1. Dot notation:-
We use the dot notation to access the properties of an object. It is also called the member access operator.
Syntax:-

objectName.propertyName

*/


// Example:-
let person = { name: "John", age: 31, city: "New York" };
console.log(person.name + " is " + person.age + " years old.");
// Output:- John is 31 years old.




/*
2. Bracket notation:-
We use the bracket notation to access the properties of an object. It is also called the computed member access operator.
Syntax:-

objectName["propertyName"]

*/

//Example:-
let person1 = { name: "John", age: 31, city: "New York" };
console.log(person1["name"] + " is " + person1["age"] + " years old.");

//Output:- John is 31 years old.
//Note:- We can use the bracket notation if the property name contains special characters or space.

//Defining Object method using Object Literal:-
//Example:-

const person2 = { 
    firstName: "John",
    lastName: "Doe",
    age: 31,
    city: "New York",
    fullName: function() {
        return this.firstName + " " + this. lastName; // this keyword is used to access the object itself.
        
    }
};
console.log(person2.fullName());
//Output:- John Doe


/* 
Javascript Nested Objects:-
We can have an object inside another object. For example, an object person can have another object address as its property. We can access the properties of the inner object using a dot (.) notation.
*/

//Example:-
const person3 = {
    name: "Raj",   
    age: 31,
    address: {
        city: "Delhi",
        pinCode: 490001
    }
};
//console.log(person3.address.city);
 // Output:- Delhi

//JavaScript Constructor Function:-
//Example:-
function Person(name, age, city) {

    this.name = name;
    this.age = age;
    this.city = city;
}
let person4 = new Person("Raj", 21, "Delhi"); // new keyword is used to create an instance of the object.
console.log(person4.name + " is " + person4.age + " years old and lives in " + person4.city + ".");

//Output:- Raj is 21 years old and lives in Delhi.

//JavaScript Prototype:-
//Example:-
function Person5(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
Person5.prototype.greet = function() {  
    return "Hello, " + this.name + ".";
}   
let person5 = new Person5("Raj", 21, "Delhi");
console.log(person5.greet());
//Output:- Hello, Raj.
