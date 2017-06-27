var passcode = ~~(Math.random() * 1000);
var tries = 15;


while(guess != passcode && tries > 0)
{
    console.log("You have " + tries + " guesses left")
    console.log("Guess a number between 0 and 999");
    var guess = prompt("Enter a number (0-999)");
    tries = tries - 1;
    if (guess == passcode)
    {
        console.log("You win!");
    }
    if (tries == 0)
    {
        console.log("You lose!");
    }else {
        giveClue();
    }
    if (guess == 123)
    {
        alert ("Good job! You can count!");
    }
    if (guess == 666)
    {
        alert ("Welcome to the future. Donald Trump and Vladimir Putin have taken over the world, and there are walls everywhere")
    }
    if (guess == 321)
    {
        alert ("BLAST OFF!")
    }
    if (guess > 999)
    {
        alert ("Hey! Play by the rules!")
    }
    if (guess < 0)
    {
        alert ("Hey! Play by the rules!")
    }
}


function giveClue(){
    if (guess < passcode)
    {
        console.log("Go higher!");
    }
    if (guess > passcode)
    {
        console.log("Go lower!");
    }
}