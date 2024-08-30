import axios from "axios";

const URL = "http://localhost:3000";

export async function getPosts() {
    // http://localhost:3000/posts
    const response = await axios.get(`${URL}/posts`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function getPost(id) {
    // http://localhost:3000/posts/12345
    const response = await axios.get(`${URL}/posts/${id}`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function createPost() {
    // Create post
}

export async function updatePost(id) {
    // Update post
}

export async function deletePost(id) {
    // http://localhost:3000/posts/12345
    const response = await axios.delete(`${URL}/posts/${id}`);
    return response
}