expect = require('chai').expect
F = require('../lib/funkyjs')

describe 'F', ->
  it 'should be a function', ->
    expect(F).to.be.a 'Function'

describe 'F("map", iterable, operator)', ->
  it 'should return a new list with operator applied to each element of iterable', ->
    it = [0, 1, 2, 3]
    op = (el) -> ++el
    map = F 'map', it, op
    expect(map).to.be.a('Array').and.have.length 4
    expect(map[0]).to.equal 1

describe 'F("map", iterable)', ->
  it 'should return a new function taking an operator argument', ->
    map = F 'map', [0, 1, 2, 3]
    op = (el) -> ++el
    expect(map).to.be.a 'Function'
    expect(map op).to.be.a('Array').and.have.length 4
    expect(map(op)[0]).to.equal 1

describe 'F("range", start, end, step)', ->
  it 'should return a list created from arguments', ->
    range = F 'range', 0, 5, 2
    expect(range).to.be.a('Array').and.have.length 3
    expect(range[0]).to.equal 0
    expect(range[1]).to.equal 2
    expect(range[2]).to.equal 4

describe 'F("range", start, end)', ->
  it 'should return a list created from arguments', ->
    range = F 'range', 0, 5
    expect(range).to.be.a('Array').and.have.length 5
    expect(range[2]).to.equal 2

describe 'F("range", end)', ->
  it 'should return a list created from arguments', ->
    range = F 'range', 3
    expect(range).to.be.a('Array').and.have.length 3
    expect(range[1]).to.equal 1

describe 'F("incr", element, step)', ->
  it 'should return a new element that has been incremented by step', ->
    expect(F 'incr', 5, -3).to.equal 2
    expect(F 'incr', true, 1).to.equal 2

describe 'F("incr", element)', ->
  it 'should return a new element that has been incremented by 1', ->
    expect(F 'incr', 5).to.equal 6
    expect(F 'incr', true).to.equal 2

describe 'F("incr")', ->
  it 'should return a reference to the "incr" function', ->
    incr = F 'incr'
    expect(incr 5).to.equal 6
    expect(incr true).to.equal 2

describe 'Composite - Map, Range, Increment', ->
  it 'should return ', ->
    array = (
      (F 'sortBy',
        (F 'zip',
          (F 'shuffle', (F 'range', 62)),
          (F 'shuffle', (F 'range', 62))), (F 'sum-array')))
    
    expect(array).to.be.a('Array').and.to.have.length 62
    expect(array[0]).to.be.a('Array').and.to.have.length 2
    expect(array[0][0] + array[0][1]).to.be.below array[1][0] + array[1][1]

