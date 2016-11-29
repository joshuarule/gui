/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator;

exports.IntegerValidator = Validator.specialize({

    validate: {
        value: function (value) {
            var errorMessage = this.errorMessage || ("Value must be an integer");
            if (+value === parseInt(value)) {
                return true;
            } else {
                throw new Error(errorMessage);
            }
        }
    }

});
