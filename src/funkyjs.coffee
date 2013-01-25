_ = require 'underscore'
_.str = require 'underscore.string'

methods =
  
  #
  # Math Functions
  #
  
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
      else _.reduce args, ((memo, el) -> memo * el), 1
  
  'mult-array': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['mult-array']
      else methods['mult'].apply @, list
  
  #
  # Object functions
  #
  
  'unpair': (list) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unpair']
      else (
        object = {}
        object[item[0]] = item[1] for item in list
        object
      )
  
  'object-surgery': (object, key, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['object-surgery']
      when 1 then (k, fn) -> methods['object-surgery'] object, k, fn
      when 2 then (fn) -> methods['object-surgery'] object, key, fn
      else
        object[key] = func object[key]
        object
  
  #
  # Array functions
  #
  
  'array-surgery': (list, index, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['array-surgery']
      when 1 then (idx, fn) -> methods['array-surgery'] list, idx, fn
      when 2 then (fn) -> methods['array-surgery'] list, index, fn
      else
        list[index] = func list[index]
        list
    
  #
  # Conversion functions
  #
  
  'strToBool': (string) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['strToBool']
      else (if string is 'false' then false else (
        if string is 'true' then true else string
      ))
    
  
  #
  # Control flow functions
  #
  
  'is': (value1, value2) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['is']
      when 1 then (val2) -> methods['is'] value1, val2
      else value1 is value2
  
  'isnt': (value1, value2) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['isnt']
      when 1 then (val2) -> methods['isnt'] value1, val2
      else value1 isnt value2
  
  'and': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['and']
      else _.size(args) isnt _.size _.reject args, (arg) -> not arg
  
  'or': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['or']
      else _.size _.reject(args, (arg) -> not arg) isnt 0
  
  'xor': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['xor']
      else _.size _.reject(args, (arg) -> not arg) not in [0, _.size args]
  
  'if-then': (condition, positive) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['if-then']
      when 1 then (pos) -> methods['if-then'] condition, pos
      else (positive if condition)
  
  'if-else': (condition, positive, negative) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['if-else']
      when 1 then (pos, neg) -> methods['if-else'] condition, pos, neg
      when 2 then (neg) -> methods['if-else'] condition, positive, neg
      else (if condition then positive else negative)
  
  'while': (condition, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['while']
      when 1 then (fn) -> methods['while'] condition, fn
      else (while condition then func())
  
  'unless-then': (condition, positive) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unless-then']
      when 1 then (pos) -> methods['unless-then'] condition, pos
      else (positive unless condition)
  
  'unless-else': (condition, positive, negative) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unless-else']
      when 1 then (pos, neg) -> methods['unless-else'] condition, pos, neg
      when 2 then (neg) -> methods['unless-else'] condition, positive, neg
      else (unless condition then positive else negative)
  
  'until': (condition, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['until']
      when 1 then (fn) -> methods['until'] condition, fn
      else (while not condition then func())
  
  # (F 'switch', input, [test, function], [test, function])
  'switch': (input) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['switch']
      else
        for arg in _.rest args, 1
          if arg[0] is input
            return arg[1]()
  
  'let': (list, func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['let']
      when 1 then (fn) -> methods['let'] list, fn
      else func.apply @, list
  
  #
  # Utility functions
  #
  
  'generic': (func) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['generic']
      else func.apply @, _.rest args, 1
  


setupMethods = (LIB, one, two, three) ->
  # 3 required args
  for methodName in three
    ((name) ->
      methods[name] = ->
        args = _.toArray arguments
        switch args.length
          when 0 then methods[name]
          when 1 then -> LIB[name].apply(
            @, _.union [args[0]], _.toArray arguments
          )
          when 2 then -> LIB[name].apply(
            @, _.union [args[0], args[1]], _.toArray arguments
          )
          else LIB[name].apply @, args
    )(methodName)
  
  # 2 required args
  for methodName in two
    ((name) ->
      methods[name] = ->
        args = _.toArray arguments
        switch args.length
          when 0 then methods[name]
          when 1 then -> LIB[name].apply @, _.union [args[0]], _.toArray arguments
          else LIB[name].apply @, args
    )(methodName)
  
  # 1 required arg
  for methodName in one
    ((name) ->
      methods[name] = ->
        args = _.toArray arguments
        switch args.length
          when 0 then methods[name]
          else LIB[name].apply @, args
    )(methodName)


setupMethods _,
  [
    'uniq', 'first', 'initial', 'last', 'rest', 'flatten', 'object',
    'shuffle', 'toArray', 'size', 'compact', 'union', 'intersection', 'zip',
    'range', 'bindAll', 'memoize', 'defer', 'once', 'compose', 'keys', 'values',
    'invert', 'pairs', 'functions', 'clone', 'isEmpty', 'isElement', 'isArray',
    'isObject', 'isArguments', 'isFunction', 'isString', 'isNumber', 'isFinite',
    'isBoolean', 'isDate', 'isRegExp', 'isNaN', 'isNull', 'isUndefined',
    'identity', 'random', 'escape', 'unescape'
  ], [
    'each', 'map', 'find', 'filter', 'reject', 'every', 'some',
    'max', 'min', 'sortBy', 'where', 'contains', 'pluck', 'groupBy', 'countBy',
    'without', 'difference', 'invoke', 'indexOf', 'lastIndexOf', 'sortedIndex',
    'bind', 'delay', 'throttle', 'debounce', 'after', 'wrap', 'extend', 'pick',
    'omit', 'defaults', 'tap', 'has', 'isEqual', 'times', 'result', 'template'
  ], [
    'reduce', 'reduceRight'
  ]


setupMethods _.str, 
  [
    'numberFormat', 'capitalize', 'clean', 'chars', 'swapCase', 'isBlank',
    'lines', 'reverse', 'succ', 'titleize', 'camelize', 'classify',
    'underscored', 'dasherize', 'humanize', 'trim', 'ltrim', 'rtrim', 'words',
    'toNumber', 'stripTags', 'toSentence', 'toSentenceSerial', 'quote',
    'slugify'
  ], [
    'levenshtein', 'chop', 'include', 'count', 'insert', 'join', 'startsWith',
    'endsWith', 'truncate', 'prune', 'sprintf', 'pad', 'lpad', 'rpad', 'lrpad',
    'strRight', 'strRightBack', 'strLeft', 'strLeftBack', 'repeat', 'surround'
  ], [
    'splice'
  ]


funkyjs = ->
  args = _.toArray arguments
  if typeof args[0] is 'string' and methods.hasOwnProperty args[0]
    methods[args[0]].apply @, _.rest args, 1
  else if typeof args[0] is 'function'
    if args.length > 1
      -> args[0].apply @, _.rest args, 1
    else
      -> args[0].apply @, _.toArray arguments

# Modeled after Underscore.js export
root = @
if typeof exports isnt 'undefined'
  if typeof module isnt 'undefined' and module.exports
    exports = module.exports = funkyjs
  exports.funkyjs = funkyjs
else
  root.funkyjs = funkyjs
