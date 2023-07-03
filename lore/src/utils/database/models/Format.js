const {Schema, model} = require("mongoose");

const FormatSchema = Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = model("FormatSchema", FormatSchema, "formatschemas");