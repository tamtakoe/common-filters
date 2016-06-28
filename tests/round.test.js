'use strict';

const expect = require('chai').expect;
const filters = require('../src/common-filters');

describe('round', function() {
    it('integer round to 10', function() {
        expect(filters.round(105, 1)).to.equal(110);
    });

    it('float round to 0.01', function() {
        expect(filters.round(0.105, -2)).to.equal(0.11);
    });

    it('integer round to 10 in string', function() {
        expect(filters.round(105, '1')).to.equal(110);
    });

    it('float round to 0.01 in string', function() {
        expect(filters.round(0.105, '-2')).to.equal(0.11);
    });
});