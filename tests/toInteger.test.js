'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toInteger', function() {
    it('object transform to integer', function() {
        expect(filters.toInteger({a:1, b:2})).to.equal(0);
    });

    it('array transform to integer', function() {
        expect(filters.toInteger([1,2])).to.equal(0);
    });

    it('number string transform to integer', function() {
        expect(filters.toInteger(' -1 ')).to.equal(-1);
    });

    it('not number string transform to integer', function() {
        expect(filters.toInteger('abc')).to.equal(0);
    });

    it('number transform to integer', function() {
        expect(filters.toInteger(7)).to.equal(7);
    });

    it('regexp transform to integer', function() {
        expect(filters.toInteger(/.*/)).to.equal(0);
    });

    it('undefined transform to integer', function() {
        expect(filters.toInteger(undefined)).to.equal(0);
    });

    it('null transform to integer', function() {
        expect(filters.toInteger(null)).to.equal(0);
    });

    it('true transform to integer', function() {
        expect(filters.toInteger(true)).to.equal(1);
    });

    it('false transform to integer', function() {
        expect(filters.toInteger(false)).to.equal(0);
    });
});