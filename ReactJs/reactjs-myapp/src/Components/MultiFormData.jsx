import React, { useState } from 'react'

const MultiFormData = () => {
    const [formDate, setFormData] = useState({
        name: 'lai',
        email: '',
        phone: ''
      });
    






  return (
    <div>
      <h1>
        Hello this is MultiFormData
      </h1>
      <form >
        <input type="text" placeholder="Enter Name" name={name} onChange={formDate.name} /><br></br>
        <input type="email" name={email} placeholder="Enter Email" onChange={formDate.email} /><br></br>
        <input type="number" placeholder="Enter Phone Number" onChange={formDate.phone}/><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};

export default MultiFormData
