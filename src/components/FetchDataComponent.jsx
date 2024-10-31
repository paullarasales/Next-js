import { useState } from 'react';

export default function FetchDataComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true);
        fetch('http://localhost:8000/api/monthly-revenue')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Monthly Revenue</button>

            {loading ? (
                <p>Loading...</p>
            ) : data ? (
                <div>
                    <h2>Monthly Revenue</h2>
                    {data.monthly_revenue.map((item, index) => (
                        <p key={index}>
                            Month: {item.month}, Year: {item.year}, Revenue: {item.revenue}
                        </p>
                    ))}
                </div>
            ) : (
                <p>No data loaded. Click the button to fetch data.</p>
            )}
        </div>
    );
}