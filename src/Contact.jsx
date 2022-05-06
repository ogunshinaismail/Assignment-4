import React from 'react'

const Contact = ({title}) => {
  return (
    <div className='content contact'>
        <h1>{title}</h1>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Message:</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send Message</button>
        </form>
    </div>
  )
}

export default Contact