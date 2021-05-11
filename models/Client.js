const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

})

const Client = mongoose.model("Client", clientSchema);

module.exports = { Client };
