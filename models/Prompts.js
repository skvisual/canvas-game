// complete for now

const mongoose = require("mongoose");

const PromptSchema = mongoose.Schema({
  word: {
    type: String,
    required: "Enter a noun (person, place, or thing)",
  },
});

const Prompt = mongoose.model('Prompt', PromptSchema);
module.exports = Prompt;
