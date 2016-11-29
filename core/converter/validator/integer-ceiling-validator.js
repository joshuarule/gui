/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator,
    IntegerValidator = require("core/converter/validator/integer-validator").IntegerValidator;

exports.IntegerCeilingValidator = Validator.specialize({
    ceiling: {
        value: null
    },

    _integerValidator: {
        value: null
    },

    constructor: {
        value: function() {
            this._integerValidator = new IntegerValidator();
        }
    },

    validate: {
        value: function (value) {
            var errorMessage = this.errorMessage || ("Value must be an integer lower than " + this.ceiling);
            try {
                this._integerValidator.validate(value);
            } catch (e) {
                throw new Error(errorMessage);
            }
            if (+value <= this.ceiling) {
                return true;
            } else {
                throw new Error(errorMessage);
            }

        }
    }

});
