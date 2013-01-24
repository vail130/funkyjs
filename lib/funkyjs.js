var exports, funkyjs, methods, root, setupMethods, _;

_ = require('underscore');

_.str = require('underscore.string');

methods = {
  'incr': function(elem, step) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['incr'];
      case 1:
        return elem + 1;
      default:
        return elem + step;
    }
  },
  'sum': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['sum'];
      default:
        return _.reduce(args, (function(memo, el) {
          return memo + el;
        }), 0);
    }
  },
  'sum-array': function(list) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['sum-array'];
      default:
        return methods['sum'].apply(this, list);
    }
  },
  'mult': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['mult'];
      default:
        return _.reduce(args, (function(memo, el) {
          return memo * el;
        }), 0);
    }
  },
  'mult-array': function(list) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['mult-array'];
      default:
        return methods['mult'].apply(this, list);
    }
  },
  'generic': function(func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['generic'];
      default:
        return func.apply(this, _.rest(args, 1));
    }
  },
  'un-pair': function(list) {
    var args, item, obj, _i, _len, _results;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['un-pair'];
      default:
        obj = {};
        _results = [];
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          item = list[_i];
          _results.push(obj[item[0]] = item[1]);
        }
        return _results;
    }
  },
  'is': function(value1, value2) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['is'];
      case 1:
        return function(val2) {
          return methods['is'](value1, val2);
        };
      default:
        return value1 === value2;
    }
  },
  'isnt': function(value1, value2) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isnt'];
      case 1:
        return function(val2) {
          return methods['isnt'](value1, val2);
        };
      default:
        return value1 !== value2;
    }
  },
  'and': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['and'];
      default:
        return _.size(args) !== _.size(_.reject(args, function(arg) {
          return !arg;
        }));
    }
  },
  'or': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['and'];
      default:
        return _.size(_.reject(args, function(arg) {
          return !arg;
        }) !== 0);
    }
  },
  'if-then': function(condition, positive) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['if-then'];
      case 1:
        return function(pos) {
          return methods['if-then'](condition, pos);
        };
      default:
        if (condition) {
          return positive;
        }
    }
  },
  'if-else': function(condition, positive, negative) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['if-else'];
      case 1:
        return function(pos, neg) {
          return methods['if-else'](condition, pos, neg);
        };
      case 2:
        return function(neg) {
          return methods['if-else'](condition, positive, neg);
        };
      default:
        if (condition) {
          return positive;
        } else {
          return negative;
        }
    }
  },
  'while': function(condition, func) {
    var args, _results;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['while'];
      case 1:
        return function(fn) {
          return methods['while'](condition, fn);
        };
      default:
        _results = [];
        while (condition) {
          _results.push(func());
        }
        return _results;
    }
  },
  'unless-then': function(condition, positive) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['unless-then'];
      case 1:
        return function(pos) {
          return methods['unless-then'](condition, pos);
        };
      default:
        if (!condition) {
          return positive;
        }
    }
  },
  'unless-else': function(condition, positive, negative) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['unless-else'];
      case 1:
        return function(pos, neg) {
          return methods['unless-else'](condition, pos, neg);
        };
      case 2:
        return function(neg) {
          return methods['unless-else'](condition, positive, neg);
        };
      default:
        if (!condition) {
          return positive;
        } else {
          return negative;
        }
    }
  },
  'until': function(condition, func) {
    var args, _results;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['until'];
      case 1:
        return function(fn) {
          return methods['until'](condition, fn);
        };
      default:
        _results = [];
        while (!condition) {
          _results.push(func());
        }
        return _results;
    }
  },
  'switch': function(input) {
    var arg, args, _i, _len, _ref;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['switch'];
      default:
        _ref = _.rest(args, 1);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          arg = _ref[_i];
          if (arg[0] === input) {
            return arg[1]();
          }
        }
    }
  },
  'let': function(list, func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['let'];
      case 1:
        return function(fn) {
          return methods['let'](list, fn);
        };
      default:
        return func.apply(this, list);
    }
  }
};

setupMethods = function(LIB, one, two, three) {
  var methodName, _fn, _fn1, _i, _j, _k, _len, _len1, _len2, _results;
  _fn = function(name) {
    return methods[name] = function() {
      var args;
      args = _.toArray(arguments);
      switch (args.length) {
        case 0:
          return methods[name];
        case 1:
          return function() {
            return LIB[name].apply(this, _.union([args[0]], _.toArray(arguments)));
          };
        case 2:
          return function() {
            return LIB[name].apply(this, _.union([args[0], args[1]], _.toArray(arguments)));
          };
        default:
          return LIB[name].apply(this, args);
      }
    };
  };
  for (_i = 0, _len = three.length; _i < _len; _i++) {
    methodName = three[_i];
    _fn(methodName);
  }
  _fn1 = function(name) {
    return methods[name] = function() {
      var args;
      args = _.toArray(arguments);
      switch (args.length) {
        case 0:
          return methods[name];
        case 1:
          return function() {
            return LIB[name].apply(this, _.union([args[0]], _.toArray(arguments)));
          };
        default:
          return LIB[name].apply(this, args);
      }
    };
  };
  for (_j = 0, _len1 = two.length; _j < _len1; _j++) {
    methodName = two[_j];
    _fn1(methodName);
  }
  _results = [];
  for (_k = 0, _len2 = one.length; _k < _len2; _k++) {
    methodName = one[_k];
    _results.push((function(name) {
      return methods[name] = function() {
        var args;
        args = _.toArray(arguments);
        switch (args.length) {
          case 0:
            return methods[name];
          default:
            return LIB[name].apply(this, args);
        }
      };
    })(methodName));
  }
  return _results;
};

setupMethods(_, ['uniq', 'first', 'initial', 'last', 'rest', 'flatten', 'object', 'shuffle', 'toArray', 'size', 'compact', 'union', 'intersection', 'zip', 'range', 'bindAll', 'memoize', 'defer', 'once', 'compose', 'keys', 'values', 'invert', 'pairs', 'functions', 'clone', 'isEmpty', 'isElement', 'isArray', 'isObject', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isFinite', 'isBoolean', 'isDate', 'isRegExp', 'isNaN', 'isNull', 'isUndefined', 'identity', 'random', 'escape', 'unescape'], ['each', 'map', 'find', 'filter', 'reject', 'every', 'some', 'max', 'min', 'sortBy', 'where', 'contains', 'pluck', 'groupBy', 'countBy', 'without', 'difference', 'invoke', 'indexOf', 'lastIndexOf', 'sortedIndex', 'bind', 'delay', 'throttle', 'debounce', 'after', 'wrap', 'extend', 'pick', 'omit', 'defaults', 'tap', 'has', 'isEqual', 'times', 'result', 'template'], ['reduce', 'reduceRight']);

setupMethods(_.str, ['numberFormat', 'capitalize', 'clean', 'chars', 'swapCase', 'isBlank', 'lines', 'reverse', 'succ', 'titleize', 'camelize', 'classify', 'underscored', 'dasherize', 'humanize', 'trim', 'ltrim', 'rtrim', 'words', 'toNumber', 'stripTags', 'toSentence', 'toSentenceSerial', 'quote', 'slugify'], ['levenshtein', 'chop', 'include', 'count', 'insert', 'join', 'startsWith', 'endsWith', 'truncate', 'prune', 'sprintf', 'pad', 'lpad', 'rpad', 'lrpad', 'strRight', 'strRightBack', 'strLeft', 'strLeftBack', 'repeat', 'surround'], ['splice']);

funkyjs = function() {
  var args;
  args = _.toArray(arguments);
  if (typeof args[0] === 'string' && methods.hasOwnProperty(args[0])) {
    return methods[args[0]].apply(this, _.rest(args, 1));
  } else if (typeof args[0] === 'function') {
    if (args.length > 1) {
      return function() {
        return args[0].apply(this, _.rest(args, 1));
      };
    } else {
      return function() {
        return args[0].apply(this, _.toArray(arguments));
      };
    }
  }
};

root = this;

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = funkyjs;
  }
  exports.funkyjs = funkyjs;
} else {
  root.funkyjs = funkyjs;
}
