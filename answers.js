for ( var i = 0; i < 20; i++){
    console.log(i)
}

////////////

for ( var i = 0; i < 200; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

///////////

for ( var i = 1; i <100; i++) {
    var three = i % 3;
    var five = i % 5;
    if ( (three == 0) && (five == 0) )
    console.log("FizzBuzz");

    else if ( three == 0 )
    console.log("Fizz");

    else if ( five == 0)
    console.log("Buzz");

    else
    console.log(i)
}