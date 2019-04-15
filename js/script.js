	window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;

		function myFunction() {
		  if (window.pageYOffset >= sticky) {
		    navbar.classList.add("sticky")
		  } else {
		    navbar.classList.remove("sticky");
		  }
		}







	var key = '9uzrs7VpfguqgaX5evogUGwxsjAQeOTa';	
	var behanceUser = 'TAK-Design'; 				

	var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser + '/projects?client_id=' + key;


		if($('#project').length > 0) {
		var pageURL = new URL(document.location);
		var params = pageURL.searchParams;
		var id = params.get('id');
		if (id) {
			var urlProjects = 'http://www.behance.net/v2/projects/' + id + '?api_key=' + key;
		}
		$.ajax({
			url: urlProjects,
			dataType: 'jsonp',
			beforeSend: function(res) {
				$('<div class="pre-loader"> ... loading portfolio ... </div>').prependTo('body');
			},
			success: function(res) {
				console.log(res);
				$('.pre-loader').detach();
				var projects = res.projects;
				// https://www.behance.net/dev/api/endpoints/1
				projects.forEach(function(project) {
					$('<li id="list-item">' + '<h4>' + project.name + '</h4>' + '<img src="' + project.covers.original + '"><a class="button" style="display:block" href="project.html?id=' + project.id + '">See more</a></li>').appendTo('div.project-container');
				});
			},
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');
			}
		}); 

	} // END HOMEPAGE template

// ================================== PROJECT PAGE TEMPLATE ====================================================================

	// If the ID #project has been rendered on the page, then run this code
	if($('#project').length > 0) {
 
		var pageURL = new URL(document.location);
		var params = pageURL.searchParams;
		var id = params.get('id');
		var urlProject = 'http://www.behance.net/v2/projects/' + id + '?api_key=' + key;

		// AJAX request
		$.ajax({

			url: urlProject,
			dataType: 'jsonp',

			// let's show a little preloader to the user while they wait for a nice User Experience
			beforeSend: function(res){
				$('<div class="pre-loader"> ... loading behance project ... </div>').prependTo('body');
			},

			// when the ajax request is complete do all of these things
			success: function(res) {

				// Success! We can get rid of the preloader now...
				$('.pre-loader').detach();

				console.log(res);

				var project = res.project;

				// show the project details like this
				$('<h1>' + project.name +'</h1>').appendTo('.main-container');
				$('<h2>' + 'views ' + project.stats.views +'</h2>').appendTo('.main-container');
				$('<h2>' + 'appreciations ' + project.stats.appreciations +'</h2>').appendTo('.main-container');
				$('<h2>' + 'comments ' + project.stats.comments +'</h2>').appendTo('.main-container');
				$('<p>' + project.description + '</p>').appendTo('.main-container');
				// using Moment JS for clean and easy to use time format
				// https://momentjs.com/docs/#/displaying/fromnow/
				// https://momentjs.com/docs/#/displaying/unix-timestamp/
				$('<h3>' + '<small>published:</small>' + moment.unix(project.published_on).fromNow() + '</h3>').appendTo('.main-container');
				$('<img src="' + project.covers.original + '">').appendTo('.main-container');
			},

			// if the ajax request fails do these things as a fallback
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');

			}



		}); 


		// https://api.behance.net/v2/fields?client_id=1234567890 // 
		var urlCreativeFields = 'https://api.behance.net/v2/fields?client_id=' + key;

		$.ajax({
			url: urlCreativeFields,
			dataType: 'jsonp',
			success: function(res) {

				// fields[20].name
				$('<h1>' + res.fields[20].name +'</h1>').appendTo('.drawing-container');
				$('<h1>' + res.popular[11].name +'</h1>').appendTo('.drawing-container');

				if (res.popular[11].name === 'potatoes') { 
					$('<h1>' + res.popular[11].name +'</h1>').appendTo('.drawing-container');
				}

				else if (res.popular[10].name === 'UI/UX') {
					$('body').css('background-color', 'red');
				}
			
			console.log(res);	
			}
		}); // END ajax request

		var urlUserFollowing = 'http://www.behance.net/v2/users/TAK-Design/following?client_id=' + key + '&per_page=1';

		$.ajax({
			url: urlUserFollowing,
			dataType: 'jsonp',
			success: function(res) {
			var following = res.following;				
			following.forEach(function(userFollowers) {
				// console.log(userFollowers);
				$('<li>' + userFollowers.first_name +'</li>').appendTo('.user-followers');
				});
			
			console.log(res);	
			}
		}); // END ajax request

	}


