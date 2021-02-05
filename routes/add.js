var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	// request.query.name
	// request.query.description

	// var newFriend = {"friends": [
	// 	{
	// 		"name": request.query.name,
	// 		"description": request.query.description,
	// 		"imageURL": "http://lorempixel.com/400/400/people"			
	// 	}
	// ]};
	data.friends.push({"name": request.query.name,
	"description": request.query.description, 
	"imageURL": "http://lorempixel.com/400/400/people"
	});
	response.render('add', data);
 }