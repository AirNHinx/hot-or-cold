$(document).ready(function(){

	var answer = getRandomInt();/*Result from 1-100 random number generator*/
	var attempts = 0; /*Number of guess attempts*/

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").click(function() {
  		attempts++;
  		$(this).parent().parent().find('#count').text(attempts);
  		var entered = $(this).parent().find('#userGuess').val();
  		$(this).parent().parent().find('#guessList').append('<li>'+entered+'</li>');
  		if ((!(parseInt(entered)==entered)) || (parseInt(entered)<=0)) {
  			alert("\""+entered+"\""+" Is not a whole integer between 1 and 100.\n Try again");
  		}
  		else {
        entered = parseInt(entered);
  			$(this).parent().parent().find('#feedback').text(temperature(entered,answer));
  		}
  		
  	});

    $("a.new").click(function() {
      answer = getRandomInt();
      attempts = 0;
      var quicker = $(this).parent().parent().parent().parent().parent();
      /*$(this).parent().parent().parent().parent().parent().find('#guessList li').remove();
      $(this).parent().parent().parent().parent().parent().find('#feedback').text("Make Your Guess");
      $(this).parent().parent().parent().parent().parent().find('#count').text(attempts);*/
      quicker.find('#guessList li').remove();
      quicker.find('#feedback').text("Make Your Guess");
      quicker.find('#count').text(attempts);
    });

});

/*---Function to check how hot ot cold---*/
function temperature(guessed,theone) {
	var comment =" ";
  var magnitude = Math.abs(guessed-theone);
	if (magnitude === 0) {
		comment = "You guessed right, Congratulations!!!";
	}
  else if (magnitude <=2) {
    comment = "Steaming Hot!";
  }
  else if ((magnitude <= 5)&&(magnitude > 2)) {
    comment = "Hot!";
  }
  else if ((magnitude <= 35)&&(magnitude > 5)) {
    comment = "Cold";
  }
  else {
    comment = "Chilly Cold";
  }
	
	return comment;
}


/*---Function to return random number integer between 1-100---*/
function getRandomInt() {
  return Math.ceil(Math.random() * 100);
}
