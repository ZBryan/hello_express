//test/unit/test_post.js

var expect = require('chai').expect,
	Post = require('../../lib/post');

describe('Post object test', function(){
	var post;

	beforeEach(function(){
		post = new Post('A test post');
	});

	describe('constructor', function(){
		it('post shouldbe truthy (exists)', function(){
			expect(post).to.be.ok;
		});

		it('post should have title property', function(){
			expect(post).to.have.property('title');
		});

		it('post title matches', function(){
			expect(post.title).to.equal('A test post');
		});
	});
});