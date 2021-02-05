// Get all of our friend data
var data = require('../data.json'); 
//loads JSON fake "database" file into the data variable

exports.view = function(request, response){
	console.log(data);
	// the data variable will get printed to the terminal console
	response.render('index', data);
	// response.render(data);
};

