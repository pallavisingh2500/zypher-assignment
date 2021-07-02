const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
    },
    company: {
        type: String,
        required: true
    },
    orderId: {
        type: Number
    },
    invoicepaid: {
        type: Number
    },
    invoicePending: {
        type: Number
    }

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;