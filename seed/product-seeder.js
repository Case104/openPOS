var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [ 
	new Product({
		title: '007 GoldenRye Pale Ale',
		description: 'A golden rye pale ale dry hopped with centennial, cascade & simcoe.',
		imagePath: 'http://www.beer100.com/images/beermug.jpg',
		price: 16
	}),
	new Product({
		title: 'English Mild',
		description: 'This English style ale has nice sessionable ABV and lots of flavor.',
		imagePath: 'http://fullmoonbrewwork.com/wp-content/uploads/2014/06/FMBW_Beers_Phuket-Lager-300x300.png',
		price: 15
	}),
	new Product({
		title: 'Maiden Flight West Coast Stout',
		description: 'The strong tropical hop aroma comes from heavy hopping with Summit, Amarillo & the hop formally known as Equinox. ',
		imagePath: 'http://www.winning-homebrew.com/images/DarkBeerStout.png',
		price: 19
	}),
	new Product({
		title: 'Cranberry Saison',
		description: 'This saison is brewed with wheat, rye and cranberry.',
		imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Dutch_beers.jpg/220px-Dutch_beers.jpg',
		price: 9
	}),
	new Product({
		title: 'Pretzels',
		description: 'Does not even pretend to compete with the Amish Market in town',
		imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_x01yCg0wThX_1fd2L5E-nMmIbg90tXfosQIf7RuPVJfNmNBkw',
		price: 4
	})
]

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
