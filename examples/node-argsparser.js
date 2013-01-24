/**
 * Taken from https://github.com/kof/node-argsparser
 *
 */

/**
 * Parser arguments array
 * @param {Array} args optional arguments arrray.
 * @return {Object} opts key value hash.
 * @export
 */
exports.parse = function(args) {
    // args is optional, default is process.argv
    args = args || process.argv;

    var opts = {}, curSwitch;

    args.forEach(function(arg) {
        // its a switch
        if (/^(-|--)/.test(arg) || !curSwitch) {
            opts[arg] = true;
            curSwitch = arg;
        // this arg is a data
        } else {
            if (arg === 'false') {
                arg = false;
            } else if (arg === 'true') {
                arg = true;
            } else if (!isNaN(arg)) {
                arg = Number(arg);
            }

            // it was a boolean switch per default, 
            // now it has got a val
            if (typeof opts[curSwitch] === 'boolean') {
                opts[curSwitch] = arg;
            } else if (Array.isArray(opts[curSwitch])) {
                opts[curSwitch].push(arg);
            } else {
                opts[curSwitch] = [opts[curSwitch], arg];
            }
        }
    });

    return opts;
};

// Using funky.js
exports.parse = (
	F(function(args) {
		return (
			F('un-pair',
				F('filter',
					F('map', F('if-else', args, args, process.argv), function(arg) {
						return F('trim', arg.match(/^(-+\w+)\s+\w+/)[0]).split(/\s+/);
					}),
					function(list) {
						return F('and',
							F('every', list, F('identity')),
							F('is', F('size', list), 2)
						);
					}
				)
			)
		)
	})
)