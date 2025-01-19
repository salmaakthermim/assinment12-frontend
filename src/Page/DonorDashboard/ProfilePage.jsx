import React from "react";
import ProfileForm from "./ProfileForm";
import { useAuth } from "../../Provider/AuthProvider";


const ProfilePage = () => {
    const {user} = useAuth();
  const users = {
    name: "John Doe",
    email: user.email,
    district: "Dhaka",
    upazila: "Mirpur",
    bloodGroup: "A+",
  };

  const handleSave = (updatedData) => {
    console.log("Updated Data:", updatedData);
    // Save the updated data to the database here
  };

  return (
    <div>
      <ProfileForm user={users} onSave={handleSave} />
    </div>
  );
};

export default ProfilePage;
