const dbConfig = require('./config');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.Product = require("./product.model")(mongoose);
db.Order = require("./order.model")(mongoose);
db.Category = require("./category.model")(mongoose);

module.exports = db;
