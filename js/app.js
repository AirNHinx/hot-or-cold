
$(document).ready(function(){

	/*--- Start New Game ---*/
	var newGame = function() {

	};
	
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


  		/*--- Display Guesses ---*/


  		/*--- Display Count ---*/



  	/*--- Guess Temp---*/

});


