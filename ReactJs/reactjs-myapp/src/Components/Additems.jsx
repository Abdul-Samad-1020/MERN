import React, { useState } from 'react';
import { db } from './firebaseconfig'; // Import your Firebase config
import { collection, addDoc } from 'firebase/firestore';

const Additems = () => {
    const [name, setName] = useState("");

    const handleAddItems = async () => {
        if (name.trim()) {
            try {
                await addDoc(collection(db, "items"), { name: name });
                alert("Added");
                setName("");
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    };

    return (
        <div>
            <h1 style={{
                marginLeft: '10px',
                marginBottom: '10px',
                padding: '10px',
                borderRadius: '5px',
                borderColor: 'black',
                borderWidth: '1px',
                borderStyle:'solid'
            }}>Firebase Class</h1>
            <input 
                style={{
                    marginBottom: '10px',
                    marginLeft: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                    borderColor: 'black',
                    borderWidth: '1px',
                    borderStyle:'solid'
                }}
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter item name"
            />
            <button style={{
                marginLeft: '10px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: 'green',
                color: 'white',
                cursor: 'pointer'
            }} onClick={handleAddItems}>Add Item</button>
        </div>
    );
};

export default Additems;
