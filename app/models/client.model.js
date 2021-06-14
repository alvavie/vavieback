const mongoose = require("mongoose");

const Client = mongoose.model(
    "Client",
    new mongoose.Schema({
        username: String,
        clientId: Number,
        name: String,
        lastname: String,
        birthDate: Date,
        nationality: String,
        city: String,
        smoker: Boolean
    }),
    "client"
);

module.exports = Client;