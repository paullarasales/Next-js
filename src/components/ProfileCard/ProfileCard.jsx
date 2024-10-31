import React from 'react';

export default function ProfileCard({ name, age, location, bio }) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                <p className="text-gray-600">Age: {age}</p>
                <p className="text-lg text-red-500 mt-1">Location: {location}</p>
                <p className="text-gray-700 mt-4">{bio}</p>
            </div>
        </div>
    );
}
