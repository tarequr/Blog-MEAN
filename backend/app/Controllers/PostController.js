const PostModel = require("../Models/PostModel");

/* GET ALL POSTS CONTROLLER */
const getAllPostController = async(req, res) => {
    try {
        const posts = await PostModel.find({});

        if (!posts) {
            return res.status(404).send({ 
                success: false,
                message: 'No food available'
            });
        }

        res.status(200).send({
            success: true,
            totalCount: posts.length,
            posts
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get All Posts API: ${error.message}`,
            error
        });
    }
}

/* CREATE POST CONTROLLER */
const createPostController = async(req, res) => {
    try {
        const { title, description, content, author } = req.body;

        /* Validation */
        if (!title || !description || !content || !author) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide all required information'
            });
        }

        const newPost = new PostModel({ title, description, content, author });
        await newPost.save();

        res.status(200).send({
            success: true,
            message: 'New post created successfully',
            newPost
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Create Post API: ${error.message}`,
            error
        });
    }
}

/* GET SINGLE POST CONTROLLER */
const singlePostController = async(req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide food id.'
            }); 
        }

        const post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).send({ 
                success: false,
                message: 'No post available'
            });
        }

        res.status(200).send({
            success: true,
            post
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Get Single Post API: ${error.message}`,
            error
        });
    }
}

/* UPDATE POST CONTROLLER */
const updatePostController = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide food id.'
            }); 
        }

        const food = await PostModel.findById(id);
        if (!food) {
            return res.status(500).send({ 
                success: false,
                message: 'No food available'
            });
        }

        const { title, description, content, author } = req.body;
        
        const updatePost = await PostModel.findByIdAndUpdate(id, { title, description, content, author }, { new: true });
        
        res.status(200).send({
            success: true,
            message: 'Post updated successfully',
            updatePost
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error In Update Post API: ${error.message}`,
            error
        });
    }
}

/* DELETE POST CONTROLLER */
const deletePostController = async(req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).send({ 
                success: false,
                message: 'Please provide post id.'
            }); 
        }

        await PostModel.findByIdAndDelete(req.params.id);
        
        res.status(200).send({
            success: true,
            message: 'Post deleted successfully'
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

module.exports = { getAllPostController, createPostController, singlePostController, updatePostController, deletePostController }