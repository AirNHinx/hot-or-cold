
$(document).ready(function(){

	//newGame();

	/*--- Start New Game ---*/
	var newGame = function() {
		secretNumber();
		console.log(randomNum);
		storedGuesses = [];
		$('#feedback').text('Make your Guess!');
		$('#count').text(storedNumbers.length);
		$('#guessList').find('li').remove();
		$('form').show();
	};

	$('.new').click(function() {
		newGame();
	});
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Secret Number ---*/
  	function secretNumber() {
  		randomNum = Math.ceil(Math.random()*100);
  	};

  	secretNumber();
 	console.log(randomNum);

  	/*--- Collect, Store, Count Guesses ---*/
  	var storedGuesses = [];

  	$('#guessButton').click(function() {
  		takeGuess();
  	});
  	$('input#userGuess'.on('keypress', function(event) {
  		if( event.which == 13) {
  			event.preventDefault();
  			takeGuess();
  		}
  	});

  	//function for making sure user enters a number
  	var numCheck = function() {
  		var userGuess = +$('#userGuess').val();
  		if(isNaN(userGuess)) {
		alert('Please Choose A Number')	
		} else if (userGuess %1 !=0) {
		alert('Please Choose A Whole Integer')
		} else {
		takeGuess();
		}
	}; 


  	var takeGuess = function(userGuess) {
  		var userGuess = +$('#userGuess').val();
  		


  	}




  		/*--- Display Guesses ---*/


  		/*--- Display Count ---*/



  	/*--- Guess Temp---*/

});


