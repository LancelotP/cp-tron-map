var expect = require('expect.js');
var tron = require('../sources/map');

describe('Must return the final position', function () {
    it("['n'] should return [5, 4]", function () {
        return expect(tron(['n'])).to.eql([5, 4]);
    });
    it("['n', 'n', 'n', 'n'] should return [5, 1]", function () {
        return expect(tron(['n', 'n', 'n', 'n'])).to.eql([5, 1]);
    });
    it("['n', 'n', 'n', 'n', 'e', 'e', 'w', 's', 'w', 'e', 's', 's', 'w', 'w'] should return [4, 4]", function () {
        return expect(tron(['n', 'n', 'n', 'n', 'e', 'e', 'w', 's', 'w', 'e', 's', 's', 'w', 'w'])).to.eql([4, 4]);
    });
    it('[] should return [5, 5]', function () {
        return expect(tron([])).to.eql([5, 5]);
    });
});
