
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

  		/*--- Display Guesses ---*/


  		/*--- Display Count ---*/



  	/*--- Guess Temp---*/

});


