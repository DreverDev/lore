const {Schema, model, models} = require("mongoose");

const AuthorSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = models.Author || model("Author", AuthorSchema, "authors");