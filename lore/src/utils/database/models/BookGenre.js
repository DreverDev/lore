const {Schema, model} = require("mongoose");

const BookGenreSchema = Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = model("BookGenre", BookGenreSchema, "bookgenres");