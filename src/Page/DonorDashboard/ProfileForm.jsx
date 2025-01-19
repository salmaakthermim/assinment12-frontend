import React, { useState } from "react";

const ProfileForm = ({ user, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow p-4 rounded">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Profile</h2>
        <button
          className="btn btn-primary"
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div>
          <label className="block font-medium">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Upazila</label>
          <input
            type="text"
            name="upazila"
            value={formData.upazila}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            disabled={!isEditing}
            className="input input-bordered w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
