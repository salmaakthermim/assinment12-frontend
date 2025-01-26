import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';

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

  if (loading) return <LoadingSpinner></LoadingSpinner>
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
      <table  className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Requester</th>
            <th className="border border-gray-300 px-4 py-2">Recipient</th>
            <th className="border border-gray-300 px-4 py-2">Blood Group</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={req._id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{req.requesterName}</td>
              <td className="border border-gray-300 px-4 py-2">{req.recipientName}</td>
              <td className="border border-gray-300 px-4 py-2">{req.bloodGroup}</td>
              <td className="border border-gray-300 px-4 py-2">{req.donationDate}</td>
              <td className="border border-gray-300 px-4 py-2">{req.donationStatus}</td>
              <td className='flex gap-2 border border-gray-300 px-4 py-2'>
                <button  className="btn btn-sm btn-info" onClick={() => updateStatus(req._id, 'done')}>
                  Mark as Done
                </button>
                <button className="btn btn-sm btn-warning" onClick={() => updateStatus(req._id, 'canceled')}>
                  Cancel
                </button>
                <button  className="btn btn-sm btn-error" onClick={() => deleteRequest(req._id)}>Delete</button>
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
