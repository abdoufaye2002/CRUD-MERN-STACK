const mongoose = require("mongoose");

SchemaUsers = new mongoose.Schema({
  nom: String,
  mail: String,
  age: Number,
});

module.exports = mongoose.model("utilisateurs", SchemaUsers);
