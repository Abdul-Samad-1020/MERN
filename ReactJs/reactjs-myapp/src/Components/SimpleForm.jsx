import React, { useState } from "react";

const SimpleForm = () => {
    const [name, setname] = useState("samad");

    const handleChange = (e) => {
        setname(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`your name is ${name}`);
    }

    return (
        <div>
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" placeholder="Enter your name " value={name} onChange={handleChange}></input>
                </label><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;

