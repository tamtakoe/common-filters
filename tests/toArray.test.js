'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toArray', function() {
    it('object transform to array', function() {
        expect(filters.toArray({a:1, b:2})).to.deep.equal([1,2]);
    });

    it('array transform to array', function() {
        expect(filters.toArray([1,2])).to.deep.equal([1,2]);
    });

    it('string transform to array', function() {
        expect(filters.toArray('abc')).to.deep.equal(['a', 'b', 'c']);
    });

    it('number transform to array', function() {
        expect(filters.toArray(7)).to.deep.equal([]);
    });

    it('regexp transform to array', function() {
        expect(filters.toArray(/.*/)).to.deep.equal([]);
    });

    it('undefined transform to array', function() {
        expect(filters.toArray(undefined)).to.deep.equal([]);
    });

    it('null transform to array', function() {
        expect(filters.toArray(null)).to.deep.equal([]);
    });

    it('true transform to array', function() {
        expect(filters.toArray(true)).to.deep.equal([]);
    });

    it('false transform to array', function() {
        expect(filters.toArray(false)).to.deep.equal([]);
    });
});