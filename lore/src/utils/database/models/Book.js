const { Schema, model, models } = require("mongoose");

const BookSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    buyDate: {
        type: Date,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    price: {
        type: Number,
    },
    sagaIndex: {
        type: Number,
    },
    saga: {
        type: Schema.ObjectId,
        ref: "Saga",
    },
    author: {
        type: Schema.ObjectId,
        ref: "Author",
    },
    genre: {
        type: Schema.ObjectId,
        ref: "BookGenre",
    },
    format: {
        type: Schema.ObjectId,
        ref: "Format",
    },
});

module.exports = models.Book || model("Book", BookSchema, "books");