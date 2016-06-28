'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toNumber', function() {
    it('object transform to number', function() {
        expect(filters.toNumber({a:1, b:2})).to.be.NaN;
    });

    it('array transform to number', function() {
        expect(filters.toNumber([1,2])).to.be.NaN;
    });

    it('number string transform to number', function() {
        expect(filters.toNumber(' -1 ')).to.equal(-1);
    });

    it('not number string transform to number', function() {
        expect(filters.toNumber('abc')).to.be.NaN;
    });

    it('number transform to number', function() {
        expect(filters.toNumber(7)).to.equal(7);
    });

    it('regexp transform to number', function() {
        expect(filters.toNumber(/.*/)).to.be.NaN;
    });

    it('undefined transform to number', function() {
        expect(filters.toNumber(undefined)).to.be.NaN;
    });

    it('null transform to number', function() {
        expect(filters.toNumber(null)).to.equal(0);
    });

    it('true transform to number', function() {
        expect(filters.toNumber(true)).to.equal(1);
    });

    it('false transform to number', function() {
        expect(filters.toNumber(false)).to.equal(0);
    });
});