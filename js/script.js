var key = '9uzrs7VpfguqgaX5evogUGwxsjAQeOTa';	
	var behanceUser = 'TAK-Design'; 				

	var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser + '/projects?client_id=' + key;

	// var designersList = {[
	// 	{
	// 	img: 'img/image-one.png',
	// 	quote: 'insert quote one'
	// 	}
	// 	{
	// 	img:'img/image-two.png',
	// 	quote: 'insert quote two'
	// 	}
	// 	{
	// 	img: 'img/image-three.png',
	// 	quote: 'insert quote three'
	// 	}
	// 	{
	// 	img: 'img/image-four.png',
	// 	quote: 'insert quote four'
	// 	}
	// 	{
	// 	img: 'img/image-five.png',
	// 	quote: 'insert quote five'
	// 	}
	// 	{
	// 	img: 'img/image-six.png',
	// 	quote: 'insert quote six'
	// 	}
	// 	]}

	// 	if($('#').length > 0) {

		

	// 	// AJAX request for PROJECT INFO
	// 	$.ajax({

	// 		url: urlProjects,
	// 		dataType: 'jsonp',

	// 		// let's show a little preloader to the user while they wait for a nice User Experience
	// 		beforeSend: function(res) {
	// 								$('<div class="pre-loader"> ... loading portfolio ... </div>').prependTo('body');
	// 		},

	// 		// when the ajax request is complete do all of these things
	// 		success: function(res) {

	// 			console.log(res);

	// 			// Success! We can get rid of the preloader now...
	// 			$('.pre-loader').detach();

	// 			var projects = res.projects;

	// 			// https://www.behance.net/dev/api/endpoints/1
	// 			projects.forEach(function(project) {
	// 				$('<li>' + '<h4>' + project.name + '</h4>' + '<img src="' + project.covers.original + '"><a href="project.html?id=' + project.id + '">See more</a></li>').appendTo('ul.projects');
	// 			});
	// 		},

	// 		// if the ajax request fails do these things as a fallback
	// 		error: function(res) {
	// 			$('<h1> Error!! </h1>').appendTo('body');
	// 		}

	// 	}); // END ajax request

	// 	var urlUser = 'https://api.behance.net/v2/users/' + behanceUser + '?client_id=' + key;

	// 	// AJAX request for USER INFO
	// 	$.ajax({
	// 		url: urlUser,
	// 		dataType: 'jsonp',
	// 		success: function(res) {
	// 			var user = res.user;
	// 			$('<h1>List of Behance projects for ' + user.first_name + ' ' + user.last_name + '</h1>').prependTo('body');
	// 		}
	// 	}); // END ajax request

	// } // END HOMEPAGE template