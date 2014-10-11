
$(document).ready(function(){


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
		//console.log(randomNum);
		storedGuesses = [];
		$('#feedback').text('Make your Guess!');
		$('#count').text(storedGuesses.length);
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

  	
  	$('#guessButton').click(function() {
  		event.preventDefault();
  		takeTurn();
  	});
  	$('input#userGuess').on('keypress', function(event) {
  		if( event.which == 13 ) {
  			event.preventDefault();
  			takeTurn();
  		}
  	});

  	var guess = +$('#userGuess').val();
  	var storedGuesses = []; 


   var takeTurn = function() {
   		var guess = +$('#userGuess').val();
   		$(userGuess).val("");
   		if (numCheck(guess)) {
   			takeGuess(guess);
   			determineTemp(guess);

   		} 

   };

 	var numCheck = function(guess) {
  		//console.log(guess);
  		if(isNaN(guess)) {
			alert('Please Choose A Number')	
		} else if (guess %1 !=0) {
			alert('Please Choose A Whole Integer')
		} else if (guess > 100) {
			alert('Please Choose A Number between 1-100')
		} else {
			return true;
		} return false;
	};


  	var takeGuess = function(guess) {
  		storedGuesses.push(guess);
  		$('#guessList').append('<li>' + storedGuesses[ (storedGuesses.length -1) ] + '</li>');
 		$('#count').text(storedGuesses.length);
 		//console.log(storedGuesses);
  	};
	
	var determineTemp = function(guess) {
			//console.log(guess);
			var difference = Math.abs(randomNum - storedGuesses[ (storedGuesses.length -1) ])
			if (difference === 0) {
				$('#feedback').text('YES! You Guessed it!');
				$('form').hide();	
			} else if (difference <= 5) {
				$('#feedback').text('Your guess is hot lava!');	
			} else if ((difference <= 10)&&(difference > 5)) {
				$('#feedback').text('Your guess is hot!');	
			} else if ((difference <= 20)&&(difference > 10)) {
				$('#feedback').text('Your guess is warm, like a summer evening...');	
			} else if ((difference <= 30)&&(difference > 20 )) {
				$('#feedback').text('Your guess is cool, like an autumn morning...');	
			} else if ((difference <= 60)&&(difference > 30)) {
				$('#feedback').text('Your guess is cold!');
			} else {
				$('#feedback').text('Your guess is freezing cold!');
			}
	};

});


