import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../components/Modal';
// import Modal from '../components/Modal'; // We'll create this

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Fetch users with filters and pagination
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users`, {
        params: {
          status: filter === 'all' ? '' : filter,
          page,
          limit: 10
        }
      });
      setUsers(data.users);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filter, page]);

  // Handle status update
  const handleStatusUpdate = async (newStatus) => {
    try {
      await axios.patch(`http://localhost:5000/users/${selectedUser._id}/status`, {
        status: newStatus
      });
      setShowStatusModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Handle role update
  const handleRoleUpdate = async (newRole) => {
    try {
      await axios.patch(`http://localhost:5000/users/${selectedUser._id}/role`, {
        role: newRole
      });
      setShowRoleModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <div className="p-6">
      {/* Filter Select */}
      <div className="mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Users</option>
          <option value="active">Active Users</option>
          <option value="blocked">Blocked Users</option>
        </select>
      </div>

      {/* Users Table */}
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td><img src={user.avatar} alt="" className="w-10 h-10 rounded-full" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td className="relative">
                <button 
                  onClick={() => setDropdownOpen(dropdownOpen === user._id ? null : user._id)}
                  className="px-2"
                >
                  •••
                </button>
                
                {dropdownOpen === user._id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowStatusModal(true);
                        setDropdownOpen(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit Status
                    </button>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowRoleModal(true);
                        setDropdownOpen(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit Role
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Status Modal */}
      {showStatusModal && (
        <Modal onClose={() => setShowStatusModal(false)}>
          <h3 className="text-lg font-bold mb-4">Update User Status</h3>
          <select
            className="w-full p-2 border rounded mb-4"
            defaultValue={selectedUser?.status}
            onChange={(e) => handleStatusUpdate(e.target.value)}
          >
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </Modal>
      )}

      {/* Role Modal */}
      {showRoleModal && (
        <Modal onClose={() => setShowRoleModal(false)}>
          <h3 className="text-lg font-bold mb-4">Update User Role</h3>
          <select
            className="w-full p-2 border rounded mb-4"
            defaultValue={selectedUser?.role}
            onChange={(e) => handleRoleUpdate(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="volunteer">Volunteer</option>
            <option value="donor">Donor</option>
          </select>
        </Modal>
      )}
    </div>
  );
};

export default AllUsers;
