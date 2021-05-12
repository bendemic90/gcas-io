const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    added: {
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
    emergencyContact: [{
        name: String,
        number: String,
        relation: String,
        required: true
    }],
    image: String, //point to FS
    contact: [{
        home: Number,
        mobile: Number
    }],
    comment: [{
        date: Date,
        body: String,
        default: Date.now
    }],
})

const Client = mongoose.model("Client", clientSchema);

module.exports = { Client };
