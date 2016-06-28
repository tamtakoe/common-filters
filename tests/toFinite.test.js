'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toFinite', function() {
    it('object transform to finite number', function() {
        expect(filters.toFinite({a:1, b:2})).to.equal(0);
    });

    it('array transform to finite number', function() {
        expect(filters.toFinite([1,2])).to.equal(0);
    });

    it('number string transform to finite number', function() {
        expect(filters.toFinite(' -1 ')).to.equal(-1);
    });

    it('not number string transform to finite number', function() {
        expect(filters.toFinite('abc')).to.equal(0);
    });

    it('number transform to finite number', function() {
        expect(filters.toFinite(7)).to.equal(7);
    });

    it('regexp transform to finite number', function() {
        expect(filters.toFinite(/.*/)).to.equal(0);
    });

    it('undefined transform to finite number', function() {
        expect(filters.toFinite(undefined)).to.equal(0);
    });

    it('null transform to finite number', function() {
        expect(filters.toFinite(null)).to.equal(0);
    });

    it('true transform to finite number', function() {
        expect(filters.toFinite(true)).to.equal(1);
    });

    it('false transform to finite number', function() {
        expect(filters.toFinite(false)).to.equal(0);
    });
});