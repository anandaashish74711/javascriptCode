//winning number is 19
//19 your guess is right
//17 too low
//20 too high
let winning_number =19;
let userGuess=+prompt("");
if(userGuess===winning_number){
    console.log("your guess is right!!");
}else{
    console.log("your guess is wrong");
}