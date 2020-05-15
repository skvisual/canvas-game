const express = require("express");
const router = express.Router();
const Prompt = require("../../models/Prompts");

//  

// gets back all the prompts
router.get("/", async (req, res) => {
  try{
    const prompts = await Prompt.find();
    res.json(prompts);
  }catch(err){
      res.json({message:err})
  }
});

// submits a prompt
router.post("/", (req, res) => {
    const prompt = new Prompt({
        word: req.body.word
    });
    
    prompt.save((err, prompt) => {
      if(err) {
          res.json(err);
      }
        res.json(prompt);
    
    })
});

// specific post
router.get('/:promptId', (req,res) => {
    console.log(req.params.promptId);
})



module.exports = router;
