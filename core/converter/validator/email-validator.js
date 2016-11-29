/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator;

exports.EmailValidator = Validator.specialize({
    EMAIL_REGEX: {
        value: /^\b[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]*[a-zA-Z0-9]\.[a-zA-Z]{2,4}\b$/
    },

    _integerValidator: {
        value: null
    },

    validate: {
        value: function (value) {
            var errorMessage = this.errorMessage || "Invalid email address";
            if (this.EMAIL_REGEX.test(value)) {
                return true;
            } else {
                throw new Error(errorMessage);
            }
        }
    }
});
