'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toString', function() {
    it('object transform to string', function() {
        expect(filters.toString({a:1, b:2})).to.deep.equal('[object Object]');
    });

    it('array transform to string', function() {
        expect(filters.toString([1,2])).to.deep.equal('1,2');
    });

    it('string transform to string', function() {
        expect(filters.toString('abc')).to.deep.equal('abc');
    });

    it('number transform to string', function() {
        expect(filters.toString(7)).to.deep.equal('7');
    });

    it('regexp transform to string', function() {
        expect(filters.toString(/.*/)).to.deep.equal('/.*/');
    });

    it('undefined transform to string', function() {
        expect(filters.toString(undefined)).to.deep.equal('');
    });

    it('null transform to string', function() {
        expect(filters.toString(null)).to.deep.equal('');
    });

    it('true transform to string', function() {
        expect(filters.toString(true)).to.deep.equal('true');
    });

    it('false transform to string', function() {
        expect(filters.toString(false)).to.deep.equal('false');
    });
});