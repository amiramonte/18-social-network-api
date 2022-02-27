const router = require('express').Router();
const {User, Thought} = require('../../models');

// the `api/user` endpoint



// GET route for all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();

        res.status(200).json(allUsers);

    } catch (error) {
        res.status(400).json(error);
    }
});


// GET route for single user by id
router.get('/:id', async (req, res) => {
    try {
        const singleUser = await User.findOne({_id:req.params.id});

        res.status(200).json(singleUser);

    } catch (error) {
        res.status(400).json(error);
    }
});



// POST route for creation of new user
router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(200).json(newUser);

    } catch (error) {
        res.status(400).json(error);
    }
});


// PUT route to update a user by its _id



// DELETE route to delete user by its _id





module.exports = router; 