const mongoose = require("mongoose");

const Position = mongoose.model(
    "Position",
    new mongoose.Schema({
            positionId: Number,
            contractId: Number,
            fundId: Number,
            quantity: Number,
            date: Date
    }),
    "position"
);

module.exports = Position;