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
        for item in list
          if object.hasOwnProperty(item[0])
            if _.isArray object[item[0]]
              object[item[0]].push item[1]
            else
              object[item[0]] = [object[item[0]], item[1]]
          else
            object[item[0]] = item[1]
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
  
  'not': (value) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['not']
      else not value
  
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
  
  # if(positive)
  # if(positive, negative)
  # if(condition, positive, negative)
  'if': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['if']
      when 1 then (cond) -> methods['if'] cond, args[0]
      when 2 then (cond) -> methods['if'] cond, args[0], args[1]
      else (if args[0] then args[1]?() else args[2]?())
  
  # while(func)
  # while(condition, func)
  'while': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['while']
      when 1 then (fn) -> methods['while'] args[0], fn
      else (while args[0]?() then args[1]?())
  
  # unless(positive)
  # unless(positive, negative)
  # unless(condition, positive, negative)
  'unless': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['unless']
      when 1 then (cond) -> methods['unless'] cond, args[0]
      when 2 then (cond) -> methods['unless'] cond, args[0], args[1]
      else (unless args[0] then args[1]?() else args[2]?())
  
  # until(func)
  # until(condition, func)
  'until': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['until']
      when 1 then (fn) -> methods['until'] args[0], fn
      else (while not args[0]?() then args[1]?())
  
  # (F 'switch', input, [test, function], [test, function])
  'switch': (input) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['switch']
      else
        for arg in _.rest args, 1
          if arg[0] is input
            return arg[1]()
  
  #
  # Utility functions
  #
  
  'call': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['call']
      else (
        func = _.last args
        func.apply @, _.initial args if typeof func is 'function'
      )
  
  # Only works with single-argument methods that return updated value
  'compose': ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['compose']
      else (
        val = _.last args
        funcs = _.initial(_.rest args, 1)
        funcs.reverse()
        for func in funcs
          val = func val
        val
      )
  


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
  else
    -> args[0]

# Modeled after Underscore.js export
root = @
if typeof exports isnt 'undefined'
  if typeof module isnt 'undefined' and module.exports
    exports = module.exports = funkyjs
  exports.funkyjs = funkyjs
else
  root.funkyjs = funkyjs
