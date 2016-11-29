/**
 * @requires montage/core/converter/converter
 */
var Validator = require("montage/core/converter/converter").Validator;

exports.DockerContainerEnvVariableValidator = Validator.specialize({

    _regexEnvironmentVariable: {
        value: /^[a-zA-Z][a-zA-Z0-9_-]*$/
    },

    _isValidEnvironmentVariableString: {
        value: function (string) {
            return typeof string === "string" && this._regexEnvironmentVariable.test(string);
        }
    },

    validate: {
        value: function (value) {
            // need an appropriate default value
            var errorMessage = this.errorMessage || ("Value did not pass validation");
            if (!this._isValidEnvironmentVariableString(value)) {
                throw new Error(errorMessage);
            }

            return true;
        }
    }

});
