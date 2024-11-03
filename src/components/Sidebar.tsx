import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white p-4 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
                <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Dashboard</a></li>
                <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a></li>
                <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Logout</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
