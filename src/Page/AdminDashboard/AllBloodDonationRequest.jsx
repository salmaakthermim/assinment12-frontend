import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllBloodDonationRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:5000/all-donation-requests?page=${page}&status=${statusFilter}`
      );
      setRequests(data.requests);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError('Failed to fetch donation requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [page, statusFilter]);

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/donation-requests/${id}/status`, { status });
      fetchRequests();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const deleteRequest = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/donation-requests/${id}`);
      fetchRequests();
    } catch (err) {
      alert('Failed to delete request');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>All Blood Donation Requests</h1>
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
        <option value="canceled">Canceled</option>
      </select>
      <table>
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
                <button onClick={() => updateStatus(req._id, 'done')}>
                  Mark as Done
                </button>
                <button onClick={() => updateStatus(req._id, 'canceled')}>
                  Cancel
                </button>
                <button onClick={() => deleteRequest(req._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBloodDonationRequest;
