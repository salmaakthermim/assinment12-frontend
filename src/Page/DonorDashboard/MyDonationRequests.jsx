import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider";


const MyDonationRequests = () => {
    const [requests, setRequests] = useState([]);
    const [statusFilter, setStatusFilter] = useState("");
    console.log("statusFilter", statusFilter);
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 
    const { user } = useAuth();

    console.log("user", user.email);  

    console.log("requests", requests);

    useEffect(() => {
        fetchRequests();
    }, [statusFilter, currentPage]);

    const fetchRequests = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/my-donation-requests`,
                {
                    params: {
                        email: user?.email,
                        status: statusFilter,
                        page: currentPage,
                        limit: 5,
                    },
                }
            );
            setRequests(response.data.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error("Error fetching donation requests:", error);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">My Donation Requests 🩸</h2>
            
            {/* Filter Options */}
            <div className="mb-4">
                <label className="mr-2 font-medium">Filter by Status:</label>
                <select
                    className="select select-bordered"
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setCurrentPage(1); // Reset page when filter changes
                    }}
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>

            {/* Donation Requests Table */}
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Recipient</th>
                        <th className="border border-gray-300 px-4 py-2">Hospital</th>
                        <th className="border border-gray-300 px-4 py-2">Blood Group</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Requested At</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map((request, index) => (
                            <tr key={request._id}>
                                <td className="border border-gray-300 px-4 py-2">
                                    {index + 1 + (currentPage - 1) * 5}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {request.recipientName}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {request.hospitalName}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {request.bloodGroup}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {request.donationStatus}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {new Date(request.createdAt).toLocaleDateString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                className="text-center border border-gray-300 px-4 py-2"
                            >
                                No donation requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4">
                <button
                    className="btn btn-sm mr-2"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <span className="mx-2">Page {currentPage} of {totalPages}</span>
                <button
                    className="btn btn-sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MyDonationRequests;
