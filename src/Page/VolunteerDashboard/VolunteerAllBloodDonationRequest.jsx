import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";


const VolunteerAllBloodDonationRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/all-donation-requests?page=${page}&status=${statusFilter}`
      );
      setRequests(data.requests);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError("Failed to fetch donation requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [page, statusFilter]);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/donation-requests/${id}/status`, {
        status,
      });
      fetchRequests();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">All Blood Donation Requests</h1>
      <div className="mb-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>#</th>
            <th>Requester</th>
            <th>Recipient</th>
            <th>Blood Group</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={req._id}>
              <td>{index + 1}</td>
              <td>{req.requesterName}</td>
              <td>{req.recipientName}</td>
              <td>{req.bloodGroup}</td>
              <td>{req.donationDate}</td>
              <td>{req.donationStatus}</td>
              <td>
                {/* Update status buttons only */}
                <button
                  onClick={() => updateStatus(req._id, "done")}
                  className="bg-green-500 text-white px-2 py-1 rounded mx-1"
                >
                  Mark as Done
                </button>
                <button
                  onClick={() => updateStatus(req._id, "canceled")}
                  className="bg-red-500 text-white px-2 py-1 rounded mx-1"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 mx-1 rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VolunteerAllBloodDonationRequest;
