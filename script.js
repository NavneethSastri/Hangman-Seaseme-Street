var words;
var wordsToGuess;
var guesses;
var wins = 0;
var lives = 10;
var loses = 0;

document.getElementById("wins").innerHTML = wins;


function startGame(){
  
  guesses = [];
  wordsToGuess = getRandomWord();
  updateGuesses();
  updateSecretWord();
}

function updateSecretWord(){
  var hasWon = true;
  var progressArray = [];


 for(var i = 0; i < wordsToGuess.length; i++)
    {
      var letter = wordsToGuess.charAt(i);
      if(guesses.indexOf(letter) != -1) 
      {
          progressArray.push(letter + " ");
          
      }
      else 
      {
          hasWon = false;
          progressArray.push("_ ");
          

      }
    }
 document.getElementById("word").innerHTML = progressArray.toString();


if (hasWon === true){
  alert("You won! The word was '" + wordsToGuess + "' It took you " + guesses.length + " guesses.");
  wins++;
  document.getElementById("wins").innerHTML = wins;
}
  
}

function updateGuesses(){
    
    document.getElementById("guesses").innerHTML = "" + guesses.toString();
    
}

function makeGuess(){
  var userGuess = prompt("Enter your Guess!");
  if(userGuess != null && userGuess.length == 1)
    {
      userGuess = userGuess.toLowerCase();
      guesses.push(userGuess.charAt(0));
      updateGuesses();
      updateSecretWord();
      
      
      
    }
else{
  alert("That is not a letter silly!");
  }
}


function getRandomWord(){
  var words = ["oscar", "elmo", "abby", "bigbird", "countdracula", "trash", "can", "grover", "chris", "cookie", "cookiemonster", "monster", "murray", "julia","mrsnuffleupagus","gordon","babybear","bert", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "smarty", "supergrover", "123sesamestreet"]
  return words[Math.floor(Math.random()*words.length)];
}
