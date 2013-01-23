_ = require 'underscore'

methods =
  
  #
  #  Collection Functions (Arrays or Objects)
  #
  
  # Curry with just list param
  'each': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['each']
      when 1 then (it, ctx) -> _.each list, it, ctx
      when 2 then _.each list, iterator
      else _.each list, iterator, context
  
  # Curry with just list param
  'map': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['map']
      when 1 then (it, ctx) -> _.map list, it, ctx
      when 2 then _.map list, iterator
      else _.map list, iterator, context
  
  # Curry with just list param
  'reduce': (list, iterator, memo, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['reduce']
      when 1 then (it, m, ctx) -> _.reduce list, it, m, ctx
      when 2 then _.reduce list, iterator, 0
      when 3 then _.reduce list, iterator, memo
      else _.reduce list, iterator, memo, context
  
  # Curry with just list param
  'reduceRight': (list, iterator, memo, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['reduceRight']
      when 1 then (it, m, ctx) -> _.reduceRightight list, it, m, ctx
      when 2 then _.reduceRightight list, iterator, 0
      when 3 then _.reduceRightight list, iterator, memo
      else _.reduceRightight list, iterator, memo, context
  
  'find': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['find']
      when 1 then (it, ctx) -> _.find list, it, ctx
      when 2 then _.find list, iterator
      else _.find list, iterator, context
  
  'filter': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['filter']
      when 1 then (it, ctx) -> _.filter list, it, ctx
      when 2 then _.filter list, iterator
      else _.filter list, iterator, context
  
  'where': (list, properties) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['where']
      when 1 then (props) -> _.where list, props
      else _.where list, properties
  
  'reject': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['reject']
      when 1 then (it, ctx) -> _.reject list, it, ctx
      when 2 then _.reject list, iterator
      else _.reject list, iterator, context
  
  'every': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['every']
      when 1 then (it, ctx) -> _.every list, it, ctx
      when 2 then _.every list, iterator
      else _.every list, iterator, context
  
  'some': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['some']
      when 1 then (it, ctx) -> _.some list, it, ctx
      when 2 then _.some list, iterator
      else _.some list, iterator, context
  
  'contains': (list, value) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['contains']
      when 1 then (val) -> _.contains list, val
      else _.contains list, value
  
  'invoke': (list, methodName) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['invoke']
      when 1 then (mn) -> _.invoke list, mn
      else _.invoke.apply @, _.union [list, methodName], _.rest args 2
  
  'pluck': (list, propertyName) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['pluck']
      when 1 then (prop) -> _.pluck list, prop
      else _.pluck list, propertyName
  
  'max': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['max']
      when 1 then (it, ctx) -> _.max list, it, ctx
      when 2 then _.max list, iterator
      else _.max list, iterator, context
  
  'min': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['min']
      when 1 then (it, ctx) -> _.min list, it, ctx
      when 2 then _.min list, iterator
      else _.min list, iterator, context
  
  'sortBy': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['sortBy']
      when 1 then (it, ctx) -> _.sortBy list, it, ctx
      when 2 then _.sortBy list, iterator
      else _.sortBy list, iterator, context
  
  'groupBy': (list, iterator) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['groupBy']
      when 1 then (it) -> _.groupBy list, it
      else _.groupBy list, iterator
  
  'countBy': (list, iterator) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['countBy']
      when 1 then (it) -> _.countBy list, it
      else _.countBy list, iterator
  
  'shuffle': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['shuffle']
      else _.shuffle list
  
  'toArray': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['toArray']
      else _.toArray list
  
  'size': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['size']
      else _.size list
  
  #
  #  Array Functions
  #
  
  'first': (array, n) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['first']
      when 1 then _.first array
      else _.first array, n
  
  'initial': (array, n) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['initial']
      when 1 then _.initial array
      else _.initial array, n
  
  'last': (array, n) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['last']
      when 1 then _.last array
      else _.last array, n
  
  'rest': (array, index) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['rest']
      when 1 then _.rest array
      else _.rest array, index
  
  'compact': (array) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['compact']
      else _.compact array
  
  'flatten': (array, shallow) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['flatten']
      when 1 then _.flatten array
      else _.flatten array, shallow
  
  'without': (array) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['without']
      else _.without.apply @, _.union array, _.rest args, 1
  
  'union': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['union']
      else _.union.apply @, args
  
  'intersection': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['intersection']
      else _.intersection.apply @, args
  
  'difference': (array) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['difference']
      when 1 then -> _.difference.apply @, _.union array, _.toArray arguments
      else _.intersection.apply @, _.union array, _.rest args, 1
  
  'uniq': (array, isSorted, iterator) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['uniq']
      when 1 then _.uniq array
      when 2 then _.uniq array, isSorted
      else _.uniq array, isSorted, iterator
  
  'zip': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['zip']
      else _.zip.apply @, args
  
  'object': (list, values) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['object']
      when 1 then _.object list
      else _.object list, values
  
  'indexOf': (array, value, isSorted) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['indexOf']
      when 1 then (val, isSort) -> _.indexOf array, val, isSort
      when 2 then _.indexOf array, value
      else _.indexOf array, value, isSorted
  
  'lastIndexOf': (array, value, fromIndex) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['lastIndexOf']
      when 1 then (val, from) -> _.lastIndexOf array, val, from
      when 2 then _.lastIndexOf array, value
      else _.lastIndexOf array, value, fromIndex
  
  'sortedIndex': (list, value, iterator) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['sortedIndex']
      when 1 then (val, it) -> _.sortedIndex list, val, it
      when 2 then _.sortedIndex list, value
      else _.sortedIndex list, value, iterator
    
  'range': (start, end, step) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['range']
      when 1 then _.range 0, start, 1
      when 2 then _.range start, end, 1
      else _.range start, end, step
  
  #
  # Function Functions
  #
  
  'bind': (func, object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['bind']
      when 1 then (obj) -> _.bind func, obj
      else _.bind.apply @, _.union [func, obj], _.rest args, 2
  
  'bindAll': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['bindAll']
      else _.bindAll.apply @, _.union object, _.rest args, 1
  
  'memoize': (func, hashFunc) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['memoize']
      else _.memoize.apply @, _.union func, _.rest args, 1
  
  'delay': (func, wait) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['delay']
      when 1 then (wt) -> _.delay.apply @, _.union [func, wt], _.rest _.toArray(arguments), 1
      else _.delay.apply @, _.union [func, wait], _.rest _.toArray(arguments), 2
  
  'defer': (func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['defer']
      else _.defer.apply @, _.union [func], _.rest _.toArray(arguments), 1
  
  'throttle': (func, wait) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['throttle']
      when 1 then (wt) -> _.throttle func, wt
      else _.throttle func, wait
  
  'debounce': (func, wait, immediate) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['debounce']
      when 1 then (wt, immed) -> _.debounce func, wt, immed
      else _.debounce func, wait, immediate
  
  'once': (func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['once']
      else _.once func
  
  'after': (count, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['after']
      when 1 then (fn) -> _.after count, fn
      else _.after count, func
  
  'wrap': (func, wrapper) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['wrap']
      when 1 then (wrap) -> _.wrap func, wrap
      else _.wrap func, wrapper
  
  'compose': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['compose']
      else _.compose.apply @, args
    
  #
  # Object Functions
  #
  
  'keys': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['keys']
      else _.keys object
  
  'values': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['values']
      else _.values object
  
  'pairs': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['pairs']
      else _.pairs object
  
  'invert': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['invert']
      else _.invert object
  
  'functions': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['functions']
      else _.functions object
  
  'extend': (destination) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['extend']
      when 1 then -> _.extend.apply @, _.union [destination], _.toArray arguments
      else _.extend.apply @, _.union [destination], _.rest args, 1
  
  'pick': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['pick']
      when 1 then -> _.pick.apply @, _.union [object], _.toArray arguments
      else _.pick.apply @, _.union [object], _.rest args, 1
  
  'omit': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['omit']
      when 1 then -> _.omit.apply @, _.union [object], _.toArray arguments
      else _.omit.apply @, _.union [object], _.rest args, 1
  
  'defaults': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['defaults']
      when 1 then -> _.defaults.apply @, _.union [object], _.toArray arguments
      else _.defaults.apply @, _.union [object], _.rest args, 1
  
  'clone': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['clone']
      else _.clone object
  
  'tap': (object, interceptor) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['tap']
      when 1 then (inter) -> _.tap object, inter
      else _.tap object, interceptor
  
  'has': (object, key) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['has']
      when 1 then (k) -> _.has object, k
      else _.has object, key
  
  'isEqual': (object, other) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isEqual']
      when 1 then (oth) -> _.isEqual object, oth
      else _.isEqual object, other
  
  'isEmpty': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isEmpty']
      else _.isEmpty object
  
  'isElement': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isElement']
      else _.isElement object
  
  'isArray': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isArray']
      else _.isArray object
  
  'isObject': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isObject']
      else _.isObject object
  
  'isArguments': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isArguments']
      else _.isArguments object
  
  'isFunction': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isFunction']
      else _.isFunction object
  
  'isString': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isString']
      else _.isString object
  
  'isNumber': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isNumber']
      else _.isNumber object
  
  'isFinite': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isFinite']
      else _.isFinite object
  
  'isBoolean': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isBoolean']
      else _.isBoolean object
  
  'isDate': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isDate']
      else _.isDate object
  
  'isRegExp': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isRegExp']
      else _.isRegExp object
  
  'isNaN': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isNaN']
      else _.isNaN object
  
  'isNull': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isNull']
      else _.isNull object
  
  'isUndefined': (object) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isUndefined']
      else _.isUndefined object
  
  #
  # Utility Functions
  #
  
  
  
  #
  # Helper Functions
  #
  
  'self': (elem) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['self']
      else elem
  
  'incr': (elem, step) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['incr']
      when 1 then elem + 1
      else elem + step
  
  'sum': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['sum']
      else _.reduce args, ((memo, el) -> memo + el), 0
  
  'sum-array': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['sum-array']
      else methods['sum'].apply @, list
  
  'mult': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['mult']
      else _.reduce args, ((memo, el) -> memo * el), 0
  
  'mult-array': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['mult-array']
      else methods['mult'].apply @, list
  
  'generic': (func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['generic']
      else func.apply @, _.rest args, 1
  
  #
  # Control flow functions
  #
  
  'if-then': (condition, positive) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['if-then']
      when 1 then (pos) -> if condition then pos
      else (positive if condition)
  
  'if-else': (condition, positive, negative) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['if-else']
      when 1 then (pos, neg) -> (if condition then pos else neg)
      when 2 then (neg) -> (if condition then positive else neg)
      else (if condition then positive else negative)
  
  'while': (condition, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['while']
      when 1 then (fn) -> while condition then fn()
      else (while condition then func())
  
  'unless-then': (condition, positive) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unless-then']
      when 1 then (pos) -> unless condition then pos
      else (positive unless condition)
  
  'unless-else': (condition, positive, negative) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unless-else']
      when 1 then (pos, neg) -> (unless condition then pos else neg)
      when 2 then (neg) -> (unless condition then positive else neg)
      else (unless condition then positive else negative)
  
  'until': (condition, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['while']
      when 1 then (fn) -> while not condition then fn()
      else (while not condition then func())
  
  # (F 'switch', input, [test, function], [test, function])
  'switch': (input) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['switch']
      else (for arg in _.rest args, 1
        _arg() for _arg in _.rest arg, 1 if arg[0] is input)
  
  
funkyjs = ->
  __args = _.toArray arguments
  if __args[0] and methods.hasOwnProperty __args[0]
    methods[__args[0]].apply @, _.rest __args, 1

# Modeled after Underscore.js export
root = @
if typeof exports isnt 'undefined'
  if typeof module isnt 'undefined' and module.exports
    exports = module.exports = funkyjs
  exports.funkyjs = funkyjs
else
  root.funkyjs = funkyjs