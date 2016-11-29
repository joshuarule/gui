/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator;
var Montage = require("montage/core/core").Montage;

/**
  * Verifies that a string is a valid ipv4 address
  * @class Ipv4Validator
  * @extends Validator
  */

var Ipv4Validator = exports.Ipv4Validator = Validator.specialize({

    validate: {
        value: function (address) {
            // Fixme: needs a better default error message
            var errorMessage = this.errorMessage || ("Invalid IPv4 address");
            if (/^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(address)) {
                return true;
            } else {
                throw new Error(errorMessage);
            }
        }
    }
});
