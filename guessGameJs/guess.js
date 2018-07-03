var randomNumber = 
    document.getElementById("btn1").addEventListener('click', generateNumber);
    var randomN = Math.random()*100;

function generateNumber(){
    randomN = Math.random()*100;
    randomN = Math.floor(randomN);
    console.log(randomN);
}

generateNumber();

var checkButton = document.getElementById("btn2").addEventListener('click',checkGuess);

function checkGuess(){
    
    var userGuess = document.getElementById("guess").value;
    
    if(userGuess < randomN){
        document.getElementById("resultguess").innerHTML = "too low, guess again!";   
        }
    else if(userGuess > randomN){
        document.getElementById("resultguess").innerHTML = "too high, go lower!";
    }
    else {
        document.getElementById("resultguess").innerHTML = "That's correct, well done! The number is indeed " + userGuess;
        }
    }

/*
function counter();

var guesses = document.getElementById("counterresult").addEventListener('click', counter); 

for(guesses=1; guesses<=100; guesses++){
    document.getElementById("btn2").innerHTML = "That took you " + guesses "!";
}
*/
// 








