import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const DonationRequestDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [requestDetails, setRequestDetails] = useState([]);
  console.log('requestDetails', requestDetails)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch donation request details
    const fetchRequestDetails = async () => {
      try {
        const response = await axios.get(`https://assignment-12-server-two-hazel.vercel.app/donation-requests/${id}`);
        setRequestDetails(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch request details.');
        setLoading(false);
      }
    };

    fetchRequestDetails();
  }, [id]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return (
      <div>
        <p className="text-red-500">{error}</p>
        <button
          className="btn btn-sm btn-secondary mt-4"
          onClick={() => navigate(-1)} 
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Donation Request Details</h1>

      {requestDetails ? (
        <div className="border rounded-lg p-6 bg-white shadow">
          <p><strong>Recipient Name:</strong> {requestDetails.recipientName}</p>
          <p><strong>Location:</strong> {requestDetails.recipientDistrict}, {requestDetails.recipientUpazila}</p>
          <p><strong>Blood Group:</strong> {requestDetails.bloodGroup}</p>
          <p><strong>Donation Date:</strong> {requestDetails.donationDate}</p>
          <p><strong>Donation Time:</strong> {requestDetails.donationTime}</p>
          <p><strong>Status:</strong> {requestDetails.donationStatus}</p>
          <p><strong>Notes:</strong> {requestDetails.notes || 'No notes provided.'}</p>

          <button
            className="btn btn-secondary mt-4"
            onClick={() => navigate(-1)} 
          >
            Go Back
          </button>
        </div>
      ) : (
        <p>Details not found for this donation request.</p>
      )}
    </div>
  );
};

export default DonationRequestDetails;
