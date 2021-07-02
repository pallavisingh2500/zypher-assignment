const mongoose = require('mongoose');
const Client = require('./models/client');
const clients = [
    {
        name: "Nandha",
        id: 1,
        company: "BooksApp",
        orderId: 1,
        invoicepaid: 250,
        invoicePending: 280
    },
    {
        name: "Ashley",
        id: 2,
        company: "NotarizedDocs",
        orderId: 13,
        invoicepaid: 150,
        invoicePending: 180
    },
    {
        name: "Rajal",
        id: 4,
        company: "Conneqtly",
        orderId: 14,
        invoicepaid: 500,
        invoicePending: 580
    },


]

const seedDB = async () => {
    await Client.insertMany(clients);
    console.log("DB seeded");
}

module.exports = seedDB;