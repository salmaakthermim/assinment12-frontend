

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import axios from "axios";

const DonationDetails = () => {
  const { id } = useParams();
  const [requestDetails, setRequestDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch donation request details by ID
    axios
      .get(`https://assignment-12-server-two-hazel.vercel.app/donation-requests/${id}`)
      .then((response) => setRequestDetails(response.data))
      .catch((error) => console.error("Error fetching request details:", error));
  }, [id]);

  const handleConfirmDonation = () => {
    axios
      .patch(`https://assignment-12-server-two-hazel.vercel.app/donation-requests/${id}/status`, { status: "inprogress" })
      .then(() => {
        alert("Donation confirmed successfully!");
        setIsModalOpen(false);
        navigate("/dashboard"); 
      })
      .catch((error) => console.error("Error updating donation status:", error));
  };

  if (!requestDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* Donation Request Details */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Donation Request Details</h1>
        <p><strong>Recipient Name:</strong> {requestDetails.recipientName}</p>
        <p><strong>Blood Group:</strong> {requestDetails.bloodGroup}</p>
        <p><strong>Location:</strong> {requestDetails.location}</p>
        <p><strong>Date:</strong> {requestDetails.date}</p>
        <p><strong>Time:</strong> {requestDetails.time}</p>
        <p><strong>Additional Notes:</strong> {requestDetails.notes || "N/A"}</p>

        {/* Donate Button */}
        <button
          className="btn btn-primary mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Donate
        </button>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Confirm Donation</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Donor Name</label>
                <input
                  type="text"
                  value={user?.name || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Donor Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleConfirmDonation}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationDetails;
