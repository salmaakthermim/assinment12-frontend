import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hook/UseAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const { register, reset, formState: { errors } } = useForm();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const { createUser, updatUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    avatar: "",
    bloodGroup: "",
    district: "",
    upazila: "",
    password: "",
    confirmPassword: "",
  });

  console.log("data check",formData);

  useEffect(() => {
    fetch("/upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data))
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "district") {
      const selectedDistrict = districts.find((d) => d.name === value);
      if (selectedDistrict) {
        const filtered = upazilas.filter(
          (u) => u.district_id === selectedDistrict.id.toString()
        );
        setFilteredUpazilas(filtered);
      } else {
        setFilteredUpazilas([]);
      }
      setFormData({ ...formData, district: value, upazila: "" });
    }

  };



  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, avatar: file });
      const reader = new FileReader();
      reader.onloadend = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data:", formData);

    createUser(formData.email, formData.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updatUserProfile(formData.name)
          .then(() => {

            const userInfo = {
              name: formData.name,
              email: formData.email,
              district: formData.district,
              upazila: formData.upazila,
              bloodGroup: formData.bloodGroup,
              avatar: avatarPreview,
              password: formData.password,
            };

            console.log("User Info:", userInfo);
            axiosPublic.post("/register", userInfo).then((res) => {
              console.log("User added to the database", res);  
              if (res.data.userId) {
                console.log("User added to the database");
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/dashboard");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-full border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Avatar */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="file-input w-full max-w-xs"
            required
          />
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Avatar Preview"
              className="mt-2 w-20 h-20 rounded-full"
            />
          )}
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Blood Group</label>
          <select
            name="bloodGroup"
            className="w-full border px-3 py-2 rounded"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>

        {/* District */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">District</label>
          <select
            name="district"
            className="w-full border px-3 py-2 rounded"
            value={formData.district}
            onChange={handleInputChange}
          // required
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


        {/* Upazila */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Upazila</label>

          <select
            name="upazila"
            className="w-full border px-3 py-2 rounded"
            value={formData.upazila}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Upazila
            </option>
            {filteredUpazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.name}>
                {upazila.name}
              </option>
            ))}
          </select>



        </div>


        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border px-3 py-2 rounded"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border px-3 py-2 rounded"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
      <p className='px-10'><small>Already have an account <Link to="/login">login</Link> </small></p>
    </div>
  );
};

export default Register;
