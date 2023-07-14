const {Schema, model, models} = require("mongoose");

const SagaSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    color: String,
});

module.exports = models.Saga || model("Saga", SagaSchema, "sagas");