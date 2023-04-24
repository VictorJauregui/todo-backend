const {Schema, model} = require("mongoose")

const UserRegisterSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    repPass: {
        type: String,
        required: true
    }
}

module.exports = model("UserRegister", UserRegisterSchema)