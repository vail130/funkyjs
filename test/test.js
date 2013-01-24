var F, expect;

expect = require('chai').expect;

F = require('../lib/funkyjs');

describe('F', function() {
  return it('should be a function', function() {
    return expect(F).to.be.a('Function');
  });
});

describe('F(function, *arg1)', function() {
  return it('should return a function that gets applied with original arguments', function() {
    var func, result, result2;
    func = F((function(a) {
      return a + 1;
    }), 8);
    (expect(func)).to.be.a('Function');
    result = func();
    (expect(result)).to.equal(9);
    result2 = func(2);
    return (expect(result2)).to.equal(9);
  });
});

describe('F(function)', function() {
  return it('should return a function that gets applied with current arguments', function() {
    var func, result;
    func = F((function(a) {
      return a + 1;
    }));
    (expect(func)).to.be.a('Function');
    result = func(2);
    return (expect(result)).to.equal(3);
  });
});

describe('Method templates for 3 required arguments with ' + '1, 2, and 3 arguments', function() {});

describe('reduce(list, iterator, memo, [context])', function() {
  return it('should return the sum of all elements', function() {
    var result;
    result = F('reduce', [0, 1, 2, 3], (function(m, a) {
      return a + m;
    }), 0);
    return (expect(result)).to.equal(6);
  });
});

describe('reduce(list, iterator)', function() {
  return it('should return a function requiring memo to complete', function() {
    var reduce, result;
    reduce = F('reduce', [0, 1, 2, 3], (function(m, a) {
      return a + m;
    }));
    (expect(reduce)).to.be.a('Function');
    result = reduce(0);
    return (expect(result)).to.equal(6);
  });
});

describe('reduce(list)', function() {
  return it('should return a function requiring iterator and memo to complete', function() {
    var reduce, result;
    reduce = F('reduce', [0, 1, 2, 3]);
    (expect(reduce)).to.be.a('Function');
    result = reduce((function(m, a) {
      return a + m;
    }), 0);
    return (expect(result)).to.equal(6);
  });
});

describe('Method templates for 2 required arguments with 1 and 2 arguments', function() {
  describe('map(list, iterator)', function() {
    return it('should return a list with new elements', function() {
      var el, i, result, _i, _len, _results;
      result = F('map', [0, 1, 2, 3], (function(a) {
        return a + 1;
      }));
      (expect(result)).to.be.a('Array');
      _results = [];
      for (i = _i = 0, _len = result.length; _i < _len; i = ++_i) {
        el = result[i];
        _results.push((expect(el)).to.equal(i + 1));
      }
      return _results;
    });
  });
  return describe('map(list)', function() {
    return it('should return a function requiring iterator to complete', function() {
      var el, i, map, result, _i, _len, _results;
      map = F('map', [0, 1, 2, 3]);
      (expect(map)).to.be.a('Function');
      result = map((function(a) {
        return a + 1;
      }));
      _results = [];
      for (i = _i = 0, _len = result.length; _i < _len; i = ++_i) {
        el = result[i];
        _results.push((expect(el)).to.equal(i + 1));
      }
      return _results;
    });
  });
});

describe('Method templates for 1 required argument with 1 argument', function() {
  return describe('shuffle(list)', function() {
    return it('should return a list with shuffled elements', function() {
      var result;
      result = F('size', [0, 1, 2, 3]);
      return (expect(result)).to.equal(4);
    });
  });
});

describe('Custom functions', function() {
  return describe('incr()', function() {
    return it('should ', function() {});
  });
});
