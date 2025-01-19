
import axios from "axios";
import { useAuth } from "../Provider/AuthProvider";

const useAdmin = () => {
  const { user } = useAuth();

  // Define the fetcher function
  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${user?.email}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching admin status:", error);
      throw new Error("Failed to fetch admin status");
    }
  };



  return fetchUser;
};

export default useAdmin;
