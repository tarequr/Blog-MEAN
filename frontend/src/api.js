import axios from "axios";

const URL = "http://localhost:3000";

export async function getPosts() {
    const response = await axios.get(`${URL}/posts`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function getPost(id) {
    // Get post
}

export async function createPost() {
    // Create post
}

export async function updatePost(id) {
    // Update post
}

export async function deletePost(id) {
    // Delete post
}