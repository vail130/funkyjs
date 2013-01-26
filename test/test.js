var F, expect, _;

expect = require('chai').expect;

F = require('../lib/funkyjs');

_ = require('underscore');

describe('F', function() {
  it('should be a function', function() {
    return expect(F).to.be.a('Function');
  });
  return it('should return a function that returns any object or array passed in', function() {
    var result;
    result = F([]);
    expect(result).to.be.a('Function');
    expect(result()).to.be.a('Array');
    result = F({});
    expect(result).to.be.a('Function');
    return expect(result()).to.be.a('Object');
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

describe('Math functions', function() {
  describe('incr(elem, step)', function() {
    return it('should return the element incremented by step', function() {
      return expect(F('incr', 1, 3)).to.equal(4);
    });
  });
  describe('incr(elem)', function() {
    return it('should return the element incremented by 1', function() {
      return expect(F('incr', 8)).to.equal(9);
    });
  });
  describe('incr()', function() {
    return it('should return itself as a callable', function() {
      var incr;
      incr = F('incr');
      expect(incr(1, 3)).to.equal(4);
      return expect(incr(8)).to.equal(9);
    });
  });
  describe('sum(*args)', function() {
    return it('should return the sum of the arguments', function() {
      return expect(F('sum', 1, 3, 8, 34)).to.equal(46);
    });
  });
  describe('sum()', function() {
    return it('should return itself as a callable', function() {
      var sum;
      sum = F('sum');
      return expect(sum(1, 3, 8, 34)).to.equal(46);
    });
  });
  describe('sum-array(list)', function() {
    return it('should return the sum of the list elements', function() {
      return expect(F('sum-array', [1, 3, 8, 34])).to.equal(46);
    });
  });
  describe('sum-array()', function() {
    return it('should return itself as a callable', function() {
      var sumArray;
      sumArray = F('sum-array');
      return expect(sumArray([1, 3, 8, 34])).to.equal(46);
    });
  });
  describe('mult(*args)', function() {
    return it('should return the product of the arguments', function() {
      return expect(F('mult', 1, 3, 8, 34)).to.equal(3 * 8 * 34);
    });
  });
  describe('mult()', function() {
    return it('should return itself as a callable', function() {
      var mult;
      mult = F('mult');
      return expect(mult(1, 3, 8, 34)).to.equal(3 * 8 * 34);
    });
  });
  describe('mult-array(list)', function() {
    return it('should return the product of the list elements', function() {
      return expect(F('mult-array', [1, 3, 8, 34])).to.equal(3 * 8 * 34);
    });
  });
  return describe('mult-array()', function() {
    return it('should return itself as a callable', function() {
      var multArray;
      multArray = F('mult-array');
      return expect(multArray([1, 3, 8, 34])).to.equal(3 * 8 * 34);
    });
  });
});

describe('Object functions', function() {
  describe('unpair(array)', function() {
    return it('should return an object with key value pairs based on arrays of two ' + 'values from the input array', function() {
      var object;
      object = F('unpair', [['a', 1], ['b', 2]]);
      expect(object.a).to.equal(1);
      return expect(object.b).to.equal(2);
    });
  });
  describe('object-surgery(object, key, func)', function() {
    return it('should return an object with value at key run through func', function() {
      var obj, object;
      object = {
        a: 1,
        b: 2
      };
      obj = F('object-surgery', object, 'a', F('incr'));
      expect(object.a).to.equal(2);
      return expect(obj.a).to.equal(2);
    });
  });
  describe('object-surgery(object, key)', function() {
    return it('should return a function taking func as argument to complete', function() {
      var obj, objSurg, object;
      object = {
        a: 1,
        b: 2
      };
      objSurg = F('object-surgery', object, 'a');
      obj = objSurg(F('incr'));
      expect(object.a).to.equal(2);
      return expect(obj.a).to.equal(2);
    });
  });
  describe('object-surgery(object)', function() {
    return it('should return a function taking key and func as argument to complete', function() {
      var obj, objSurg, object;
      object = {
        a: 1,
        b: 2
      };
      objSurg = F('object-surgery', object);
      obj = objSurg('a', F('incr'));
      expect(object.a).to.equal(2);
      return expect(obj.a).to.equal(2);
    });
  });
  return describe('object-surgery()', function() {
    return it('should return itself as callable', function() {
      var obj, objSurg, object;
      object = {
        a: 1,
        b: 2
      };
      objSurg = F('object-surgery');
      obj = objSurg(object, 'a', F('incr'));
      expect(object.a).to.equal(2);
      return expect(obj.a).to.equal(2);
    });
  });
});

describe('Control flow functions', function() {
  return describe('if(condition, positive, negative)', function() {
    return it('should return the result of calling positive or negative based on condition', function() {
      var result;
      result = F('if', true, (function() {
        return 'a';
      }), (function() {
        return 'b';
      }));
      expect(result).to.equal('a');
      result = F('if', false, (function() {
        return 'a';
      }), (function() {
        return 'b';
      }));
      return expect(result).to.equal('b');
    });
  });
});
