const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

/* GET ALL USERS CONTROLLER */
const getAllUserController = async(req, res) => {
    try {
        const users = await UserModel.find({});

        if (!users) {
            return res.status(404).send({ 
                success: false,
                message: 'No post available'
            });
        }

        res.status(200).send({
            success: true,
            totalCount: users.length,
            users
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get All Users API: ${error.message}`,
            error
        });
    }
}

/* CREATE USER CONTROLLER */
const createUserController = async (req, res) => {
    try {
        const { name, email, password, posts } = req.body;
        const hashPassword = await bcrypt.hash(String(password), SALT_ROUNDS);

        /* Validation */
        if (!name || !email || !password) {
            return res.status(400).send({ 
                success: false,
                message: 'Please provide all required fields (name, email, password)'
            });
        }

        /* Check if the email is already taken */
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'Email is already in use. Please use a different email.'
            });
        }

        /* Create new user with joinDate (default to now) and optional posts */
        const newUser = new UserModel({
            name,
            email,
            password: hashPassword,
            joinDate: Date.now(), // Optional, defaults to now
            posts: posts || [] // Optional, defaults to an empty array
        });
        
        await newUser.save();

        res.status(201).send({
            success: true,
            message: 'User created successfully',
            newUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: `Error in Create User API: ${error.message}`,
            error
        });
    }
}

/* GET SINGLE USER CONTROLLER */
const singleUserController = async(req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide user id.'
            }); 
        }

        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ 
                success: false,
                message: 'No user available'
            });
        }

        res.status(200).send({
            success: true,
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get Single User API: ${error.message}`,
            error
        });
    }
}

/* UPDATE USER CONTROLLER */
const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide user id.'
            }); 
        }

        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).send({ 
                success: false,
                message: 'No user available'
            });
        }

        const { name, email, password, joinDate, posts } = req.body; // Use fields that match UserModel
        
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, 
            { name, email, password, joinDate, posts }, // Update relevant fields
            { new: true } // Return the updated user document
        );
        
        res.status(200).send({
            success: true,
            message: 'User updated successfully',
            updatedUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Update User API: ${error.message}`,
            error
        });
    }
}

/* DELETE USER CONTROLLER */
const deleteUserController = async(req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide user id.'
            }); 
        }

        await UserModel.findByIdAndDelete(req.params.id);
        
        res.status(200).send({
            success: true,
            message: 'User deleted successfully'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Delete Post API: ${error.message}`,
            error
        });
    }
}

/* LOGIN USER CONTROLLER */
const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;

        /* Validation */
        if (!email || !password) {
            return res.status(400).send({ 
                success: false,
                message: 'Please provide all required fields (email, password)'
            });
        }

        const user = await UserModel.findOne({ email });

        if (user) {
            let isPasswordValid = await bcrypt.compare(user.password, password);
            if (isPasswordValid) {
                return res.status(200).send({
                    success: true,
                    user
                });
            } else {
                return res.status(401).send({
                    success: false,
                    message: 'Passwords do not match.'
                }); 
            }
        } else {
            return res.status(404).send({
                success: false,
                message: 'User not found.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: `Error in Login User API: ${error.message}`,
            error
        });
    }
}

module.exports = { getAllUserController, createUserController, singleUserController, updateUserController, deleteUserController, loginUserController }