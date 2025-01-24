import axios from "axios";
import { useAuth } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    const { user } = useAuth();
    const { data: userData, isPending: isUserDataLoading } = useQuery({
        queryKey: [user?.email, 'userData'],
        queryFn: async () => {
            console.log("Fetching user data for email:", user.email); // Logs email
            const res = await axios.get(`/user/${user.email}`);
            console.log("API Response:", res.data); // Logs API response
            return res.data; // Return the full user data object
        },
        enabled: !!user?.email,
    });

    return [userData, isUserDataLoading];
};


export default useUser;
