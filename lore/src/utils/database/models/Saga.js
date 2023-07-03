const {Schema, model} = require("mongoose");

const SagaSchema = Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = model("Saga", SagaSchema, "sagas");