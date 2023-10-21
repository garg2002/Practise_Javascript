console.log("Start");
function greet()
{
    console.log("This is Callback function");
}

setTimeout(greet, 2000);
console.log("End");

/*
Output:-  Start
                End
                This is Callback Function
*/