import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";



const EditDonationRequest = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientDistrict: '',
    recipientUpazila: '',
    donationDate: '',
    donationTime: '',
    bloodGroup: '',
  });
  console.log('formData', formData)

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/donation-requests/${id}`
        );

        // ✅ এখানে response আছে
        console.log("FULL RESPONSE 👉", response.data);

        setFormData({
          recipientName: response.data.recipientName || "",
          recipientDistrict:
            response.data.
              recipientDistrict ||
            response.data.district ||
            "",
          recipientUpazila:
            response.data.recipientUpazila ||
            response.data.upazila ||
            "",
          donationDate: response.data.donationDate
            ? response.data.donationDate.slice(0, 10)
            : "",
          donationTime: response.data.donationTime || "",
          bloodGroup: response.data.bloodGroup || "",
        });
      } catch (error) {
        console.error("Error fetching donation request:", error);
      }
    };

    fetchRequest();
  }, [id]);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      `http://localhost:5000/donation-requests/${id}`,
      {
        ...formData,
        requesterEmail: user.email, // 👈 must
      }
    );

    navigate('/dashboard');

  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Donation Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Recipient Name</label>
          <input
            type="text"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">District</label>
          <input
            type="text"
            name="recipientDistrict"
            value={formData.recipientDistrict}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Upazila</label>
          <input
            type="text"
            name="recipientUpazila"
            value={formData.recipientUpazila}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Date</label>
          <input
            type="date"
            name="donationDate"
            value={formData.donationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Time</label>
          <input
            type="time"
            name="donationTime"
            value={formData.donationTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="" disabled>Select Blood Group</option>
            {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Update Request
        </button>
      </form>
    </div>
  );
};

export default EditDonationRequest;
