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
        }), 1);
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
  'unpair': function(list) {
    var args, item, object, _i, _len;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['unpair'];
      default:
        object = {};
        for (_i = 0, _len = list.length; _i < _len; _i++) {
          item = list[_i];
          if (object.hasOwnProperty(item[0])) {
            if (_.isArray(object[item[0]])) {
              object[item[0]].push(item[1]);
            } else {
              object[item[0]] = [object[item[0]], item[1]];
            }
          } else {
            object[item[0]] = item[1];
          }
        }
        return object;
    }
  },
  'object-surgery': function(object, key, func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['object-surgery'];
      case 1:
        return function(k, fn) {
          return methods['object-surgery'](object, k, fn);
        };
      case 2:
        return function(fn) {
          return methods['object-surgery'](object, key, fn);
        };
      default:
        object[key] = func(object[key]);
        return object;
    }
  },
  'array-surgery': function(list, index, func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['array-surgery'];
      case 1:
        return function(idx, fn) {
          return methods['array-surgery'](list, idx, fn);
        };
      case 2:
        return function(fn) {
          return methods['array-surgery'](list, index, fn);
        };
      default:
        list[index] = func(list[index]);
        return list;
    }
  },
  'strToBool': function(string) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['strToBool'];
      default:
        if (string === 'false') {
          return false;
        } else {
          if (string === 'true') {
            return true;
          } else {
            return string;
          }
        }
    }
  },
  'not': function(value) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['not'];
      default:
        return !value;
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
        return methods['or'];
      default:
        return _.size(_.reject(args, function(arg) {
          return !arg;
        }) !== 0);
    }
  },
  'xor': function() {
    var args, _ref;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['xor'];
      default:
        return _.size((_ref = _.reject(args, function(arg) {
          return !arg;
        })) !== 0 && _ref !== _.size(args));
    }
  },
  'if': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['if'];
      case 1:
        return function(cond) {
          return methods['if'](cond, args[0]);
        };
      case 2:
        return function(cond) {
          return methods['if'](cond, args[0], args[1]);
        };
      default:
        if (args[0]) {
          return typeof args[1] === "function" ? args[1]() : void 0;
        } else {
          return typeof args[2] === "function" ? args[2]() : void 0;
        }
    }
  },
  'while': function() {
    var args, _results;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['while'];
      case 1:
        return function(fn) {
          return methods['while'](args[0], fn);
        };
      default:
        _results = [];
        while (typeof args[0] === "function" ? args[0]() : void 0) {
          _results.push(typeof args[1] === "function" ? args[1]() : void 0);
        }
        return _results;
    }
  },
  'unless': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['unless'];
      case 1:
        return function(cond) {
          return methods['unless'](cond, args[0]);
        };
      case 2:
        return function(cond) {
          return methods['unless'](cond, args[0], args[1]);
        };
      default:
        if (!args[0]) {
          return typeof args[1] === "function" ? args[1]() : void 0;
        } else {
          return typeof args[2] === "function" ? args[2]() : void 0;
        }
    }
  },
  'until': function() {
    var args, _results;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['until'];
      case 1:
        return function(fn) {
          return methods['until'](args[0], fn);
        };
      default:
        _results = [];
        while (!(typeof args[0] === "function" ? args[0]() : void 0)) {
          _results.push(typeof args[1] === "function" ? args[1]() : void 0);
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
  'call': function() {
    var args, func;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['call'];
      default:
        func = _.last(args);
        if (typeof func === 'function') {
          return func.apply(this, _.initial(args));
        }
    }
  },
  'compose': function() {
    var args, func, funcs, val, _i, _len;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['compose'];
      default:
        val = _.last(args);
        funcs = _.initial(_.rest(args, 1));
        funcs.reverse();
        for (_i = 0, _len = funcs.length; _i < _len; _i++) {
          func = funcs[_i];
          val = func(val);
        }
        return val;
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
  } else {
    return _.identity(args[0]);
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
