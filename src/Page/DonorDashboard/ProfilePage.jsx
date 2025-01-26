import React from "react";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import  { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
// import { useAuth } from "../../Provider/AuthProvider";


const ProfilePage = () => {
  const { userProfile, updateUserProfile } = useContext(AuthContext);

  const handleSave = (updatedData) => {
    // Update user profile in the backend
    axios.put(`https://assignment-12-server-two-hazel.vercel.app/user-profile/${userProfile.email}`, updatedData).then((res) => {
      if (res.data.success) {
        Swal.fire("Success", "Profile updated successfully", "success");
      }
    });
  };

  return <ProfileForm user={userProfile} onSave={handleSave} />;
};

export default ProfilePage;
