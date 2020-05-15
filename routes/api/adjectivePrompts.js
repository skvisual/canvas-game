const express = require("express");
const router = express.Router();
const AdjectivePrompt = require("../../models/AdjectivePrompt");

// gets back all the prompts
router.get("/", async (req, res) => {
    try{
      const prompts = await AdjectivePrompt.find();
      res.json(prompts);
    }catch(err){
      console.log(err)
        res.json({message:err})
    }
  });
  
  router.post("/", (req, res) => {
    const prompt = new AdjectivePrompt({
        word: req.body.word
    });
    
    prompt.save((err, prompt) => {
      if(err) {
          res.json(err);
      }
        res.json(prompt);
    
    })
  });
  
  module.exports = router;
