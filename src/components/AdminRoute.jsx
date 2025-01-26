import { Navigate } from 'react-router-dom'
// import useUserRole from '../hooks/useUserRole'
import { useAuth } from '../Provider/AuthProvider' // Adjust path as needed
import useUserRole from '../hook/useUserRole'
import LoadingSpinner from './LoadingSpinner'

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [userRole, isLoading] = useUserRole(user?.email)

    if (loading || isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (userRole === 'admin') {
        return children
    }

    return <Navigate to="/dashboard" />
}

export default AdminRoute
