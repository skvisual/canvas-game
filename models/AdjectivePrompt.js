// complete for now

const mongoose = require("mongoose");

const AdjectivePromptSchema = mongoose.Schema({
  word: {
    type: String,
    required: "Enter an adjective",

    
  }
});

const Adjective = mongoose.model('Adjective', AdjectivePromptSchema);
module.exports = Adjective;
