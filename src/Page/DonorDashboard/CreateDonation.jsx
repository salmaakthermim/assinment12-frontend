
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const CreateDonation = () => {
    const { user } = useAuth();
    console.log("user", user);
    const [userInfo, setUserInfo] = useState([]);
    console.log("userInfo", userInfo);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);

    console.log("loading",loading, "error", error);
    const navigate = useNavigate();
    const [districts, setDistricts] = useState([]);
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);
    const [upazilas, setUpazilas] = useState([]);

    const [formData, setFormData] = useState({
        recipientName: '',
        recipientDistrict: '',
        recipientUpazila: '',
        hospitalName: '',
        fullAddress: '',
        bloodGroup: '',
        donationDate: '',
        donationTime: '',
        requestMessage: ''
    });
    // feach upzilas data
    useEffect(() => {
        fetch("/upazilas.json")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched upazilas:", data); 
                setUpazilas(data);
            })
            .catch((err) => console.error("Error fetching upazilas:", err));
    }, []);

    // Fetch Districts Data
    useEffect(() => {
        fetch("/districts.json")
            .then((res) => res.json())
            .then((data) => {
                setDistricts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching districts:", err);
                setError("Failed to load districts.");
                setLoading(false);
            });
    }, []);



    useEffect(() => {
        if (user?.status === 'blocked') {
            alert('Blocked users cannot create donation requests.');
            navigate('/');
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        
        });
        console.log('name', name,value)
        if (name === "recipientDistrict") {
            const selectedDistrict = districts.find((d) => d.name === value);
            console.log("Selected District:", selectedDistrict); 
            if (selectedDistrict) {
                const filtered = upazilas.filter(
                    (u) => u.district_id === selectedDistrict.id.toString()
                );
                console.log("Filtered Upazilas:", filtered); 
                setFilteredUpazilas(filtered);
            } else {
                setFilteredUpazilas([]);
            }
            setFormData({ ...formData, district: value, upazila: "" });
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://assignment-12-server-two-hazel.vercel.app/user/${user?.email}`);
                console.log("response", response);
                setUserInfo(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData()
    }, [user])






    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            alert('Please log in to create a donation request.');
            return;
        }

        const requestData = {
            requesterName: user?.displayName,
            requesterEmail: user.email,
            recipientDistrict: formData?.recipientDistrict,
            ...formData,
            donationStatus: 'pending',
        };

        try {
            const response = await axios.post('https://assignment-12-server-two-hazel.vercel.app/donation-requests', requestData, {

            });

            if (response.status === 201) {
                Swal.fire({
                    title: "Donation request created successfully!",
                    icon: "success",
                    draggable: true
                  });
                navigate('/dashboard');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to create donation request. Please try again later.');
        }
    };
    console.log("formData-upazila", formData.recipientUpazila);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Create Donation Request</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Requester Name</label>
                    <input type="text" value={userInfo?.name || ''} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-medium">Requester Email</label>
                    <input type="email" value={userInfo?.email || ''} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block font-medium">Recipient Name</label>
                    <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-medium">Recipient District</label>
                    <select
                        name="recipientDistrict"
                        value={formData.district}
                        
                        onChange={handleChange}
                        className="select select-bordered w-full"
                        >

                        <option value="" disabled>
                            Select District
                        </option>
                        {districts.map((district) => (
                            <option key={district.id} value={district.name}>
                                {district.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Recipient Upazila</label>
                    <select
                        name="recipientUpazila"
                        value={formData.recipientUpazila}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                      
                    >
                        <option value="" >
                            Select Upazila
                        </option>
                        <option value="" >
                        Brahmanpara
                        </option>
                        {filteredUpazilas.length > 0 ? (
                            filteredUpazilas.map((upazila) => (
                                <option key={upazila.id} value={upazila.name}>
                                    {upazila.name}
                                </option>
                            ))
                        ) : (
                            <option value="" disabled>
                                No Upazilas Found
                            </option>
                        )}
                    </select>

                </div>
                <div>
                    <label className="block font-medium">Hospital Name</label>
                    <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-medium">Full Address</label>
                    <input type="text" name="fullAddress" value={formData.fullAddress} onChange={handleChange} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-medium">Blood Group</label>
                    <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="select select-bordered w-full" required>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Donation Date</label>
                    <input type="date" name="donationDate" value={formData.donationDate} onChange={handleChange} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-medium">Donation Time</label>
                    <input type="time" name="donationTime" value={formData.donationTime} onChange={handleChange} className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="block font-medium">Request Message</label>
                    <textarea name="requestMessage" value={formData.requestMessage} onChange={handleChange} className="textarea textarea-bordered w-full" required />
                </div>
                <button type="submit" className="btn btn-primary w-full">Submit Request</button>
            </form>
        </div>
    );
};

export default CreateDonation;