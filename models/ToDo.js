const {Schema, model} = require('mongoose');

const ToDoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    worker: {
        type: String,
        required: true,
        enum: [
            "Miquel", "Victor", "Borja", "Jesus", "Alberto"
        ]
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
    
})

module.exports = model("Todo", ToDoSchema)