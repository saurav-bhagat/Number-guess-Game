// you have to generate a random number only once
// from this once generated random number you have to run a functionn 10 times to check the correctness of guesses.

// when count reaches to 10 again run functionn which generate random number and repeat this.

// let's start with starting..
// first user will click the button which will run a functionn..
// , what should happen in that functionn?

// 1---> First check if user input is empty , if so alert and then return ...
// 2---> Check if count is greater than 10 or not?
		

// 		if count== 0 : generate a random number and call validate functionn.
// 		else if count > 10:  Then show game is restarted and again a new number will be generated here only and count=0..
// 		else run validate functionn  :  continuel i.e check for validation of number. count will be increased in each validation.





var count = 0;
var random_number;
function myFunc()
{
	

	console.log("Inside function");
	$('.card').hide();
	if(document.getElementById("user_input").value.length == 0)
	{
	    alert("Please Enter a number");
	    console.log("count is :" + count);
	    return;

	}
	if(count==10)
	{
		$('#content').text("Game is restarted. you have crossed all your 10 chances.")
		count = 0;
	}
	if(count==0)
	{
		random_number = Math.floor(Math.random()*100);
		console.log(random_number);
		validateNum(random_number);
	}
	else
	{
		console.log(random_number);
		validateNum(random_number);
	}
}
function validateNum(random_number)
{

		
		var user_input = document.getElementById('user_input').value;
		
		if(random_number==user_input)
		{
			count++;
			$('#content').text("You guess the number correct.. Game is restarted.")
			$('.card').show();
			count=0;
		}
		else if(user_input > random_number)
		{
			count++;
			var show  = 10-count;
			$('#content').text("OOps!! Your guess was too high...you have "+ show +" chance left");
			$('.card').show();
			console.log("count is :" + count);
		}
		else if(user_input < random_number)
		{
			count++;
			var show = 10-count;
			$('#content').text("OOps!! Your guess was too low... you have "+ show +" chance left");

			$('.card').show();
			console.log("count is :" + count);
		}
	
}

