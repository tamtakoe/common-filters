'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('castArray', function() {
    it('object cast to array', function() {
        expect(filters.castArray({a:1, b:2})).to.deep.equal([{a:1, b:2}]);
    });

    it('array cast to array', function() {
        expect(filters.castArray([1,2])).to.deep.equal([1,2]);
    });

    it('string cast to array', function() {
        expect(filters.castArray('abc')).to.deep.equal(['abc']);
    });

    it('number cast to array', function() {
        expect(filters.castArray(7)).to.deep.equal([7]);
    });

    it('regexp cast to array', function() {
        expect(filters.castArray(/.*/)).to.deep.equal([/.*/]);
    });

    it('undefined cast to array', function() {
        expect(filters.castArray(undefined)).to.deep.equal([]);
    });

    it('null cast to array', function() {
        expect(filters.castArray(null)).to.deep.equal([null]);
    });

    it('true cast to array', function() {
        expect(filters.castArray(true)).to.deep.equal([true]);
    });

    it('false cast to array', function() {
        expect(filters.castArray(false)).to.deep.equal([false]);
    });
});