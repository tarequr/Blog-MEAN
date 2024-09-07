const UserModel = require("../Models/UserModel");

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
            password,
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

        const { name, email, password, posts } = req.body; // Use fields that match UserModel
        
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, 
            { name, email, password, posts }, // Update relevant fields
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

module.exports = { getAllUserController, createUserController, singleUserController, updateUserController, deleteUserController }