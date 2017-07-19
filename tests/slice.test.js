'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('silce', function() {
    it('slice array', function() {
        expect(filters.slice([1, 2, 3, 4], {begin: 1, end: 3})).to.deep.equal([2, 3]);
    });

    it('slice string', function() {
        expect(filters.slice('abcd', {begin: 1, end: 3})).to.equal('bc');
    });

    it('slice with empty end parameter', function() {
        expect(filters.slice('abcd', {begin: 1})).to.equal('bcd');
    });

    it('slice with empty begin parameter', function() {
        expect(filters.slice('abcd', {end: 3})).to.equal('abc');
    });
});