var exports, funkyjs, methods, root, _;

_ = require('underscore');

methods = {
  'each': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['each'];
      case 1:
        return function(op, ctx) {
          return _.each(list, op, ctx);
        };
      case 2:
        return _.each(list, iterator);
      default:
        return _.each(list, iterator, context);
    }
  },
  'map': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['map'];
      case 1:
        return function(op, ctx) {
          return _.map(list, op, ctx);
        };
      case 2:
        return _.map(list, iterator);
      default:
        return _.map(list, iterator, context);
    }
  },
  'reduce': function(list, iterator, memo, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['reduce'];
      case 1:
        return function(it, m, ctx) {
          return _.reduce(list, it, m, ctx);
        };
      case 2:
        return function(m, ctx) {
          return _.reduce(list, iterator, m, ctx);
        };
      case 3:
        return _.reduce(list, iterator, memo);
      default:
        return _.reduce(list, iterator, memo, context);
    }
  },
  'reduceRight': function(list, iterator, memo, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['reduceRight'];
      case 1:
        return function(it, m, ctx) {
          return _.reduceRightight(list, it, m, ctx);
        };
      case 2:
        return function(m, ctx) {
          return _.reduceRightight(list, iterator, m, ctx);
        };
      case 3:
        return _.reduceRightight(list, iterator, memo);
      default:
        return _.reduceRightight(list, iterator, memo, context);
    }
  },
  'find': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['find'];
      case 1:
        return function(op, ctx) {
          return _.find(list, op, ctx);
        };
      case 2:
        return _.find(list, iterator);
      default:
        return _.find(list, iterator, context);
    }
  },
  'filter': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['filter'];
      case 1:
        return function(op, ctx) {
          return _.filter(list, op, ctx);
        };
      case 2:
        return _.filter(list, iterator);
      default:
        return _.filter(list, iterator, context);
    }
  },
  'where': function(list, properties) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['where'];
      case 1:
        return function(props) {
          return _.where(list, props);
        };
      default:
        return _.where(list, properties);
    }
  },
  'reject': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['reject'];
      case 1:
        return function(op, ctx) {
          return _.reject(list, op, ctx);
        };
      case 2:
        return _.reject(list, iterator);
      default:
        return _.reject(list, iterator, context);
    }
  },
  'every': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['every'];
      case 1:
        return function(op, ctx) {
          return _.every(list, op, ctx);
        };
      case 2:
        return _.every(list, iterator);
      default:
        return _.every(list, iterator, context);
    }
  },
  'some': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['some'];
      case 1:
        return function(op, ctx) {
          return _.some(list, op, ctx);
        };
      case 2:
        return _.some(list, iterator);
      default:
        return _.some(list, iterator, context);
    }
  },
  'contains': function(list, value) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['contains'];
      case 1:
        return function(val) {
          return _.contains(list, val);
        };
      default:
        return _.contains(list, value);
    }
  },
  'invoke': function(list, methodName) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['invoke'];
      case 1:
        return function(mn) {
          return _.invoke(list, mn);
        };
      default:
        return _.invoke.apply(this, _.union([list, methodName], _.rest(args(2))));
    }
  },
  'pluck': function(list, propertyName) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['pluck'];
      case 1:
        return function(prop) {
          return _.pluck(list, prop);
        };
      default:
        return _.pluck(list, propertyName);
    }
  },
  'max': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['max'];
      case 1:
        return function(it, ctx) {
          return _.max(list, it, ctx);
        };
      case 2:
        return _.max(list, iterator);
      default:
        return _.max(list, iterator, context);
    }
  },
  'min': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['min'];
      case 1:
        return function(it, ctx) {
          return _.min(list, it, ctx);
        };
      case 2:
        return _.min(list, iterator);
      default:
        return _.min(list, iterator, context);
    }
  },
  'sortBy': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['sortBy'];
      case 1:
        return function(it, ctx) {
          return _.sortBy(list, it, ctx);
        };
      case 2:
        return _.sortBy(list, iterator);
      default:
        return _.sortBy(list, iterator, context);
    }
  },
  'groupBy': function(list, iterator) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['groupBy'];
      case 1:
        return function(it) {
          return _.groupBy(list, it);
        };
      default:
        return _.groupBy(list, iterator);
    }
  },
  'countBy': function(list, iterator) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['countBy'];
      case 1:
        return function(it) {
          return _.countBy(list, it);
        };
      default:
        return _.countBy(list, iterator);
    }
  },
  'shuffle': function(list) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['shuffle'];
      default:
        return _.shuffle(list);
    }
  },
  'toArray': function(list) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['toArray'];
      default:
        return _.toArray(list);
    }
  },
  'size': function(list) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['size'];
      default:
        return _.size(list);
    }
  },
  'first': function(array, n) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['first'];
      case 1:
        return _.first(array);
      default:
        return _.first(array, n);
    }
  },
  'initial': function(array, n) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['initial'];
      case 1:
        return _.initial(array);
      default:
        return _.initial(array, n);
    }
  },
  'last': function(array, n) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['last'];
      case 1:
        return _.last(array);
      default:
        return _.last(array, n);
    }
  },
  'rest': function(array, index) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['rest'];
      case 1:
        return _.rest(array);
      default:
        return _.rest(array, index);
    }
  },
  'compact': function(array) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['compact'];
      default:
        return _.compact(array);
    }
  },
  'flatten': function(array, shallow) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['flatten'];
      case 1:
        return _.flatten(array);
      default:
        return _.flatten(array, shallow);
    }
  },
  'without': function(array) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['without'];
      default:
        return _.without.apply(this, _.union(array, _.rest(args, 1)));
    }
  },
  'union': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['union'];
      default:
        return _.union.apply(this, args);
    }
  },
  'intersection': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['intersection'];
      default:
        return _.intersection.apply(this, args);
    }
  },
  'difference': function(array) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['difference'];
      case 1:
        return function() {
          return _.difference.apply(this, _.union(array, _.toArray(arguments)));
        };
      default:
        return _.intersection.apply(this, _.union(array, _.rest(args, 1)));
    }
  },
  'uniq': function(array, isSorted, iterator) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['uniq'];
      case 1:
        return _.uniq(array);
      case 2:
        return _.uniq(array, isSorted);
      default:
        return _.uniq(array, isSorted, iterator);
    }
  },
  'zip': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['zip'];
      default:
        return _.zip.apply(this, args);
    }
  },
  'object': function(list, values) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['object'];
      case 1:
        return _.object(list);
      default:
        return _.object(list, values);
    }
  },
  'indexOf': function(array, value, isSorted) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['indexOf'];
      case 1:
        return function(val, isSort) {
          return _.indexOf(array, val, isSort);
        };
      case 2:
        return _.indexOf(array, value);
      default:
        return _.indexOf(array, value, isSorted);
    }
  },
  'lastIndexOf': function(array, value, fromIndex) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['lastIndexOf'];
      case 1:
        return function(val, from) {
          return _.lastIndexOf(array, val, from);
        };
      case 2:
        return _.lastIndexOf(array, value);
      default:
        return _.lastIndexOf(array, value, fromIndex);
    }
  },
  'sortedIndex': function(list, value, iterator) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['sortedIndex'];
      case 1:
        return function(val, it) {
          return _.sortedIndex(list, val, it);
        };
      case 2:
        return _.sortedIndex(list, value);
      default:
        return _.sortedIndex(list, value, iterator);
    }
  },
  'range': function(start, end, step) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['range'];
      case 1:
        return _.range(0, start, 1);
      case 2:
        return _.range(start, end, 1);
      default:
        return _.range(start, end, step);
    }
  },
  'bind': function(func, object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['bind'];
      case 1:
        return function(obj) {
          return _.bind(func, obj);
        };
      default:
        return _.bind.apply(this, _.union([func, obj], _.rest(args, 2)));
    }
  },
  'self': function(elem) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['self'];
      default:
        return elem;
    }
  },
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
  }
};

funkyjs = function() {
  var __args;
  __args = _.toArray(arguments);
  if (__args[0] && methods.hasOwnProperty(__args[0])) {
    return methods[__args[0]].apply(this, _.rest(__args, 1));
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
