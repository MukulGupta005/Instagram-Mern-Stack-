const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const requireLogin = require('../middleware/requireLogin');

// this is for testing the program
// router.get('/protected',requireLogin,(req,res)=>{
//     res.send("Hello user Welcome to protected Zone")
// })
router.post("/signup", (req, res) => {
    
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        // Return a response with status code 422 and error message
        return res.status(422).json({ error: "Please enter all fields"});
    }

    // Find user by email in the database
    User.findOne({ email: email })
        .then(savedUser => {
            if (savedUser) {
                // If user already exists, return an error message
                return res.status(422).json({ error: 'Email is already in use'});
            }

            // Hash the password before saving it to the database
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({ name, email, password: hashedpassword});

                    // Save the user to the database and send a response with success message
                    user.save()
                        .then(user => {
                            res.json({ message: "User created successfully!"});
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({ error: "Internal server error"});
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Internal server error"});
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal server error"});
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if there are any missing fields
    if (!email || !password) {
        return res.status(422).json({ error: "Please enter all fields."});
    }

    // Find the user by their email address
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(401).json({ error: "Invalid credentials"});
            }

            // Compare the password with the stored hash
            bcrypt.compare(password, savedUser.password)
                .then(validPassword => {
                    if (validPassword)  {
                        const token = jwt.sign({_id:savedUser._id},JWT_SECRET);
                        console.log("Token is generated")
                        res.json({token});
                    }  else {
                        return res.status(401).json({ error: "Invalid Password"});
                    }
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Internal server error"});
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Internal server error"});
        });
});

// Export the router
module.exports = router;