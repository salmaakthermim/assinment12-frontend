import { Navigate } from 'react-router-dom'
// import useUserRole from '../hooks/useUserRole'
import { useAuth } from '../Provider/AuthProvider' // Adjust path as needed
import useUserRole from '../hook/useUserRole'

const VolunteerRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [userRole, isLoading] = useUserRole(user?.email)

    if (loading || isLoading) {
        return <div>Loading...</div>
    }

    if (userRole === 'volunteer') {
        return children
    }

    return <Navigate to="/dashboard" />
}

export default VolunteerRoute
