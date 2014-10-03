
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- New Game ---*/
	var newGame = function() {
		storedNumbers = [];
		generateSecretNumber();
		console.log(random);
		$('#feedback').text('Make your Guess!');
		$('#count').text(storedNumbers.length);
		$('#guessList').find('li').remove();
		$('form').show();
	}

	$('.new').on('click', newGame);

  	var random

  	/*--- Secret Random Number ---*/
	function generateSecretNumber() {
	  	random = Math.floor((Math.random() * 100) + 1);
	}

	generateSecretNumber();
	console.log(random);

	/*--- Take guesses, store them, count them ---*/
	var storedNumbers = [];

	$('input[name="submit"]').on('click', function(event) { 

		/*--- Ensure Guess Is Between 1 & 100 ---*/
		if ($('input[name="userGuess"]').val() < 1 || $('input[name="userGuess"]').val() > 100 || isNaN($('input[name="userGuess"]').val())) {
			alert('please enter a number between 1 & 100!');
		} else {
			storedNumbers.push($('input[name="userGuess"]').val());
			$('input[name="userGuess"]').val('');

			/*--- Show Guess List ---*/
			$('#guessList').append('<li>'+ storedNumbers[storedNumbers.length - 1] +'</li>');

		}

		/*--- Show Guess Count ---*/ 
		$('#count').text(storedNumbers.length);
		console.log(storedNumbers);
		event.preventDefault();

		/*--- Deliver Hotness or Coldness Status ---*/
		if (Math.abs(random - storedNumbers[storedNumbers.length - 1]) > 40) {
			$('#feedback').text('you are ice cold');
		}

		else if (Math.abs(random - storedNumbers[storedNumbers.length - 1]) > 30) {
			$('#feedback').text('you are cold');
		}

		else if (Math.abs(random - storedNumbers[storedNumbers.length - 1]) > 20) {
			$('#feedback').text('you are warm');
		}

		else if (Math.abs(random - storedNumbers[storedNumbers.length - 1]) > 10) {
			$('#feedback').text('you are hot');
		}

		else if (Math.abs(random - storedNumbers[storedNumbers.length - 1]) < 5 && random - storedNumbers[storedNumbers.length - 1] !== 0) {
			$('#feedback').text('you are very hot');
		}

		else if (random - storedNumbers[storedNumbers.length - 1] === 0) {
			$('#feedback').text('you won');
			$('form').hide();
		}

	});
	
});


