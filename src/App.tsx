import React from 'react';
import Layout from './components/Layout';

const App: React.FC = () => {
    return (
        <Layout>
            <div>
                <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
                <p>This is your main content area.</p>
            </div>
        </Layout>
    );
};

export default App;
