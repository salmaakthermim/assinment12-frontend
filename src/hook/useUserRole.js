import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useUserRole = (email) => {
    const { data: userRole, isLoading } = useQuery({
        queryKey: ['userRole', email],
        queryFn: async () => {
            const response = await axios.get(`https://assignment-12-server-two-hazel.vercel.app/user/${email}`)
            return response.data.data.role
        }
    })
    return [userRole, isLoading]
}

export default useUserRole
