import React from 'react';

function Button() {
    function handleClick() {
        alert('Button was clicked!');
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    )
}

export default Button;