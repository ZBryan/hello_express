'use strict';

casper.test.begin('home page', 3, function suite (test){
	casper.start('http://localhost:3000/', function (){
		test.assertHttpStatus(200);
	});

	casper.then(function(){
		test.assertTitle('Hello World Express', 'title is hellow world express');
	});

	casper.then(function(){
		test.assertSelectorHasText('h1', 'Hello World');
	});

	casper.run(function(){
		test.done();
	});
});