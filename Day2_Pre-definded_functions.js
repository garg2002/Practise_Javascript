//1..... IndexOf() function
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
// console.log(pos);

// 2.... lastIndexOf() function
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let str1 = "Please locate where 'locate' occurs!";
let pos1 = str1.lastIndexOf("locate");
//console.log(pos1);

//3.... Include() function    
// The includes() method returns true if a string contains a specified value.

let str2 = "Please locate where 'locate' occurs!";
let pos2 = str2.includes("locate");
// console.log(pos2);

//4.... replace() function
// The replace() method replaces a specified value with another value in a string:

let str3 = "Please visit Microsoft!";
let n = str3.replace("Microsoft", "W3Schools");
//console.log(n);

//5.... split() function
// The split() method is used to split a string into an array of substrings, and returns the new array.
let str4 = "a,b,c,d,e,f";
let arr = str4.split(","); 
// console.log(arr);

//6.... slice() function
// The slice() method extracts parts of a string and returns the extracted parts in a new string.

let str5 = "Apple, Banana, Kiwi";
let res = str5.slice(7, 13);
// console.log(res);

//7.... substring() function
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

let str6 = "Apple, Banana, Kiwi";
let res1 = str6.substring(7, 13);
// console.log(res1);

//8.... substr() function   
// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

let str7 = "Apple, Banana, Kiwi";
let res2 = str7.substr(7, 6);   
//console.log(res2);

//9.... concat() function
// The concat() method is used to join two or more strings.

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// console.log(text3);

//10.... trim() function
// The trim() method removes whitespace from both sides of a string:

let str8 = "       Hello World!        ";
// console.log(str8.trim());

//11.... charAt() function
// The charAt() method returns the character at a specified index (position) in a string:

let str9 = "HELLO WORLD";
// console.log(str9.charAt(0));

//12.... charCodeAt() function
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

let str10 = "HELLO WORLD";
// console.log(str10.charCodeAt(0));

//13.... toUpperCase() function
// The toUpperCase() method converts a string to uppercase letters.

let str11 = "Hello World!";
// console.log(str11.toUpperCase());

//14.... toLowerCase() function
// The toLowerCase() method converts a string to lowercase letters.

let str12 = "Hello World!";
// console.log(str12.toLowerCase());

//15.... typeof() function
// The typeof operator returns the type of a variable, object, function or expression:

let x = 5;
let y = "Hello";
// console.log(typeof x);
// console.log(typeof y);

//16.... instanceof() function
// The instanceof operator returns true if an object is created by a given constructor:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits instanceof Array);   // returns true

//17.... toString() function
// The toString() method returns a number as a string.

let num = 15;
// console.log(num.toString());

//18.... toExponential() function
// The toExponential() method returns a string, with a number rounded and written using exponential notation.

let num1 = 9.656;
// console.log(num1.toExponential(2));

//19.... toFixed() function
// The toFixed() method converts a number into a string, rounding to a specified number of decimals.

let num2 = 9.656;
// console.log(num2.toFixed(0));

//20.... toPrecision() function
// The toPrecision() method formats a number to a specified length.

let num3 = 9.656;
// console.log(num3.toPrecision(2));

//21...localeCompare() function
// The localeCompare() method compares two strings in the current locale.

let str13 = "ab";
let str14 = "cd";
let n1 = str13.localeCompare(str14);

// console.log(n1);

//22.... valueOf() function
// The valueOf() method returns the primitive value of a String object.

let str15 = "Hello World!";
// console.log(str15.valueOf());

//23.... codePointAt() function
// The codePointAt() method returns the Unicode of the character at the specified index in a string.

let str16 = "HELLO WORLD";
// console.log(str16.codePointAt(0));

//24.... endsWith() function
// The endsWith() method determines whether a string ends with the characters of a specified string.

let str17 = "Hello world, welcome to the universe.";
let n2 = str17.endsWith("universe.");
// console.log(n2);

//25.... fromCharCode() function
// The fromCharCode() method converts Unicode values into characters.

let res3 = String.fromCharCode(65); 
// console.log(res3);

//26.... padEnd() function
// The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.

let str18 = "5";
//console.log(str18.padEnd(10, "0"));

//27.... padStart() function
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

let str19 = "5";
//console.log(str19.padStart(10, "9"));  //10 is the length of the string

//28.... repeat() function
// The repeat() method returns a new string with a specified number of copies of the string it was called on.

let str20 = "Hello world!";
//console.log(str20.repeat(5));

//29.... search() function
// The search() method searches a string for a specified value, and returns the position of the match.

let str21 = "Visit W3Schools!";
let n3 = str21.search("W3Schools");
// console.log(n3);

//30.... startsWith() function
// The startsWith() method determines whether a string begins with the characters of a specified string.

let str22 = "Hello world, welcome to the universe.";
let n4 = str22.startsWith("Hello");
// console.log(n4);


//31.... shift() function
// The shift() method removes the first item of an array.

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.shift();   // Removes the first element "Banana" from fruits
// console.log(fruits1);

//32.... unshift() function
// The unshift() method adds new items to the beginning of an array, and returns the new length.

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.unshift("Lemon","Pineapple");    // Adds new elements to the beginning of an array, and returns the new length
// console.log(fruits2);

//33.... pop() function
// The pop() method removes the last element of an array, and returns that element.

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();              // Removes the last element ("Mango") from fruits
// console.log(fruits3);

//34.... push() function
// The push() method adds new items to the end of an array, and returns the new length.

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
// console.log(fruits4);

//35.... sort() function
// The sort() method sorts an array alphabetically.

let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.sort();            // Sorts the elements of fruits
// console.log(fruits5);

//36.... reverse() function
// The reverse() method reverses the elements in an array.

let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.reverse();          // Reverses the order of the elements
// console.log(fruits6);

//37.... reduce() function
// The reduce() method reduces the array to a single value.

let numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);   
let total = 0;
function myFunction(total, value) {
    return total + value;
    }
// console.log(sum);

//38.... forEach() function
// The forEach() method calls a function once for each element in an array, in order.

let numbers1 = [45, 4, 9, 16, 25];
let txt = 10;
numbers1.forEach((element)=>{
    txt = txt + element ;
});
// console.log(txt);

//39.... map() function
// The map() method creates a new array by performing a function on each array element.

let numbers2 = [45, 4, 9, 16, 25];
let numbers3 = numbers2.map((element)=>{
    return element * 2;
});
// console.log(numbers3);

//40.... filter() function
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

let numbers4 = [45, 4, 9, 16, 25];
let numbers5 = numbers4.filter((element)=>{
    return element > 18;
});

// console.log(numbers5);

//41.... every() function
// The every() method check if all array values pass a test.

let numbers6 = [45, 4, 9, 16, 25];
let numbers7 = numbers6.every((element)=>{
    return element > 18;
    }
);
 //console.log(numbers7);

//42.... some() function
// The some() method check if some array values pass a test.    

let numbers8 = [5, 4, 9, 16, 235];
let numbers9 = numbers8.some((element)=>{
    return element > 18;
    }
);
// console.log(numbers9);

//43.... find() function
// The find() method returns the value of the first array element that passes a test function.

let numbers10 = [4, 0, 9, 16, 25];
let numbers11 = numbers10.find((element)=>{
    return element > 18;
    }
);
//console.log(numbers11);

//44.... findIndex() function
// The findIndex() method returns the index of the first array element that passes a test function.

let numbers12 = [4, 0, 9, 16, 25];
let numbers13 = numbers12.findIndex((element)=>{
    return element > 18;
    }
);
//console.log(numbers13);

//45.... bind() function
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

let person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
        }
    };
let myObject = {
    firstName:"Mary",
    lastName: "Doe",
    }
let x1 = person.fullName.bind(myObject);
//console.log(x1());

//46.... call() function
// The call() method calls a function with a given this value and arguments provided individually.

let person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
        }
    }
let person2 = {
    firstName:"John",
    lastName: "Doe",
    }
let x2 = person1.fullName.call(person2);
//console.log(x2);

//47.... apply() function
// The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

let person3 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
        }
    }
let person4 = {
    firstName:"John",
    lastName: "Doe",
    }
let x3 = person3.fullName.apply(person4);
//console.log(x3);

//48.... flat() function
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let arr1 = [1, 2, [3, 4],[1, 2, [3, 4]],[1, 2, [3, 4]]];
let arr2 = arr1.flat();
// console.log(arr2);

//49.... flatMap() function
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.

let arr3 = [1, 2, 3, 4];
let arr4 = arr3.flatMap((element)=>{
    return element * 2;
    }
);
// console.log(arr4);

//50.... from() function
// The from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

let myArr = Array.from("ABCDEFG");
console.log(myArr);



