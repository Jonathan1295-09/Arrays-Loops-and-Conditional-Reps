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

////////////
//Wild Wild Life
////////////
{
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
}

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
 let plantee = 1 + 5000
 console.log(plantee)
 
 // Change Wolfy's hometown from "Yukon Territory" to "Gotham City"
  let YukonTerritory = "Gothem City"
  console.log(YukonTerritory)

  // Give dart a second hometown by adding "Hawkins"
  const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
  dart.push("Hawkins");{
  console.log(dart)}