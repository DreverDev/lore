const {Schema, model, models} = require("mongoose");

const FormatSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = models.Format || model("Format", FormatSchema, "formats");