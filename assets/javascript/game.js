

var wordBank = ['honda', 'toyota', 'nissan', 'lexus', 'ford', 'ferrari', 'pagani', 'audi'];


  console.log(wordBank);
  
  var numGuesses = 5;   
  var correct = 0;


function reset(){
  var randomWord = wordBank[Math.floor((Math.random()*wordBank.length))];
 
  var wordArray = randomWord.split("");

  		console.log(wordArray);


  var blankedWordArray = [];
  var letterGuessed = "";


 

  //Loop for blanksssssssssssssssssssssssss
 
	for (var i=0; i < randomWord.length; i++) {
	  blankedWordArray.push("_ ");


	  var replaceTag = document.getElementById("blanked");
	  var blankedOut = document.createElement("span");
	  blankedOut.innerHTML = blankedWordArray[i];
	  replaceTag.appendChild(blankedOut);
    }
  

  console.log(blankedWordArray);

  //---------------------------------------------

  function guessWrong(){
  	console.log("test!")
    return numGuesses--;
  }

  
  document.getElementById("guesses").innerHTML = numGuesses;


  
  function guessCorrect(){
  	return correct++;
  }


  document.getElementById("Correct").innerHTML = correct;

  document.onkeyup = function(event) {
  	var userInput = event.key; //Registers whatever is last pressed.
  	var keyCodeNumber = event.keyCode; 
  	
  	var letterIndex = wordArray.indexOf(userInput);


  	console.log("User Input: " +userInput);
  	console.log("Key Code Number: "+ keyCodeNumber);
  	console.log("Initial letter Index: "+ letterIndex);

  	if (userInput) { 
  	 
  	  if (keyCodeNumber > 90 || keyCodeNumber < 65) {
 		
  	  }  

  	  else { 	
  	  letterGuessed += String(userInput+" "); 
  	  }

  	}


  	if (wordArray.indexOf(userInput) === 0||1||2||3||4||5||6||7||8){
 		if ((wordArray.indexOf(userInput) === -1)&&((keyCodeNumber <= 90 && keyCodeNumber >= 65) )) {
 		  guessWrong();
 		  console.log("Guesses Left: " + numGuesses)
 		}
  		
  		var counts = {};
  	  	  wordArray.forEach(function(x){
   	  	  counts[x] = (counts[x]||0) + 1;
   	  	  console.log(counts[userInput]);
  		});

  	
  	  for (i=0; i<counts[userInput]; i++){
  	  	

  		var a = wordArray.indexOf(userInput, letterIndex);
  		var a = wordArray.indexOf(userInput, b+1);
  	
  		console.log("Same letter indices: "+ a);

  		blankedWordArray.splice(letterIndex, 1, wordArray[letterIndex]);


  		blankedWordArray.splice(a, 1, wordArray[letterIndex]);

  		console.log(blankedWordArray);

  		var b = a
  		
  			
  	  }	
  	  	for (var i=0; i < randomWord.length; i++) {

  	  	  var blankedOut = document.createElement("span");
  	  	  var textNode = document.createTextNode(blankedWordArray[i]+" ");
	  	  var replaceTag = document.getElementById("blanked");
	  	  	blankedOut.appendChild(textNode);

	  	  replaceTag.replaceChild(blankedOut, replaceTag.childNodes[i]);
  	  	
  		}
  	}

 
  	if (blankedWordArray.toString() === wordArray.toString()){
  	  
  	  guessCorrect();
  	  numGuesses = 5;
  	  blankedWordArray.length = 0;

	    document.getElementById("blanked").innerHTML = "";

      var x = document.getElementById("item");
     
  	  console.log(blankedWordArray)
  	  console.log(correct);
  	 

  	  reset();

  	}

  	else if (numGuesses === 0){
  	  
  	  numGuesses = 5;
  	  blankedWordArray.length = 0;
  	  
  	  document.getElementById("blanked").innerHTML = "";

  	  console.log(blankedWordArray)
  	  console.log("YOU SUUUUUUCK");

  	  reset();
  	}


	document.getElementById("Correct").innerHTML = correct;
	document.getElementById("guesses").innerHTML = numGuesses;
	
	document.getElementById("letg").innerHTML = letterGuessed;
	
  }
}

reset();



