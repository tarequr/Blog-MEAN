import { useState } from 'react'
import { createPost } from '../api';

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit() {
    let submitObject = {
      title: title,
      description: description,
      content: content,
      author: null
    }

    await createPost(submitObject);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Title</label>
        <input type="text" onChange={(event) => setTitle(event.target.value)} name='title' placeholder='Enter title' />

        <label htmlFor="">Description</label>
        <input type="text" onChange={(event) => setDescription(event.target.value)} name='description' placeholder='Enter description' />

        <label htmlFor="">Content</label>
        <textarea name="content" id="" onChange={(event) => setContent(event.target.value)} placeholder='Type here...'></textarea>

        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default CreateBlog