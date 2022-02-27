const router = require('express').Router();
const {User, Thought} = require('../../models');

// the `api/thoughts` endpoint


// POST route for creation of new thought
router.post('/create', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);

        const thoughtUser = await User.findOneAndUpdate(
            {_id:req.body.userId},
            {$addToSet: {thoughts: newThought._id} },
            {new:true}
            )

        res.status(200).json(thoughtUser);

    } catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
});


module.exports = router; 