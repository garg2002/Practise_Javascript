 //Var vs Let vs Const

//var is function scoped
function xyz()
{
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
// xyz();

//let is block scoped
function abc()
{
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
// abc();
//const is block scoped
function pqr(){
   for (const x = 5; x >=1; x--) {
       console.log(x);
   }
   console.log(x);
}
// pqr();

/********************************************************************************** */

//Arrow Functions -> Anonymous Functions(No name)

//1. Normal way of writing a function
var sum = function(a,b){
    return a+b;
}    
// console.log(sum(5,6));  

//2. Another way of writing the above function
var sum = (a,b) => a+b;  //If there is only one line in the function body then we can write it like this
// console.log(sum(5,6));


//3. Another way of writing the above function
var sum = (a,b) => {
    return a+b; //If there is more than one line in the function body then we can write it like this
}
// console.log(sum(5,8));

/********************************************************************************** */ 
// SetTimeout using var
function set(){
    for (var i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log(i);
        },1);
    }
}
// set();

// SetTimeout using let
function set(){
    for (let i = 0; i < 5; i++) {
        setTimeout(function(){
            console.log(i);
        },1);
    }
}
// set();

/*==============================================================================================*/

//Javascript Interview Questions
function Interview()
{
    console.log("9">"10"); 
        //true 

    console.log("9">10); 
        //false

    console.log("">-1);
        //true

    console.log("ram">1);
        //false
    
    console.log([2]==[2]);   //Two different arrays are always unequal
    //false

    console.log([2]==2);     //Array is converted to string and then compared
    //true
}
// Interview();

/*==============================================================================================*/

//difference between == and ===

function diff()
{
    console.log(2 == "2"); //String is converted to number and then compared
    //true

    console.log(2 === "2"); //String is not converted to number and then compared
    //false
}
// diff();

/*==============================================================================================*/

//difference between null and undefined

function diff2()
{
    var a;
    console.log(a); //undefined

    var b = null;
    console.log(b); //null

}
// diff2();

/*==============================================================================================*/

//Difference between reference and copy in javascript

function diff3()
{
    //copy in array
    console.log("copy in array");
    let a =[1,2,3,4,5] ;
    let b = [...a]; //using spread operator
    b.push(6);
    console.log(a); //5
    console.log(b); //6

    //reference in array
    console.log("reference in array");
    let c = [1,2,3,4,5];
    let d = c; //using assignment operator
    d.push(6);
    console.log(c); //[1,2,3,4,5,6]
    console.log(d); //[1,2,3,4,5,6]
}
// diff3();

/*==============================================================================================*/

//Swap the two number without using third variable

function swap()
{
    let a = 5;
    let b = 6;
    console.log("before swapping");
    console.log("value of a="+a, "value of b="+b);
    [a,b] = [b,a];
    console.log("after swapping");
    console.log("value of a="+a, "value of b="+b);
}
// swap();

/*==============================================================================================*/


