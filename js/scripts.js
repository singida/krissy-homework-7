$(document).ready(function() {

	//Goal is to have user able to choose city from dropdown menu and for the background photo to change to match the city

	//User clicks dropdown and sees cities

	// EXAMPLE var animals = ['cat', 'dog', 'horse', 'chicken', 'elephant'];
	var cities = ["New York City", "San Francisco", "Los Angeles", "Atlanta", "Sydney"];

	//this is the loop for each of the elements in the array
	// EXAMPLE for (i=0; i<animals.length; i++) {
	for(i = 0; i < cities.length; i++) {
	//$('#test').append('<option>' + animals[i] + </option>)
	//$ is my selector
	//append is my action/verb
	//then need predicate, is what you would type into html file
	//I'm appending an option and within that option, I want to say the individual elements in my animals array
		$("select").append('<option>'+cities[i]+'</option>')
		$("select").attr('class', '.container');
	}
		// can also be this way
		// cities.forEach(function(element, i) {
		// $('#city-type').append('<option>'+element+'</option>')
		// });

	//i is my index for whatever element i'm on in my array
	// I would make this as specific as possible and use #city-type
	$(".container").change(function(){
		event.preventDefault();

	//when user selects a city, load appropriate picture
		var input = $("#city-type").val();
		
		if (input == "New York City") {
			$('body').attr('class','nyc');
		} else if (input == "San Francisco") {
			$('body').attr('class','sf');
		} else if (input == "Los Angeles") { $('body').attr('class','la');
		} else if (input == "Atlanta") {
			$('body').attr('class','austin');
		} else if (input == "Sydney") {
			$('body').attr('class','sydney');
		}
		// can also be down this way (was pulled and altered from hw 5)
// 		if (input == "New York City") {
// 			$('body').removeClass();
// 			$('body').addClass("nyc");
// //If San Francisco, SF, or Bay Area is input, then upload the SF backdrop			
// 		} else if (input == "San Francisco") {
// 			$('body').removeClass();
// 			$('body').addClass("sf");
// //IF Los Angeles, LA or LAX is input, upload the LA backdrop
// 		} else if (input == "Los Angeles") {
// 			$('body').removeClass();
// 			$('body').addClass("la");
// //If Austin or ATX is input, upload the Austin backdrop
// 		} else if (input == "Austin") {
// 			$('body').removeClass();
// 			$('body').addClass("austin");
// //If Sydney or SYD is input, upload the Sydney backdrop
// 		} else if (input == "Sydney") {
// 			$('body').removeClass();
// 			$('body').addClass("sydney");
// 		}
	});

});

	//OR you can do it this way:
	// var animals = ['cat', 'dog', 'horse', 'chicken', 'elephant'];
	animals.forEach(function(element, i) {
		$('#test').append('<option>' + element + '</option>')
		});
	//anonymous function will take in individual element for my array
	//i usually means index as a counter, like x in algebra
	//if you next a loop in a loop, don't use i again
