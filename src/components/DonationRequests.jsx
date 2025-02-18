import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationRequests = () => {
  const [requests, setRequests] = useState([]);
  console.log("requests", requests);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pending',);
        setRequests(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate('/login');
        }
      }
    };

    fetchRequests();
  }, [navigate]);

  const handleViewDetails = (id) => {
    navigate(`/donation-details/${id}`);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Blood Donation Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests?.map((request) => (
          <div
            key={request._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-bold">{request.recipientName}</h2>
            <p><strong>Location:</strong> {request.
              fullAddress
            }</p>
            <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
            <p><strong>Date:</strong> {request.
              donationDate
            }</p>
            <p><strong>Time:</strong> {request.
              donationTime
            }</p>
            <button
              className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
              onClick={() => handleViewDetails(request._id)}
            >
              View
            </button>
          </div>
        )

        )}
      </div>
    </div>
  );
};

export default DonationRequests;
