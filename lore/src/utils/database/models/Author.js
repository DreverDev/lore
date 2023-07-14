const {Schema, model, models} = require("mongoose");

const AuthorSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    color: String,
});

module.exports = models.Author || model("Author", AuthorSchema, "authors");