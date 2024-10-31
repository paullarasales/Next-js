import React, { useState } from 'react';

function AddItem({ addItem }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(name); 
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Add a new item"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddItem;