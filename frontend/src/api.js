import axios from "axios";

const URL = "http://localhost:3000/api/v1";

export async function getPosts() {
    // http://localhost:3000/api/v1/posts
    const response = await axios.get(`${URL}/posts`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function getPost(id) {
    // http://localhost:3000/api/v1/posts/12345
    const response = await axios.get(`${URL}/posts/${id}`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function createPost(post) {
    // http://localhost:3000/api/v1/posts
    const response = await axios.post(`${URL}/posts/create`, post);
    return response
}

export async function updatePost(id, post) {
    // http://localhost:3000/api/v1/posts
    const response = await axios.post(`${URL}/posts/${id}`, post);
    return response
}

export async function deletePost(id) {
    // http://localhost:3000/api/v1/posts/12345
    const response = await axios.delete(`${URL}/posts/${id}`);
    return response
}




/******************************** USER API ********************************/

export async function getUsers() {
    // http://localhost:3000/api/v1/users
    const response = await axios.get(`${URL}/users`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function getUser(id) {
    // http://localhost:3000/api/v1/users/12345
    const response = await axios.get(`${URL}/users/${id}`);

    if (response.status === 200) {
        return response.data;
    }

    return
}

export async function createUser(user) {
    // http://localhost:3000/api/v1/users
    const response = await axios.post(`${URL}/users/create`, user);
    return response
}

export async function updateUser(id, post) {
    // http://localhost:3000/api/v1/users
    const response = await axios.post(`${URL}/users/${id}`, post);
    return response
}

export async function deleteUser(id) {
    // http://localhost:3000/api/v1/users/12345
    const response = await axios.delete(`${URL}/users/${id}`);
    return response
}