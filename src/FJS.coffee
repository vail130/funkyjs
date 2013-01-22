_ = require 'underscore'

methods =
  
  #
  #  Collection Functions (Arrays or Objects)
  #
  
  'each': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['each']
      when 1 then (op, ctx) -> _.each list, op, ctx
      when 2 then _.each list, iterator
      else _.each list, iterator, context
  
  'map': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['map']
      when 1 then (op, ctx) -> _.map list, op, ctx
      when 2 then _.map list, iterator
      else _.map list, iterator, context
  
  'reduce': (list, iterator, memo, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['reduce']
      when 1 then (it, m, ctx) -> _.reduce list, it, m, ctx
      when 2 then (m, ctx) -> _.reduce list, iterator, m, ctx
      when 3 then _.reduce list, iterator, memo
      else _.reduce list, iterator, memo, context
  
  'reduceRight': (list, iterator, memo, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['reduceRight']
      when 1 then (it, m, ctx) -> _.reduceRightight list, it, m, ctx
      when 2 then (m, ctx) -> _.reduceRightight list, iterator, m, ctx
      when 3 then _.reduceRightight list, iterator, memo
      else _.reduceRightight list, iterator, memo, context
  
  'find': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['find']
      when 1 then (op, ctx) -> _.find list, op, ctx
      when 2 then _.find list, iterator
      else _.find list, iterator, context
  
  'filter': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['filter']
      when 1 then (op, ctx) -> _.filter list, op, ctx
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
      when 1 then (op, ctx) -> _.reject list, op, ctx
      when 2 then _.reject list, iterator
      else _.reject list, iterator, context
  
  'every': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['every']
      when 1 then (op, ctx) -> _.every list, op, ctx
      when 2 then _.every list, iterator
      else _.every list, iterator, context
  
  'some': (list, iterator, context) ->
    args = _.toArray arguments
    switch args.length
      when 0 then methods['some']
      when 1 then (op, ctx) -> _.some list, op, ctx
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
  
FJS = () ->
  __args = _.toArray arguments
  if __args[0] and methods.hasOwnProperty __args[0]
    methods[__args[0]].apply @, _.rest __args, 1

# Modelled after Underscore.js export
root = @
if typeof exports isnt 'undefined'
  if typeof module isnt 'undefined' and module.exports
    exports = module.exports = FJS
  exports.FJS = FJS
else
  root.FJS = FJS