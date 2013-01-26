expect = require('chai').expect
F = require '../lib/funkyjs'
_ = require 'underscore'

describe 'F', ->
  it 'should be a function', ->
    expect(F).to.be.a 'Function'
  
  it 'should return a function that returns any object or array passed in', ->
    result = (F [])
    expect(result).to.be.a 'Function'
    expect(result()).to.be.a 'Array'
    
    result = (F {})
    expect(result).to.be.a 'Function'
    expect(result()).to.be.a 'Object'
  
describe 'F(function, *arg1)', ->
  it 'should return a function that gets applied with original arguments', ->
    func = (F ((a) -> a + 1), 8)
    (expect func).to.be.a 'Function'
    result = func()
    (expect result).to.equal 9
    result2 = func 2
    (expect result2).to.equal 9
  
describe 'F(function)', ->
  it 'should return a function that gets applied with current arguments', ->
    func = (F ((a) -> a + 1))
    (expect func).to.be.a 'Function'
    result = func 2
    (expect result).to.equal 3

describe 'Method templates for 3 required arguments with ' +
  '1, 2, and 3 arguments', ->
  
  describe 'reduce(list, iterator, memo, [context])', ->
    it 'should return the sum of all elements', ->
      result = (F 'reduce', [0, 1, 2, 3], ((m, a) -> a + m), 0)
      (expect result).to.equal 6
  
  describe 'reduce(list, iterator)', ->
    it 'should return a function requiring memo to complete', ->
      reduce = (F 'reduce', [0, 1, 2, 3], ((m, a) -> a + m))
      (expect reduce).to.be.a 'Function'
      result = reduce 0
      (expect result).to.equal 6
  
  describe 'reduce(list)', ->
    it 'should return a function requiring iterator and memo to complete', ->
      reduce = (F 'reduce', [0, 1, 2, 3])
      (expect reduce).to.be.a 'Function'
      result = reduce ((m, a) -> a + m), 0
      (expect result).to.equal 6

describe 'Method templates for 2 required arguments with 1 and 2 arguments', ->
  describe 'map(list, iterator)', ->
    it 'should return a list with new elements', ->
      result = (F 'map', [0, 1, 2, 3], ((a) -> a + 1))
      (expect result).to.be.a('Array')
      (expect el).to.equal i+1 for el, i in result
  
  describe 'map(list)', ->
    it 'should return a function requiring iterator to complete', ->
      map = (F 'map', [0, 1, 2, 3])
      (expect map).to.be.a 'Function'
      result = map ((a) -> a + 1)
      (expect el).to.equal i+1 for el, i in result

describe 'Method templates for 1 required argument with 1 argument', ->
  describe 'shuffle(list)', ->
    it 'should return a list with shuffled elements', ->
      result = (F 'size', [0, 1, 2, 3])
      (expect result).to.equal 4

describe 'Math functions', ->
  
  describe 'incr(elem, step)', ->
    it 'should return the element incremented by step', ->
      expect(F 'incr', 1, 3).to.equal 4
  
  describe 'incr(elem)', ->
    it 'should return the element incremented by 1', ->
      expect(F 'incr', 8).to.equal 9
  
  describe 'incr()', ->
    it 'should return itself as a callable', ->
      incr = F 'incr'
      expect(incr 1, 3).to.equal 4
      expect(incr 8).to.equal 9
  
  describe 'sum(*args)', ->
    it 'should return the sum of the arguments', ->
      expect(F 'sum', 1, 3, 8, 34).to.equal 46
  
  describe 'sum()', ->
    it 'should return itself as a callable', ->
      sum = F 'sum'
      expect(sum 1, 3, 8, 34).to.equal 46
  
  describe 'sum-array(list)', ->
    it 'should return the sum of the list elements', ->
      expect(F 'sum-array', [1, 3, 8, 34]).to.equal 46
  
  describe 'sum-array()', ->
    it 'should return itself as a callable', ->
      sumArray = F 'sum-array'
      expect(sumArray [1, 3, 8, 34]).to.equal 46
  
  describe 'mult(*args)', ->
    it 'should return the product of the arguments', ->
      expect(F 'mult', 1, 3, 8, 34).to.equal 3*8*34
  
  describe 'mult()', ->
    it 'should return itself as a callable', ->
      mult = F 'mult'
      expect(mult 1, 3, 8, 34).to.equal 3*8*34
  
  describe 'mult-array(list)', ->
    it 'should return the product of the list elements', ->
      expect(F 'mult-array', [1, 3, 8, 34]).to.equal 3*8*34
  
  describe 'mult-array()', ->
    it 'should return itself as a callable', ->
      multArray = F 'mult-array'
      expect(multArray [1, 3, 8, 34]).to.equal 3*8*34

describe 'Object functions', ->
  
  describe 'unpair(array)', ->
    it 'should return an object with key value pairs based on arrays of two ' +
    'values from the input array', ->
      object = (F 'unpair', [['a', 1], ['b', 2]])
      expect(object.a).to.equal 1
      expect(object.b).to.equal 2
  
  describe 'object-surgery(object, key, func)', ->
    it 'should return an object with value at key run through func', ->
      object = {a: 1, b: 2}
      obj = (F 'object-surgery', object, 'a', F('incr'))
      expect(object.a).to.equal 2
      expect(obj.a).to.equal 2
  
  describe 'object-surgery(object, key)', ->
    it 'should return a function taking func as argument to complete', ->
      object = {a: 1, b: 2}
      objSurg = (F 'object-surgery', object, 'a')
      obj = objSurg F('incr')
      expect(object.a).to.equal 2
      expect(obj.a).to.equal 2
  
  describe 'object-surgery(object)', ->
    it 'should return a function taking key and func as argument to complete', ->
      object = {a: 1, b: 2}
      objSurg = (F 'object-surgery', object)
      obj = objSurg 'a', F('incr')
      expect(object.a).to.equal 2
      expect(obj.a).to.equal 2
  
  describe 'object-surgery()', ->
    it 'should return itself as callable', ->
      object = {a: 1, b: 2}
      objSurg = (F 'object-surgery')
      obj = objSurg object, 'a', F('incr')
      expect(object.a).to.equal 2
      expect(obj.a).to.equal 2

describe 'Control flow functions', ->
  
  describe 'if(condition, positive, negative)', ->
    it 'should return the result of calling positive or negative based on condition', ->
      result = (F 'if', true, (-> 'a'), (-> 'b'))
      expect(result).to.equal 'a'
      
      result = (F 'if', false, (-> 'a'), (-> 'b'))
      expect(result).to.equal 'b'


