var exports, funkyjs, methods, root, _;

_ = require('underscore');

_.str = require('underscore.string');

methods = {
  'each': function(list, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['each'];
      case 1:
        return function(it, ctx) {
          return _.each(list, it, ctx);
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
        return function(it, ctx) {
          return _.map(list, it, ctx);
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
        return _.reduce(list, iterator, 0);
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
        return _.reduceRightight(list, iterator, 0);
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
        return function(it, ctx) {
          return _.find(list, it, ctx);
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
        return function(it, ctx) {
          return _.filter(list, it, ctx);
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
        return function(it, ctx) {
          return _.reject(list, it, ctx);
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
        return function(it, ctx) {
          return _.every(list, it, ctx);
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
        return function(it, ctx) {
          return _.some(list, it, ctx);
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
  'bindAll': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['bindAll'];
      default:
        return _.bindAll.apply(this, _.union(object, _.rest(args, 1)));
    }
  },
  'memoize': function(func, hashFunc) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['memoize'];
      default:
        return _.memoize.apply(this, _.union(func, _.rest(args, 1)));
    }
  },
  'delay': function(func, wait) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['delay'];
      case 1:
        return function(wt) {
          return _.delay.apply(this, _.union([func, wt], _.rest(_.toArray(arguments), 1)));
        };
      default:
        return _.delay.apply(this, _.union([func, wait], _.rest(_.toArray(arguments), 2)));
    }
  },
  'defer': function(func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['defer'];
      default:
        return _.defer.apply(this, _.union([func], _.rest(_.toArray(arguments), 1)));
    }
  },
  'throttle': function(func, wait) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['throttle'];
      case 1:
        return function(wt) {
          return _.throttle(func, wt);
        };
      default:
        return _.throttle(func, wait);
    }
  },
  'debounce': function(func, wait, immediate) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['debounce'];
      case 1:
        return function(wt, immed) {
          return _.debounce(func, wt, immed);
        };
      default:
        return _.debounce(func, wait, immediate);
    }
  },
  'once': function(func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['once'];
      default:
        return _.once(func);
    }
  },
  'after': function(count, func) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['after'];
      case 1:
        return function(fn) {
          return _.after(count, fn);
        };
      default:
        return _.after(count, func);
    }
  },
  'wrap': function(func, wrapper) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['wrap'];
      case 1:
        return function(wrap) {
          return _.wrap(func, wrap);
        };
      default:
        return _.wrap(func, wrapper);
    }
  },
  'compose': function() {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['compose'];
      default:
        return _.compose.apply(this, args);
    }
  },
  'keys': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['keys'];
      default:
        return _.keys(object);
    }
  },
  'values': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['values'];
      default:
        return _.values(object);
    }
  },
  'pairs': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['pairs'];
      default:
        return _.pairs(object);
    }
  },
  'invert': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['invert'];
      default:
        return _.invert(object);
    }
  },
  'functions': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['functions'];
      default:
        return _.functions(object);
    }
  },
  'extend': function(destination) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['extend'];
      case 1:
        return function() {
          return _.extend.apply(this, _.union([destination], _.toArray(arguments)));
        };
      default:
        return _.extend.apply(this, _.union([destination], _.rest(args, 1)));
    }
  },
  'pick': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['pick'];
      case 1:
        return function() {
          return _.pick.apply(this, _.union([object], _.toArray(arguments)));
        };
      default:
        return _.pick.apply(this, _.union([object], _.rest(args, 1)));
    }
  },
  'omit': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['omit'];
      case 1:
        return function() {
          return _.omit.apply(this, _.union([object], _.toArray(arguments)));
        };
      default:
        return _.omit.apply(this, _.union([object], _.rest(args, 1)));
    }
  },
  'defaults': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['defaults'];
      case 1:
        return function() {
          return _.defaults.apply(this, _.union([object], _.toArray(arguments)));
        };
      default:
        return _.defaults.apply(this, _.union([object], _.rest(args, 1)));
    }
  },
  'clone': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['clone'];
      default:
        return _.clone(object);
    }
  },
  'tap': function(object, interceptor) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['tap'];
      case 1:
        return function(inter) {
          return _.tap(object, inter);
        };
      default:
        return _.tap(object, interceptor);
    }
  },
  'has': function(object, key) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['has'];
      case 1:
        return function(k) {
          return _.has(object, k);
        };
      default:
        return _.has(object, key);
    }
  },
  'isEqual': function(object, other) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isEqual'];
      case 1:
        return function(oth) {
          return _.isEqual(object, oth);
        };
      default:
        return _.isEqual(object, other);
    }
  },
  'isEmpty': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isEmpty'];
      default:
        return _.isEmpty(object);
    }
  },
  'isElement': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isElement'];
      default:
        return _.isElement(object);
    }
  },
  'isArray': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isArray'];
      default:
        return _.isArray(object);
    }
  },
  'isObject': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isObject'];
      default:
        return _.isObject(object);
    }
  },
  'isArguments': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isArguments'];
      default:
        return _.isArguments(object);
    }
  },
  'isFunction': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isFunction'];
      default:
        return _.isFunction(object);
    }
  },
  'isString': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isString'];
      default:
        return _.isString(object);
    }
  },
  'isNumber': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isNumber'];
      default:
        return _.isNumber(object);
    }
  },
  'isFinite': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isFinite'];
      default:
        return _.isFinite(object);
    }
  },
  'isBoolean': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isBoolean'];
      default:
        return _.isBoolean(object);
    }
  },
  'isDate': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isDate'];
      default:
        return _.isDate(object);
    }
  },
  'isRegExp': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isRegExp'];
      default:
        return _.isRegExp(object);
    }
  },
  'isNaN': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isNaN'];
      default:
        return _.isNaN(object);
    }
  },
  'isNull': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isNull'];
      default:
        return _.isNull(object);
    }
  },
  'isUndefined': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['isUndefined'];
      default:
        return _.isUndefined(object);
    }
  },
  'identity': function(object) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['identity'];
      default:
        return _.identity(object);
    }
  },
  'times': function(n, iterator, context) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['times'];
      case 1:
        return function(it, ctx) {
          return _.times(n, it, ctx);
        };
      default:
        return _.times(n, iterator, context);
    }
  },
  'random': function(min, max) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['random'];
      case 1:
        return _.random(min);
      default:
        return _.random(min, max);
    }
  },
  'escape': function(string) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['escape'];
      default:
        return _.escape(string);
    }
  },
  'unescape': function(string) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['unescape'];
      default:
        return _.unescape(string);
    }
  },
  'result': function(object, property) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['result'];
      case 1:
        return function(prop) {
          return _.result(object, prop);
        };
      default:
        return _.result(object, property);
    }
  },
  'template': function(templateString, data, settings) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['template'];
      default:
        return _.template(templateString, data, settings);
    }
  },
  'numberFormat': function(number, decimals, decimalSeparator, orderSeparator) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['numberFormat'];
      default:
        return _.str.numberFormat(number, decimals, decimalSeparator, orderSeparator);
    }
  },
  'levenshtein': function(string1, string2) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['levenshtein'];
      case 1:
        return function(str2) {
          return _.str.levenshtein(string1, str2);
        };
      default:
        return _.str.levenshtein(string1, string2);
    }
  },
  'capitalize': function(string) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['capitalize'];
      default:
        return _.str.capitalize(string);
    }
  },
  'chop': function(string, step) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['chop'];
      case 1:
        return function(st) {
          return _.str.chop(string, st);
        };
      default:
        return _.str.chop(string, step);
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
  'if-then': function(condition, positive) {
    var args;
    args = _.toArray(arguments);
    switch (args.length) {
      case 0:
        return methods['if-then'];
      case 1:
        return function(pos) {
          if (condition) {
            return pos;
          }
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
          if (condition) {
            return pos;
          } else {
            return neg;
          }
        };
      case 2:
        return function(neg) {
          if (condition) {
            return positive;
          } else {
            return neg;
          }
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
          var _results;
          _results = [];
          while (condition) {
            _results.push(fn());
          }
          return _results;
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
          if (!condition) {
            return pos;
          }
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
          if (!condition) {
            return pos;
          } else {
            return neg;
          }
        };
      case 2:
        return function(neg) {
          if (!condition) {
            return positive;
          } else {
            return neg;
          }
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
        return methods['while'];
      case 1:
        return function(fn) {
          var _results;
          _results = [];
          while (!condition) {
            _results.push(fn());
          }
          return _results;
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
