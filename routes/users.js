const express = require("express");
const router = express.Router();
const User = require("../models/User");

// get back all the users
router.get("/", async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err})
    }
});

// submits a user
router.post("/", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save((err, user) => {
        if(err) {
            res.json(err);
        }
        res.json(user);
    })
})

// specific user
router.get('/:userId', (req,res) => {
    console.log(req.params.userId);
})

module.exports = router;
