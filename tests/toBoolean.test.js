'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toBoolean', function() {
    it('object transform to boolean', function() {
        expect(filters.toBoolean({a:1, b:2})).to.deep.equal(true);
    });

    it('array transform to boolean', function() {
        expect(filters.toBoolean([1,2])).to.deep.equal(true);
    });

    it('string transform to boolean', function() {
        expect(filters.toBoolean('abc')).to.deep.equal(true);
    });

    it('zero number transform to boolean', function() {
        expect(filters.toBoolean(0)).to.deep.equal(false);
    });

    it('positive number transform to boolean', function() {
        expect(filters.toBoolean(7)).to.deep.equal(true);
    });

    it('negative number transform to boolean', function() {
        expect(filters.toBoolean(-1)).to.deep.equal(false);
    });

    it('regexp transform to boolean', function() {
        expect(filters.toBoolean(/.*/)).to.deep.equal(true);
    });

    it('undefined transform to boolean', function() {
        expect(filters.toBoolean(undefined)).to.deep.equal(false);
    });

    it('null transform to boolean', function() {
        expect(filters.toBoolean(null)).to.deep.equal(false);
    });

    it('true transform to boolean', function() {
        expect(filters.toBoolean(true)).to.deep.equal(true);
    });

    it('false transform to boolean', function() {
        expect(filters.toBoolean(false)).to.deep.equal(false);
    });

    it('zero number string transform to boolean', function() {
        expect(filters.toBoolean('0')).to.deep.equal(false);
    });

    it('positive number string transform to boolean', function() {
        expect(filters.toBoolean('7')).to.deep.equal(true);
    });

    it('negative number string transform to boolean', function() {
        expect(filters.toBoolean('-1')).to.deep.equal(false);
    });

    it('undefined string transform to boolean', function() {
        expect(filters.toBoolean('undefined')).to.deep.equal(false);
    });

    it('null string transform to boolean', function() {
        expect(filters.toBoolean('null')).to.deep.equal(false);
    });

    it('false string transform to boolean', function() {
        expect(filters.toBoolean('false')).to.deep.equal(false);
    });
});