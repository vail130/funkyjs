var F, expect;

expect = require('chai').expect;

F = require('../lib/funkyjs');

describe('F', function() {
  return it('should be a function', function() {
    return expect(F).to.be.a('Function');
  });
});

describe('F("map", iterable, operator)', function() {
  return it('should return a new list with operator applied to each element of iterable', function() {
    var it, map, op;
    it = [0, 1, 2, 3];
    op = function(el) {
      return ++el;
    };
    map = F('map', it, op);
    expect(map).to.be.a('Array').and.have.length(4);
    return expect(map[0]).to.equal(1);
  });
});

describe('F("map", iterable)', function() {
  return it('should return a new function taking an operator argument', function() {
    var map, op;
    map = F('map', [0, 1, 2, 3]);
    op = function(el) {
      return ++el;
    };
    expect(map).to.be.a('Function');
    expect(map(op)).to.be.a('Array').and.have.length(4);
    return expect(map(op)[0]).to.equal(1);
  });
});

describe('F("range", start, end, step)', function() {
  return it('should return a list created from arguments', function() {
    var range;
    range = F('range', 0, 5, 2);
    expect(range).to.be.a('Array').and.have.length(3);
    expect(range[0]).to.equal(0);
    expect(range[1]).to.equal(2);
    return expect(range[2]).to.equal(4);
  });
});

describe('F("range", start, end)', function() {
  return it('should return a list created from arguments', function() {
    var range;
    range = F('range', 0, 5);
    expect(range).to.be.a('Array').and.have.length(5);
    return expect(range[2]).to.equal(2);
  });
});

describe('F("range", end)', function() {
  return it('should return a list created from arguments', function() {
    var range;
    range = F('range', 3);
    expect(range).to.be.a('Array').and.have.length(3);
    return expect(range[1]).to.equal(1);
  });
});

describe('F("incr", element, step)', function() {
  return it('should return a new element that has been incremented by step', function() {
    expect(F('incr', 5, -3)).to.equal(2);
    return expect(F('incr', true, 1)).to.equal(2);
  });
});

describe('F("incr", element)', function() {
  return it('should return a new element that has been incremented by 1', function() {
    expect(F('incr', 5)).to.equal(6);
    return expect(F('incr', true)).to.equal(2);
  });
});

describe('F("incr")', function() {
  return it('should return a reference to the "incr" function', function() {
    var incr;
    incr = F('incr');
    expect(incr(5)).to.equal(6);
    return expect(incr(true)).to.equal(2);
  });
});

describe('Composite - SortBy, Zip, Shuffle, Range, Sum-Array', function() {
  return it('should return zipped random arrays sorted by sum of elements', function() {
    var array;
    array = F('sortBy', F('zip', F('shuffle', F('range', 62)), F('shuffle', F('range', 62))), F('sum-array'));
    expect(array).to.be.a('Array').and.to.have.length(62);
    expect(array[0]).to.be.a('Array').and.to.have.length(2);
    return expect(array[0][0] + array[0][1]).to.be.most(array[1][0] + array[1][1]);
  });
});
