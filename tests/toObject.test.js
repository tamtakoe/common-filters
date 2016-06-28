'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('toObject', function() {
    it('object transform to object', function() {
        expect(filters.toObject({a:1, b:2})).to.deep.equal({a:1, b:2});
    });

    it('array transform to object', function() {
        expect(filters.toObject([1,2])).to.deep.equal({'0':1, '1': 2});
    });

    it('string transform to object', function() {
        expect(filters.toObject('abc')).to.deep.equal({'0':'a', '1':'b', '2':'c'});
    });

    it('number transform to object', function() {
        expect(filters.toObject(7)).to.deep.equal({});
    });

    it('regexp transform to object', function() {
        expect(filters.toObject(/.*/)).to.deep.equal({});
    });

    it('undefined transform to object', function() {
        expect(filters.toObject(undefined)).to.deep.equal({});
    });

    it('null transform to object', function() {
        expect(filters.toObject(null)).to.deep.equal({});
    });

    it('true transform to object', function() {
        expect(filters.toObject(true)).to.deep.equal({});
    });

    it('false transform to object', function() {
        expect(filters.toObject(false)).to.deep.equal({});
    });
});