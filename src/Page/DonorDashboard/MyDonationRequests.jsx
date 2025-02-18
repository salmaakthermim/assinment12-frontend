import { useState, useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import axios from "axios";

const MyDonationRequests = () => {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    const [statusFilter, setStatusFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonationRequests();
    }, [statusFilter, currentPage, user.email]);

    const fetchDonationRequests = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/my-donation-requests', {
                params: {
                    email: user.email,
                    status: statusFilter,
                    page: currentPage,
                    limit: 10
                }
            });
            setRequests(response.data.donations);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching donations:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">My Donation Requests</h2>
                <select
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="select select-bordered"
                >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className="min-w-full border">
                    <thead>
                        <tr>
                            <th className="border p-2">Recipient Name</th>
                            <th className="border p-2">Location</th>
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Time</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Hospital Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request._id}>
                                <td className="border p-2">{request.recipientName}</td>
                                <td className="border p-2">{request.recipientDistrict}, {request.recipientUpazila}</td>
                                <td className="border p-2">{request.donationDate}</td>
                                <td className="border p-2">{request.donationTime}</td>
                                <td className="border p-2">
                                    <span className={`px-2 py-1 rounded ${
                                        request.donationStatus === 'completed' ? 'bg-green-200' :
                                        request.donationStatus === 'inprogress' ? 'bg-yellow-200' :
                                        request.donationStatus === 'canceled' ? 'bg-red-200' :
                                        'bg-blue-200'
                                    }`}>
                                        {request.donationStatus}
                                    </span>
                                </td>
                                <td className="border p-2">{request.hospitalName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="btn btn-sm"
                >
                    Previous
                </button>
                <span className="flex items-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="btn btn-sm"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyDonationRequests;
