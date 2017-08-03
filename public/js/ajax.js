var $friends = $('#friends'); 
var $name = $('#name'); 
var $age = $('#age'); 

var friendTemplate = "" +
"<div>" +
	"<li>" +
	"<p><strong> Name: </strong> {{name}}  </p>" +
	"<p><strong> Age: </strong> {{age}} </p>" +
	"</li>" +
	"<button id='{{id}}' class='remove' style=' border-radius: 20%;'>Remove</button>" +
"</div>";




function addFriend(friend){											// orange=data received
	$friends.append(Mustache.render(friendTemplate, friend));
};

$(document).ready(function(){  // **jQuery Code** When the document has been read and located...it calls the function which is

	$.ajax({
		type: 'GET',
		url: 'https://rest.learncode.academy/api/learncode/friends',
		success: function(friends) { 					// friends = datan from url
			(friends, function(i, friend){		// < a loop taj
				addFriend(friends);
			
			});
		},

		error: function(){
			alert('error loading friends');
		}
	});	
});

	$('#add-friend').on('click', function(){
		var friend = {				//object--friend-- friend is tempp model  | var meaning create to give values of var friend
			name: $name.val(),			// can use either way of writing
			age: $age.val()
		};
			// console.log(friend.name);
		$.ajax({  // frame work
			type: 'POST',
			url: 'https://rest.learncode.academy/api/learncode/friends',
			data: friend,
			success: function(newFriend){
				// console.log(newFriend.name);
				addFriend(newFriend);

			},
			error: function(){
				alert('error saving order');
			}
		});

		// .delegates allows you to remove items that were loaded by other students
		$friends.delegate('.remove', 'click', function(){
			var $li = $(this).closest('div');
		// AJAX DELETE Function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: 'DELETE',
			url: 'https://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});
	});
})






// var $friends = $('#friends'); // declaring variable
// var $name = $('#name'); // declaring variable
// var $age = $('#age'); // declaring variable

// // This is the mustache template
// // this is a great teaching moment for the button id={{id}}
// // This teaches how to identify the

// var friendTemplate = "" +	// mustache template
// 	"<li>" +
// 	"<p><strong> Name: </strong> {{name}} </p>" +
// 	"<p><strong> Age: </strong> {{age}} </p>" +
// 	"<button id='{{id}}' class= 'remove'>X</button>" +
// 	"</li>";

// function addFriend(friend){
// 	$friends.append(Mustache.render(friendTemplate, friend)); // Call out to mustache, pass in template and object inside template
// };

// $(document).ready(function(){  // **jQuery Code** When the document has been read and located...it calls the function which is

// 	$.ajax({
// 		type: 'GET',
// 		url: 'http://rest.learncode.academy/api/learncode/friends',
// 		success: function(friends) {
// 			$.each(friends, function(i, friend){
// 				addFriend(friend);
// 			});
// 		},

// 		error: function(){
// 			alert('error loading friends');
// 		}
// 	});	
// });

// 	$('#add-friend').on('click', function(){ // Adds an event listener to the #add friend button, so when its clicked, said function will run.

// 		var friend = {					// Starts the "friend" variable declaration
// 			name: $name.val(),			// The name key will get the value of the name form field
// 			age: $age.val()				// The age key will get the value of the age form field
// 		};								// Closes the "friend" variable declaration
// 			// console.log(friend.name);
// 		$.ajax({
// 			type: 'POST',
// 			url: 'http://rest.learncode.academy/api/learncode/friends',
// 			data: friend,
// 			success: function(newFriend){
// 				console.log(newFriend.name);
// 				addFriend(newFriend);

// 			},
// 			error: function(){
// 				alert('error saving order');
// 			}
// 		});

// 		// .delegates allows you to remove items that were loaded by other students
// 		$friends.delegate('.remove', 'click', function(){

// 			var $li = $(this).closest('li');
// 		// AJAX DELETE Function - click the .remove class button and the id identifies what to delete
// 		$.ajax({
// 			type: 'DELETE',
// 			url: 'http://rest.learncode.academy/api/learncode/friends/' + $(this).attr('id'),
// 			success: function(){
// 				$li.fadeOut(300, function(){
// 					$(this).remove();
// 				});
// 			}
// 		});
// 	});
// });

