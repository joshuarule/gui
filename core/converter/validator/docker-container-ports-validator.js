/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator,
    IntegerRangeValidator = require("core/converter/validator/integer-range-validator").IntegerRangeValidator;

exports.DockerContainerPortsValidator = Validator.specialize({

    _integerRangeValidator: {
        get: function () {
            if (!this.__integerRangeValidator) {
                this.__integerRangeValidator = new IntegerRangeValidator();
                this.__integerRangeValidator.floor = 0;
                this.__integerRangeValidator.ceiling = 65535;
                this.__integerRangeValidator.errorMessage = "Port must be an integer between 0 and 65535";
            }

            return this.__integerRangeValidator;
        }
    },

    _regexPortString: {
        value: /^\d+:\d+\/(:?tcp|udp)$/i
    },

    isValidPortsString: {
        value: function (string) {
            return typeof string === "string" && this._regexPortString.test(string);
        }
    },

    validate: {
        value: function (value) {
            // need an appropriate default value
            var errorMessage = this.errorMessage || ("Value did not pass validation");
            if (!this.isValidPortsString(value)) {
                throw new Error(errorMessage);
            }

            var data = value.split(/:|\//),
                port, containerPort, hostPort;

            for (var i = 0, length = data.length; i + 3 <= length; i = i + 3) {
                this._integerRangeValidator.validate(+data[i]);
                this._integerRangeValidator.validate(+data[i + 1]);
            }

            return true;
        }
    }

});
