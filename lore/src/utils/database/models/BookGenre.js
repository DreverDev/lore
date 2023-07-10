const {Schema, model, models} = require("mongoose");

const BookGenreSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = models.BookGenre || model("BookGenre", BookGenreSchema, "bookgenres");