import React from 'react';

export default function NameList() {
    const names = ['Paul', 'Jim', 'Charlie'];

    return (
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    )
}