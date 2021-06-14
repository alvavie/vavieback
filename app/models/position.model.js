const mongoose = require("mongoose");

const Position = mongoose.model(
    "Position",
    new mongoose.Schema({
        positionId: String,
        contractId: String,
        fundId: String,
        quantity: Number,
        date: Date
    })
);

module.exports = Position;