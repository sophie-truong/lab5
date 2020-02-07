
// Get all of our friend data
var data = require('../data.json');
// loads our JSON fake "database" file
// into the data variable
// which will get printed to the terminal
// console via console.log whenever page loads

exports.view = function(request, response){
	console.log(data);
	response.render('index', data);
};

