import React, { useState } from 'react';

const MultiFormData = () => {
  const [formData, setFormData] = useState({
    name: 'Abdul Samad',
    email: 'abdulsamad@gmail.com',
    phone: '035566603',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Welcome, ${formData.name}!`);
  };

  return (
    <div>
      <h1>Hello this is MultiFormData</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultiFormData;