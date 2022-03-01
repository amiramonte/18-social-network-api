const router = require('express').Router();
const {User, Thought} = require('../../models');

// the `api/thoughts` endpoint


// GET route for all thoughts
router.get('/', async (req, res) => {
    try {
        const allThoughts = await Thought.find();

        res.status(200).json(allThoughts);

    } catch (error) {
        res.status(400).json(error);
    }
});


// GET route for single thought by id
router.get('/singlethought/:id', async (req, res) => {
    try {
        const singlethought = await Thought.findOne({_id:req.params.id})

        res.status(200).json(singlethought);

    } catch (error) {
        res.status(400).json(error);
        console.log(error)
    }
});



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



// PUT route to update a thought by its _id
router.put('/update/:id', async (req, res) => {
    try {
        const foundThought = await Thought.findOneAndUpdate(
            {_id:req.params.id},
            {$set: req.body},
            {new:true}
            )

        res.status(200).json(foundThought);

    } catch (error) {
        res.status(400).json(error);
    }
});



// DELETE route to delete thought by its _id
router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteThought = await Thought.findOneAndDelete(
            {_id:req.params.id},
            {new:true}
            );

        res.status(200).json(deleteThought);

    } catch (error) {
        res.status(400).json(error);
    }
});


// POST route to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', async(req, res)=> {
    try {
        const addReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            {$addToSet: {reactions:req.body}}, 
            {new:true}
            )

            res.status(200).json(addReaction);

    } catch (error) {
        res.status(400).json(error)
    }
})


// DELETE route to remove a reaction by the reaction's id field
router.delete('/:thoughtId/reactions/:reactionId', async(req, res)=> {
    try {
        const deleteReaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId}, 
            {$pull: {reactions: {_id:req.params.reactionId}}}, 
            {new:true}
            )

            res.status(200).json(deleteReaction);

    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = router; 