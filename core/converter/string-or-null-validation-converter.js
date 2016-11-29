var Converter = require("montage/core/converter/converter").Converter;

exports.StringOrNullValidationConverter = Converter.specialize({
    convert: {
        value: function(value) {
            if (value === "") {
                return null;
            } else {
                return value;
            }
        }
    },
    revert: {
        value: function(value) {
            try {
                if (value === "") {
                    return null;
                } else if (this.validator && typeof this.validator.validate === "function") {
                    this.validator.validate(value);
                }
                return value;
            }
            catch (e) {
                throw new Error(e.message);
            }
        }
    }
});
