var guessnumber = document.getElementById("guessnumber");
var result = document.getElementById("result");
var randomNumber = Math.floor(Math.random()*10)+ 1;
var totalscore = 10;
var score = document.getElementById("score");

function check()
{
    var enteredNumber = guessnumber.value ;
    if(randomNumber == enteredNumber)
        {
            console.log("Right")
            result.textContent="Right"
            alert("You Won ...")
        }
    else
        {
            totalscore = totalscore - 1;
            score.textContent ="score :" +totalscore;
            console.log("Wrong");
            result.textContent="Wrong"
        }

}