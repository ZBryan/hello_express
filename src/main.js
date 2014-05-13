var $ = require('jquery');

var Post = require('./post');

var how_to = new Post("how to use browserify");

$('body').append('<h2>' + how_to.title + '</h2>');