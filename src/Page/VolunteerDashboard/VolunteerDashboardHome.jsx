import { useState } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import { useEffect } from "react";
import { FaDonate, FaTint, FaUsers } from "react-icons/fa";


const VolunteerDashboardHome = () => {
    const { user } = useAuth();
    const [statistics, setStatistics] = useState({
        totalUsers: 0,
        totalFunding: 0,
        totalRequests: 0,
    });

    useEffect(() => {
        // Fetch dashboard statistics from the server
        const fetchStatistics = async () => {
            try {
                const response = await fetch('https://assignment-12-server-two-hazel.vercel.app/dashboard-statistics'); // Replace with your API endpoint
                const data = await response.json();
                setStatistics(data);
            } catch (error) {
                console.error('Failed to fetch statistics:', error);
            }
        };

        fetchStatistics();
    }, []);

    const stats = [
        {
            icon: <FaUsers className="text-blue-500 text-4xl" />,
            count: statistics.totalUsers,
            title: 'Total Users (Donors)',
        },
        {
            icon: <FaDonate className="text-green-500 text-4xl" />,
            count: `$${statistics.totalFunding}`,
            title: 'Total Funding',
        },
        {
            icon: <FaTint className="text-red-500 text-4xl" />,
            count: statistics.totalRequests,
            title: 'Total Blood Donation Requests',
        },
    ];

    return (
        <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-6 bg-blue-100 p-4 rounded-xl text-center shadow-md">
                <h1 className="text-2xl font-bold mb-4">
                    Welcome, {user?.displayName || user?.name || 'User'}!
                </h1>
                <p className="text-gray-700">Track your activities and manage everything from here.</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{stat.icon}</div>
                        <h2 className="text-2xl font-bold">{stat.count}</h2>
                        <p className="text-gray-500">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default VolunteerDashboardHome;