const router = require('express').Router();
const {User, Thought} = require('../../models');

// the `api/user` endpoint



// GET route for all users = '/'

// GET route for single user by id = '/:id'

// POST route for new user
router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(200).json(newUser);
        console.log(newUser);

    } catch (error) {
        res.status(400).json(error);
    }
})



module.exports = router; 