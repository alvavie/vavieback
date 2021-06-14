const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");

db.client = require("./client.model");
db.contract = require("./contract.model");
db.position = require("./position.model");
db.fund = require("./fund.model");
db.fundh = require("./fundh.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;