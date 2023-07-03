const {Schema, model} = require("mongoose");

const AuthorSchema = Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = model("Author", AuthorSchema, "authors");