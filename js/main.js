$(document).ready(function() {
	var submit = 10;
	//This is the click event.
	$('#submit-btn').on('click', function(event){
		event.preventDefault();
		var city = $('#city-type').val();
		console.log (city);
		if (city ==='New York City' || city === 'NYC' || city === 'New York') {
			$('body').addClass('nyc');
			$('body').removeClass('sf la austin sydney');
		}	else if (city ==='San Francisco' || city === 'SF' || city === 'Bay Area') {
			$('body').addClass('sf');
			$('body').removeClass('nyc la austin sydney');
		}	else if (city ==='Los Angeles' || city === 'LA' || city === 'LAX') {
			$('body').addClass('la');
			$('body').removeClass('nyc sf austin sydney');
		}	else if (city ==='Sydney' || city === 'SYD') {
			$('body').addClass('sydney');
			$('body').removeClass('nyc sf la austin');
		}	else if (city==='ATX' || city === 'Austin') {
			$('body').addClass('austin');
			$('body').removeClass('nyc sf la sydney');
		}
	});

});