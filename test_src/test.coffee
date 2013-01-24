expect = require('chai').expect
F = require('../lib/funkyjs')

describe 'F', ->
  it 'should be a function', ->
    expect(F).to.be.a 'Function'
  
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

describe 'Custom functions', ->
  
  describe 'incr()', ->
    it 'should ', ->
      
