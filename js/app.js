
$(document).ready(function(){

	//newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


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
	
	
  	/*--- Secret Number ---*/
  	function secretNumber() {
  		randomNum = Math.ceil(Math.random()*100);
  	};

  	secretNumber();
 	console.log(randomNum);

  	/*--- Collect, Store, Count Guesses ---*/
  	$('#guessButton').click(function() {
  		numCheck();
  	});
  	$('input#userGuess').on('keypress', function(event) {
  		if( event.which == 13) {
  			event.preventDefault();
  			numCheck();
  		}
  	});

  	var guess = +$('#userGuess').val();
  	var storedGuesses = []; 

  	var numCheck = function() {
  		console.log(guess);
  		if(isNaN(guess)) {
			alert('Please Choose A Number')	
		} else if (guess %1 !=0) {
			alert('Please Choose A Whole Integer')
		} else {
		numValCheck();
		}
	};

	var numValCheck = function() {
		if (guess.val() < 100) {
			alert('Please Choose A Number between 1-100')
		} else {
			takeGuess();
		}
	}

  	var takeGuess = function(userGuess) {
  		var Guess = +$('#userGuess').val();
  		storedGuesses.push(guess);
  		$('#guessList').append('<li>' + storedGuesses[storedGuesses.length] + '</li>')
 
  	}




  		/*--- Display Guesses ---*/


  		/*--- Display Count ---*/



  	/*--- Guess Temp---*/

});


