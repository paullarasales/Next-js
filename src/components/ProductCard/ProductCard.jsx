import React from 'react';

export default function ProductCard({name, description, price}) {
    return (
        <div>
            <p>{name}</p>
            <h2>{description}</h2>
            <h2>${price}</h2>
            <button>Add To Cart</button>
        </div>
    )
}