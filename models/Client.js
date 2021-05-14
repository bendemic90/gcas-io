const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
    added: {
        type: Date,
        default: new Date()
    },
    firstName: {
        type: String,
        required: "First name required"
    },
    lastName: {
        type: String,
        required: "Last name required"
    },
    emergencyContact: [{
        name: String,
        number: String,
        relation: String
    }],
    image: String, //point to FS
    contact: [{
        home: Number,
        mobile: Number
    }],
    comment: [{
        date: Date,
        body: String,
        //default: Date.now
    }],
})

const Client = mongoose.model("Client", clientSchema);

module.exports = { Client };
