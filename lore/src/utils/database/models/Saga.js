const {Schema, model, models} = require("mongoose");

const SagaSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = models.Saga || model("Saga", SagaSchema, "sagas");