import React, { useState } from "react";

const SearchPage = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    district: "",
    upazila: ""
  });

  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Replace with your API endpoint
      const response = await fetch(
        `/api/donors?bloodGroup=${formData.bloodGroup}&district=${formData.district}&upazila=${formData.upazila}`
      );
      const data = await response.json();
      setDonors(data);
    } catch (error) {
      console.error("Error fetching donors:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
          Search for Donors
        </h2>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            {/* Blood Group Selector */}
            <div>
              <label htmlFor="bloodGroup" className="block text-gray-600 mb-2">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
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

            {/* District Selector */}
            <div>
              <label htmlFor="district" className="block text-gray-600 mb-2">
                District
              </label>
              <select
                name="district"
                id="district"
                value={formData.district}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select District</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                {/* Add other districts here */}
              </select>
            </div>

            {/* Upazila Selector */}
            <div>
              <label htmlFor="upazila" className="block text-gray-600 mb-2">
                Upazila
              </label>
              <select
                name="upazila"
                id="upazila"
                value={formData.upazila}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Upazila</option>
                <option value="Mirpur">Mirpur</option>
                <option value="Gulshan">Gulshan</option>
                {/* Add other upazilas here */}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        {/* Donor List */}
        {isLoading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : donors.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {donor.name}
                </h3>
                <p className="text-gray-600">Blood Group: {donor.bloodGroup}</p>
                <p className="text-gray-600">District: {donor.district}</p>
                <p className="text-gray-600">Upazila: {donor.upazila}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No donors found. Please try a different search.
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
