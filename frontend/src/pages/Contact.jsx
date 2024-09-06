import React from 'react'

function Contact() {
  async function handleSubmit() {
    // Create  
  }

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Feel free to reach out to us!</p>
      <p>You can contact us via email at <a href="mailto:contact@example.com">contact@example.com</a> .</p>
      <p>Alternatively, you can fill out the form below:</p>
    
      <form onSubmit={handleSubmit}>

        <label htmlFor="">Name:</label>
        <input type="text" name='name' />

        <label htmlFor="">Email:</label>
        <input type="email" name='email' />

        <label htmlFor="">Message:</label>
        <textarea name="message" id=""></textarea>

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact