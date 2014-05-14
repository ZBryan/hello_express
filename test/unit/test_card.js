//test/unit/test_card.js

var expect = require('chai').expect,
	Card = require('../../lib/card');

describe('Card object test', function(){
	var card;

	beforeEach(function(){
		//rank then suit
		card = new Card("Queen", "Spades");
	});

	describe('constructor', function(){
		it('card shouldbe truthy (exists)', function(){
			expect(card).to.be.ok;
		});

		it('card should have rank property', function(){
			expect(card).to.have.property('rank');
		});

		it('card should have suit property', function(){
			expect(card).to.have.property('suit');
		});

		it('card to matche', function(){
			expect(card.toString()).to.equal('Queen of Spades');
		});
	});
});
