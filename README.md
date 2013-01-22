# funkyjs - Functional JavaScript [![Build Status](https://secure.travis-ci.org/vail130/funkyjs.png)](http://travis-ci.org/vail130/funkyjs)

## Documentation
For now, look through the code.

## Examples

```js
var F = require('funkyjs');
var _ = require('underscore');

// funkyjs
var newList = F('map', F('range', 4), F('incr'));

// JavaScript + Underscore
var newList = _.map(_.range(4), function(el) {
  return el += 1;
});

// funkyjs
var array = (
  F('sortBy',
    F('zip',
      F('shuffle', F('range', 62)),
      F('shuffle', F('range', 62))), F('sum-array')));

// JavaScript + Underscore
var array = (
  _.sortBy(
    _.zip(_.shuffle(_.range(62)), _.shuffle(_.range(62))),
    function() {
      return _.reduce(
        _.toArray(arguments),
        function(memo, el) {
          return memo + el;
        },
        0
      );
    }
  )
);
```

Even better...
```coffee
# funkyjs + CoffeeScript
array = (
  (F 'sortBy',
    (F 'zip',
      (F 'shuffle', (F 'range', 62)),
      (F 'shuffle', (F 'range', 62))), (F 'sum-array')))
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Vail Gold  
Licensed under the MIT license.
