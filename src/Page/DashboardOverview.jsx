import React, { useEffect, useState } from 'react';
import { useAuth } from '../Provider/AuthProvider';
import useUserRole from '../hook/useUserRole';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';
import { FaUsers, FaHeartbeat, FaHandHoldingHeart, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const DashboardOverview = () => {
    const { user } = useAuth();
    const [userRole] = useUserRole(user?.email);
    const [loading, setLoading] = useState(true);

    // Mock Data based on role - in a real app this would come from your backend
    const adminData = {
        totalUsers: 1250,
        totalDonations: 845,
        totalRequests: 420,
        completedRequests: 310,
        monthlyData: [
            { name: 'Jan', requests: 40, donations: 60 },
            { name: 'Feb', requests: 30, donations: 55 },
            { name: 'Mar', requests: 45, donations: 80 },
            { name: 'Apr', requests: 50, donations: 90 },
            { name: 'May', requests: 65, donations: 110 },
            { name: 'Jun', requests: 55, donations: 95 }
        ],
        bloodTypeData: [
            { name: 'A+', value: 400 },
            { name: 'O+', value: 300 },
            { name: 'B+', value: 300 },
            { name: 'AB+', value: 200 },
            { name: 'O-', value: 50 }
        ]
    };

    const donorData = {
        totalDonations: 5,
        myRequests: 2,
        peopleHelped: 15, // 1 donation can help 3 people
        donationHistory: [
            { name: '2023 Q1', amount: 1 },
            { name: '2023 Q2', amount: 0 },
            { name: '2023 Q3', amount: 2 },
            { name: '2023 Q4', amount: 1 },
            { name: '2024 Q1', amount: 1 }
        ]
    };

    const volunteerData = {
        managedEvents: 12,
        hoursContributed: 145,
        assistedDonors: 320,
        weeklyActivity: [
            { name: 'Mon', hours: 4 },
            { name: 'Tue', hours: 3 },
            { name: 'Wed', hours: 5 },
            { name: 'Thu', hours: 2 },
            { name: 'Fri', hours: 6 },
            { name: 'Sat', hours: 8 },
            { name: 'Sun', hours: 0 }
        ]
    };

    // Colors for pie chart
    const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

    useEffect(() => {
        // Simulate loading data
        setTimeout(() => setLoading(false), 800);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
            </div>
        );
    }

    // --- ADMIN OVERVIEW ---
    if (userRole === 'admin') {
        return (
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">System Overview</h2>
                    <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Users" value={adminData.totalUsers} icon={<FaUsers />} color="bg-blue-500" />
                    <StatCard title="Total Donations" value={adminData.totalDonations} icon={<FaHeartbeat />} color="bg-red-500" />
                    <StatCard title="Blood Requests" value={adminData.totalRequests} icon={<FaHandHoldingHeart />} color="bg-yellow-500" />
                    <StatCard title="Requests Resolved" value={adminData.completedRequests} icon={<FaCheckCircle />} color="bg-green-500" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Donations vs Requests (6 Months)</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={adminData.monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                    <Legend iconType="circle" />
                                    <Bar dataKey="donations" name="Donations" fill="#ef4444" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="requests" name="Requests" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Blood Type Distribution</h3>
                        <div className="h-80 flex flex-col items-center justify-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={adminData.bloodTypeData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {adminData.bloodTypeData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                    <Legend iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- DONOR OVERVIEW ---
    if (userRole === 'donor') {
        return (
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">My Impact</h2>
                    <p className="text-gray-500 mt-1">See how your contributions are saving lives.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Donations" value={donorData.totalDonations} icon={<FaHeartbeat />} color="bg-red-500" />
                    <StatCard title="Lives Helped" value={donorData.peopleHelped} icon={<FaUsers />} color="bg-green-500" />
                    <StatCard title="My Active Requests" value={donorData.myRequests} icon={<FaHandHoldingHeart />} color="bg-blue-500" />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">My Donation Journey</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={donorData.donationHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Line type="monotone" dataKey="amount" stroke="#ef4444" strokeWidth={4} dot={{ r: 6, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        );
    }

    // --- VOLUNTEER OVERVIEW ---
    if (userRole === 'volunteer') {
        return (
            <div className="space-y-6">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Volunteer Dashboard</h2>
                    <p className="text-gray-500 mt-1">Thank you for your dedicated service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Events Managed" value={volunteerData.managedEvents} icon={<FaCheckCircle />} color="bg-purple-500" />
                    <StatCard title="Hours Contributed" value={volunteerData.hoursContributed} icon={<FaSpinner />} color="bg-blue-500" />
                    <StatCard title="Donors Assisted" value={volunteerData.assistedDonors} icon={<FaUsers />} color="bg-green-500" />
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">My Weekly Activity</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={volunteerData.weeklyActivity} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Bar dataKey="hours" name="Hours Volunteered" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback while detecting role
    return null;
};

// Reusable Stat Card Component
const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center group hover:shadow-md transition-shadow">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mr-4 ${color} bg-opacity-90 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h4 className="text-2xl font-bold text-gray-800 mt-1">{value}</h4>
        </div>
    </div>
);

export default DashboardOverview;
