'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toDate', function() {
    it('object transform to date', function() {
        expect(filters.toDate({a:1, b:2})).to.deep.equal(new Date(0));
    });

    it('array transform to date', function() {
        expect(filters.toDate([1,2])).to.deep.equal(new Date([1,2]));
    });

    it('string transform to date', function() {
        expect(filters.toDate('abc')).to.deep.equal(new Date(0));
    });

    it('number transform to date', function() {
        expect(filters.toDate(7)).to.deep.equal(new Date(7));
    });

    it('regexp transform to date', function() {
        expect(filters.toDate(/.*/)).to.deep.equal(new Date(0));
    });

    it('undefined transform to date', function() {
        expect(filters.toDate(undefined)).to.deep.equal(new Date(0));
    });

    it('null transform to date', function() {
        expect(filters.toDate(null)).to.deep.equal(new Date(0));
    });

    it('true transform to date', function() {
        expect(filters.toDate(true)).to.deep.equal(new Date(0));
    });

    it('false transform to date', function() {
        expect(filters.toDate(false)).to.deep.equal(new Date(0));
    });
});