

var teams = ["Astros", "Braves", "Brewers", "Cardinals", "Cubs",
        "Diamondbacks", "Dodgers", "Giants", "Mets", "Nationals", "Padres",
        "Phillies", "Pirates", "Rockies", "Reds", "Angels", "Athletics",
        "Blue Jays", "Indians", "Mariners", "Marlins", "Orioles", "Rangers",
        "Rays", "Red Sox","Yankees", "Twins", "Royals", "Tigers", "White Sox" ];
var wordUsed, input, placeHolder; 

document.onkeyup = function(startGame){


function startGame()
{
    

    placeHolder = "";
    wordUsed = teams[Math.floor(Math.random()* teams.length)];

    console.log(wordUsed);

    var buttonText = document.getElementById("button").innerHTML = "Guess";

    for (var i = 0; i <wordUsed.length; i++)
    {
    placeHolder += "_";
    }

    document.getElementById("placeHolder").innerHTML = placeHolder;
}

    function guess()
    {
    var correctGuess = true;
    var ip = document.getElementById("letterGuess");
    input = ip.value;

    for(var i = 0; i < wordUsed.length; i++)
{
        if(input === wordUsed.substring(i, i + 1))
        {
            correctGuess = true;
            placeHolder = placeHolder.substring(0, i) +
             input + placeHolder.substring(i + 1,
             placeHolder.length + 1);
        document.getElementById("placeHolder").innerHTML = placeHolder;
        }
       }
    if(correctGuess)
    {
        totalGuesses: 15;
    }
    if (placeHolder === wordUsed)
    {
        alert("You Win!");
    }
    if (totalGuesses = 0)
        alert("You Lose!")
        startGame();
}





startGame();
document.getElementById("button").addEventListener("click", guess);}
